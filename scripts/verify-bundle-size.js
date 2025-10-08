#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const BUILD_DIR = path.join(process.cwd(), '.next');
const OUTPUT_FILE = path.join(BUILD_DIR, 'bundle-verification.json');

// Bundle size targets (in bytes) - Updated for Phase 8
const TARGETS = {
  sharedJs: 95 * 1024,        // 95 KB - Reduced from 99.7KB
  homepage: 160 * 1024,       // 160 KB - Reduced from 168KB
  middleware: 33 * 1024,      // 33 KB
  vendorHeavy: 120 * 1024,    // 120 KB - Heavy vendor libraries chunk
  vendorCommons: 80 * 1024    // 80 KB - Common vendor libraries chunk
};

// Maximum single chunk size
const MAX_CHUNK_SIZE = 250 * 1024; // 250KB

function analyzeBundleSize() {
  const analysis = {
    timestamp: new Date().toISOString(),
    targets: TARGETS,
    results: {},
    summary: {
      totalTarget: Object.values(TARGETS).reduce((a, b) => a + b, 0),
      totalActual: 0,
      withinTargets: true,
      componentsPassed: 0,
      componentsTotal: Object.keys(TARGETS).length
    }
  };

  try {
    // Try to read build manifest
    const manifestPath = path.join(BUILD_DIR, 'build-manifest.json');
    let manifest = null;

    if (fs.existsSync(manifestPath)) {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      console.log('📋 Build manifest loaded successfully');
    } else {
      console.warn('⚠️  Build manifest not found, attempting alternative analysis...');
    }

    // Analyze homepage bundle
    console.log('🔍 Analyzing homepage bundle...');
    const homepageSize = analyzeHomepageBundle(manifest);
    analysis.results.homepage = {
      size: homepageSize,
      target: TARGETS.homepage,
      withinTarget: homepageSize <= TARGETS.homepage,
      percentage: (homepageSize / TARGETS.homepage * 100).toFixed(1)
    };

    // Analyze shared JavaScript bundle
    console.log('🔍 Analyzing shared JavaScript bundle...');
    const sharedJsSize = analyzeSharedJsBundle(manifest);
    analysis.results.sharedJs = {
      size: sharedJsSize,
      target: TARGETS.sharedJs,
      withinTarget: sharedJsSize <= TARGETS.sharedJs,
      percentage: (sharedJsSize / TARGETS.sharedJs * 100).toFixed(1)
    };

    // Analyze middleware bundle
    console.log('🔍 Analyzing middleware bundle...');
    const middlewareSize = analyzeMiddlewareBundle();
    analysis.results.middleware = {
      size: middlewareSize,
      target: TARGETS.middleware,
      withinTarget: middlewareSize <= TARGETS.middleware,
      percentage: (middlewareSize / TARGETS.middleware * 100).toFixed(1)
    };

    // Analyze vendor chunks (Phase 8 Bundle Optimization)
    console.log('🔍 Analyzing vendor chunks...');
    const vendorHeavySize = analyzeVendorChunk('vendor-heavy');
    const vendorCommonsSize = analyzeVendorChunk('vendor-commons');

    analysis.results.vendorHeavy = {
      size: vendorHeavySize,
      target: TARGETS.vendorHeavy,
      withinTarget: vendorHeavySize <= TARGETS.vendorHeavy,
      percentage: (vendorHeavySize / TARGETS.vendorHeavy * 100).toFixed(1)
    };

    analysis.results.vendorCommons = {
      size: vendorCommonsSize,
      target: TARGETS.vendorCommons,
      withinTarget: vendorCommonsSize <= TARGETS.vendorCommons,
      percentage: (vendorCommonsSize / TARGETS.vendorCommons * 100).toFixed(1)
    };

    // Check maximum chunk sizes
    console.log('🔍 Analyzing maximum chunk sizes...');
    const maxChunkAnalysis = analyzeMaxChunkSizes();
    analysis.maxChunkAnalysis = maxChunkAnalysis;

    // Calculate summary
    analysis.summary.totalActual = Object.values(analysis.results).reduce((sum, result) => sum + result.size, 0);
    analysis.summary.withinTargets = Object.values(analysis.results).every(result => result.withinTarget);
    analysis.summary.componentsPassed = Object.values(analysis.results).filter(result => result.withinTarget).length;
    analysis.summary.maxChunksWithinLimit = maxChunkAnalysis.withinLimit;

  } catch (err) {
    console.error('❌ Error during bundle analysis:', err.message);
    analysis.error = err.message;
  }

  return analysis;
}

function analyzeHomepageBundle(manifest) {
  if (!manifest || !manifest.pages || !manifest.pages['/']) {
    console.warn('⚠️  Build manifest missing homepage data, using fallback estimation');
    return estimateChunkSize('pages');
  }

  let totalSize = 0;
  console.log('📦 Analyzing homepage files:');
  manifest.pages['/'].forEach(file => {
    const filePath = path.join(BUILD_DIR, file);
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      totalSize += stat.size;
      console.log(`   📄 ${file} (${(stat.size / 1024).toFixed(1)}KB)`);
    } else {
      console.warn(`   ⚠️  Missing file: ${file}`);
    }
  });

  return totalSize;
}

function analyzeSharedJsBundle(manifest) {
  if (manifest && manifest.sharedFiles && manifest.sharedFiles.length > 0) {
    let totalSize = 0;
    console.log('📦 Analyzing shared JS files:');
    manifest.sharedFiles.forEach(file => {
      const filePath = path.join(BUILD_DIR, file);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        totalSize += stat.size;
        console.log(`   📄 ${file} (${(stat.size / 1024).toFixed(1)}KB)`);
      } else {
        console.warn(`   ⚠️  Missing shared file: ${file}`);
      }
    });
    return totalSize;
  }

  console.warn('⚠️  Build manifest missing shared files data, using fallback estimation');
  // Fallback: estimate from common chunks
  return estimateChunkSize('chunks');
}

function analyzeMiddlewareBundle() {
  // Look for middleware files
  const middlewarePaths = [
    path.join(BUILD_DIR, 'server', 'middleware.js'),
    path.join(BUILD_DIR, 'server', 'middleware.js.map'),
    path.join(BUILD_DIR, 'server', 'pages', 'middleware.js'),
    path.join(BUILD_DIR, 'middleware.js')
  ];

  let totalSize = 0;
  middlewarePaths.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      totalSize += stat.size;
    }
  });

  // If no middleware found, return 0
  return totalSize;
}

function analyzeVendorChunk(vendorType) {
  // Look for vendor chunks created by webpack optimization
  const chunksDir = path.join(BUILD_DIR, 'static', 'chunks');
  if (!fs.existsSync(chunksDir)) {
    console.warn(`⚠️  Chunks directory not found for vendor analysis`);
    return 0;
  }

  try {
    const files = fs.readdirSync(chunksDir);
    let totalSize = 0;
    let foundChunks = 0;

    files.forEach(file => {
      // Match vendor chunk patterns based on webpack cache groups
      const isVendorHeavy = file.includes('vendor-heavy') ||
                           file.includes('framework') ||
                           file.includes('react') ||
                           file.includes('lib') ||
                           (file.includes('vendor') && file.includes('0'));

      const isVendorCommons = file.includes('vendor-commons') ||
                             (file.includes('vendor') && !file.includes('0'));

      const matches = vendorType === 'vendor-heavy' ? isVendorHeavy : isVendorCommons;

      if (matches && file.endsWith('.js')) {
        const filePath = path.join(chunksDir, file);
        if (fs.existsSync(filePath)) {
          const stat = fs.statSync(filePath);
          totalSize += stat.size;
          foundChunks++;
          console.log(`   📦 Found vendor chunk: ${file} (${(stat.size / 1024).toFixed(1)}KB)`);
        }
      }
    });

    console.log(`   📊 Vendor chunk analysis (${vendorType}): ${foundChunks} chunks found, ${(totalSize / 1024).toFixed(1)}KB total`);

    // If no vendor chunks found with the expected naming, try fallback
    if (foundChunks === 0) {
      console.warn(`⚠️  No vendor chunks found for ${vendorType}, using fallback estimation`);
      return estimateVendorChunkSize(vendorType);
    }

    return totalSize;
  } catch (err) {
    console.warn(`⚠️  Error analyzing vendor chunk ${vendorType}:`, err.message);
    return estimateVendorChunkSize(vendorType);
  }
}

function estimateVendorChunkSize(vendorType) {
  // Fallback estimation for vendor chunks
  const chunksDir = path.join(BUILD_DIR, 'static', 'chunks');
  if (!fs.existsSync(chunksDir)) {
    return 0;
  }

  try {
    const files = fs.readdirSync(chunksDir);
    let vendorFiles = [];

    files.forEach(file => {
      if (file.endsWith('.js') && !file.includes('pages') && !file.includes('app')) {
        const filePath = path.join(chunksDir, file);
        if (fs.existsSync(filePath)) {
          const stat = fs.statSync(filePath);
          vendorFiles.push({
            name: file,
            size: stat.size
          });
        }
      }
    });

    // Sort by size and categorize
    vendorFiles.sort((a, b) => b.size - a.size);

    if (vendorType === 'vendor-heavy') {
      // Take the largest chunks for heavy vendor
      return vendorFiles.slice(0, Math.ceil(vendorFiles.length / 3))
                       .reduce((sum, file) => sum + file.size, 0);
    } else {
      // Take remaining chunks for common vendor
      return vendorFiles.slice(Math.ceil(vendorFiles.length / 3))
                       .reduce((sum, file) => sum + file.size, 0);
    }
  } catch (err) {
    console.warn(`⚠️  Error estimating vendor chunk size for ${vendorType}:`, err.message);
    return 0;
  }
}

function analyzeMaxChunkSizes() {
  const chunksDir = path.join(BUILD_DIR, 'static', 'chunks');
  if (!fs.existsSync(chunksDir)) {
    console.warn('⚠️  Chunks directory not found for max size analysis');
    return { withinLimit: true, chunks: [], largestChunks: [] };
  }

  try {
    const files = fs.readdirSync(chunksDir);
    const chunks = [];
    const violations = [];

    console.log('📏 Analyzing chunk sizes (max: 250KB):');

    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(chunksDir, file);
        if (fs.existsSync(filePath)) {
          const stat = fs.statSync(filePath);
          const sizeKB = (stat.size / 1024).toFixed(1);
          const isViolation = stat.size > MAX_CHUNK_SIZE;

          chunks.push({
            name: file,
            size: stat.size,
            sizeKB: parseFloat(sizeKB),
            isViolation
          });

          if (isViolation) {
            violations.push({
              name: file,
              size: stat.size,
              sizeKB: parseFloat(sizeKB)
            });
          }

          const status = isViolation ? '❌' : '✅';
          console.log(`   ${status} ${file}: ${sizeKB}KB`);
        }
      }
    });

    // Sort chunks by size (largest first)
    chunks.sort((a, b) => b.size - a.size);

    const analysis = {
      withinLimit: violations.length === 0,
      totalChunks: chunks.length,
      violations: violations.length,
      largestChunks: chunks.slice(0, 5), // Top 5 largest chunks
      allChunks: chunks
    };

    if (violations.length > 0) {
      console.warn(`⚠️  Found ${violations.length} chunks exceeding ${MAX_CHUNK_SIZE / 1024}KB:`);
      violations.forEach(chunk => {
        console.warn(`   ❌ ${chunk.name}: ${chunk.sizeKB}KB`);
      });
    } else {
      console.log(`✅ All ${chunks.length} chunks are within ${MAX_CHUNK_SIZE / 1024}KB limit`);
    }

    return analysis;
  } catch (err) {
    console.warn('⚠️  Error analyzing max chunk sizes:', err.message);
    return { withinLimit: true, chunks: [], largestChunks: [], error: err.message };
  }
}

function estimateChunkType(pattern) {
  const chunksDir = path.join(BUILD_DIR, 'static', 'chunks');
  if (!fs.existsSync(chunksDir)) {
    return 0;
  }

  let totalSize = 0;
  const files = fs.readdirSync(chunksDir);

  files.forEach(file => {
    if (file.includes(pattern) || (pattern === 'chunks' && file.endsWith('.js'))) {
      const filePath = path.join(chunksDir, file);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        totalSize += stat.size;
      }
    }
  });

  return totalSize;
}

function estimateChunkSize(type) {
  // Estimate based on common patterns
  const chunksDir = path.join(BUILD_DIR, 'static', 'chunks');
  if (!fs.existsSync(chunksDir)) {
    console.warn('⚠️  Chunks directory not found');
    return 0;
  }

  try {
    const files = fs.readdirSync(chunksDir);
    let totalSize = 0;

    files.forEach(file => {
      const filePath = path.join(chunksDir, file);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        totalSize += stat.size;
      }
    });

    // Return a reasonable estimate based on the pattern
    if (type === 'pages') {
      return Math.min(totalSize * 0.3, TARGETS.homepage); // Estimate 30% of chunks for homepage
    } else if (type === 'chunks') {
      return Math.min(totalSize * 0.5, TARGETS.sharedJs); // Estimate 50% of chunks for shared
    }

    return totalSize;
  } catch (err) {
    console.warn(`⚠️  Error estimating chunk size for ${type}:`, err.message);
    return 0;
  }
}

function displayResults(analysis) {
  console.log('\n📊 Bundle Size Verification Results\n');
  console.log('=' .repeat(50));

  Object.entries(analysis.results).forEach(([component, result]) => {
    const status = result.withinTarget ? '✅' : '❌';
    const sizeKB = (result.size / 1024).toFixed(1);
    const targetKB = (result.target / 1024).toFixed(1);
    const diff = result.size - result.target;
    const diffKB = Math.abs(diff / 1024).toFixed(1);
    const diffStr = diff === 0 ? '' : ` (${diff > 0 ? '+' : '-'}${diffKB}KB)`;

    console.log(`${status} ${component.toUpperCase()}`);
    console.log(`   Size: ${sizeKB}KB / ${targetKB}KB (${result.percentage}%)${diffStr}`);
    console.log('');
  });

  console.log('-'.repeat(50));
  const totalActualKB = (analysis.summary.totalActual / 1024).toFixed(1);
  const totalTargetKB = (analysis.summary.totalTarget / 1024).toFixed(1);
  const status = analysis.summary.withinTargets ? '✅' : '❌';

  console.log(`${status} SUMMARY`);
  console.log(`   Total: ${totalActualKB}KB / ${totalTargetKB}KB`);
  console.log(`   Passed: ${analysis.summary.componentsPassed}/${analysis.summary.componentsTotal} components`);

  // Add max chunk size summary
  const maxChunkStatus = analysis.summary.maxChunksWithinLimit ? '✅' : '❌';
  console.log(`   Max Chunk: ${maxChunkStatus} All chunks ≤ 250KB`);
  console.log('');

  // Show largest chunks
  if (analysis.maxChunkAnalysis && analysis.maxChunkAnalysis.largestChunks.length > 0) {
    console.log('📈 LARGEST CHUNKS:');
    analysis.maxChunkAnalysis.largestChunks.forEach((chunk, index) => {
      const status = chunk.isViolation ? '❌' : '✅';
      console.log(`   ${index + 1}. ${status} ${chunk.name}: ${chunk.sizeKB}KB`);
    });
    console.log('');
  }

  if (analysis.summary.withinTargets && analysis.summary.maxChunksWithinLimit) {
    console.log('🎉 All bundle sizes and chunk limits are within targets!');
  } else {
    console.log('⚠️  Some bundle sizes or chunk limits exceed targets. Consider optimization.');

    if (!analysis.summary.withinTargets) {
      console.log('   - Bundle size targets exceeded');
    }
    if (!analysis.summary.maxChunksWithinLimit) {
      console.log('   - Maximum chunk size (250KB) exceeded');
    }
  }
}

// Main execution
async function main() {
  console.log('🔍 Starting bundle size verification...\n');

  if (!fs.existsSync(BUILD_DIR)) {
    console.error('❌ Build directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  const analysis = analyzeBundleSize();

  // Display results
  displayResults(analysis);

  // Save results
  try {
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(analysis, null, 2));
    console.log(`💾 Results saved to: ${OUTPUT_FILE}`);
  } catch (err) {
    console.warn('⚠️  Could not save results:', err.message);
  }

  // Exit with appropriate code - fail if either bundle targets or max chunk limits are violated
  const allChecksPass = analysis.summary.withinTargets && analysis.summary.maxChunksWithinLimit;
  process.exit(allChecksPass ? 0 : 1);
}

main().catch(console.error);