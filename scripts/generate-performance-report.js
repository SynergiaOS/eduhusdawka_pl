#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const LHCI_RESULTS_DIR = path.join(process.cwd(), '.lighthouseci');
const PHASE_7_RESULTS_DIR = path.join(LHCI_RESULTS_DIR, 'phase-7-results');
const OUTPUT_FILE = path.join(process.cwd(), 'docs', 'PHASE-7-PERFORMANCE-RESULTS.md');
const BUILD_DIR = path.join(process.cwd(), '.next');

// Ensure directories exist
[PHASE_7_RESULTS_DIR, path.dirname(OUTPUT_FILE)].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function findLatestLighthouseResults() {
  const results = [];

  if (!fs.existsSync(LHCI_RESULTS_DIR)) {
    console.warn('❌ Lighthouse results directory not found');
    return results;
  }

  try {
    const files = fs.readdirSync(LHCI_RESULTS_DIR);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    jsonFiles.forEach(file => {
      try {
        const filePath = path.join(LHCI_RESULTS_DIR, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (Array.isArray(data)) {
          results.push(...data);
        } else {
          results.push(data);
        }
      } catch (err) {
        console.warn(`⚠️  Failed to parse ${file}:`, err.message);
      }
    });
  } catch (err) {
    console.error('❌ Error reading Lighthouse results:', err.message);
  }

  return results;
}

function calculateMetrics(results) {
  if (!results.length) return {};

  const metrics = {
    performance: [],
    fcp: [],
    lcp: [],
    cls: [],
    tbt: [],
    speedIndex: []
  };

  results.forEach(result => {
    if (result.lhr) {
      const lhr = result.lhr;
      metrics.performance.push(lhr.categories.performance.score * 100);
      metrics.fcp.push(lhr.audits['first-contentful-paint'].numericValue);
      metrics.lcp.push(lhr.audits['largest-contentful-paint'].numericValue);
      metrics.cls.push(lhr.audits['cumulative-layout-shift'].numericValue);
      metrics.tbt.push(lhr.audits['total-blocking-time'].numericValue);
      metrics.speedIndex.push(lhr.audits['speed-index'].numericValue);
    }
  });

  const averages = {};
  Object.keys(metrics).forEach(key => {
    const values = metrics[key];
    if (values.length > 0) {
      const sum = values.reduce((a, b) => a + b, 0);
      averages[key] = sum / values.length;
      averages[key + '_min'] = Math.min(...values);
      averages[key + '_max'] = Math.max(...values);
    }
  });

  return averages;
}

function getBundleSizeInfo() {
  const info = {
    sharedJs: { size: 0, target: 99.7 * 1024 },
    homepage: { size: 0, target: 168 * 1024 },
    middleware: { size: 0, target: 33 * 1024 }
  };

  try {
    const manifestPath = path.join(BUILD_DIR, 'build-manifest.json');
    if (fs.existsSync(manifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

      // Calculate homepage size
      if (manifest.pages && manifest.pages['/']) {
        info.homepage.size = manifest.pages['/'].reduce((total, file) => {
          const filePath = path.join(BUILD_DIR, file);
          if (fs.existsSync(filePath)) {
            return total + fs.statSync(filePath).size;
          }
          return total;
        }, 0);
      }

      // Calculate shared JS size (rough estimation)
      if (manifest.sharedFiles) {
        info.sharedJs.size = manifest.sharedFiles.reduce((total, file) => {
          const filePath = path.join(BUILD_DIR, file);
          if (fs.existsSync(filePath)) {
            return total + fs.statSync(filePath).size;
          }
          return total;
        }, 0);
      }
    }
  } catch (err) {
    console.warn('⚠️  Could not read build manifest:', err.message);
  }

  return info;
}

function generateReport(metrics, bundleInfo) {
  const timestamp = new Date().toISOString().split('T')[0];
  const totalTests = Object.keys(metrics).length;

  let report = `# Phase 7 Performance Report\n\n`;
  report += `**Generated:** ${timestamp}\n`;
  report += `**Tests Run:** ${totalTests}\n\n`;

  // Core Web Vitals Summary
  report += `## Core Web Vitals Summary\n\n`;
  report += `| Metric | Target | Actual | Status |\n`;
  report += `|--------|--------|--------|--------|\n`;

  const cwvTargets = {
    fcp: { target: 800, name: 'First Contentful Paint' },
    lcp: { target: 1300, name: 'Largest Contentful Paint' },
    cls: { target: 0.05, name: 'Cumulative Layout Shift' },
    tbt: { target: 300, name: 'Total Blocking Time' },
    speedIndex: { target: 3000, name: 'Speed Index' }
  };

  Object.entries(cwvTargets).forEach(([key, config]) => {
    const actual = metrics[key];
    const status = actual <= config.target ? '✅' : '❌';
    const actualStr = typeof actual === 'number' ?
      (key === 'cls' ? actual.toFixed(3) : Math.round(actual) + 'ms') : 'N/A';
    const targetStr = key === 'cls' ? config.target : config.target + 'ms';

    report += `| ${config.name} | ${targetStr} | ${actualStr} | ${status} |\n`;
  });

  // Bundle Size Summary
  report += `\n## Bundle Size Analysis\n\n`;
  report += `| Component | Target | Actual | Status |\n`;
  report += `|-----------|--------|--------|--------|\n`;

  Object.entries(bundleInfo).forEach(([key, info]) => {
    const actualKB = (info.size / 1024).toFixed(1);
    const targetKB = (info.target / 1024).toFixed(1);
    const status = info.size <= info.target ? '✅' : '❌';
    report += `| ${key.charAt(0).toUpperCase() + key.slice(1)} | ${targetKB}KB | ${actualKB}KB | ${status} |\n`;
  });

  // Detailed Metrics
  report += `\n## Detailed Performance Metrics\n\n`;
  report += `| Metric | Average | Min | Max |\n`;
  report += `|--------|---------|-----|-----|\n`;

  const metricNames = {
    performance: 'Performance Score',
    fcp: 'First Contentful Paint (ms)',
    lcp: 'Largest Contentful Paint (ms)',
    cls: 'Cumulative Layout Shift',
    tbt: 'Total Blocking Time (ms)',
    speedIndex: 'Speed Index (ms)'
  };

  Object.entries(metricNames).forEach(([key, name]) => {
    const avg = metrics[key];
    const min = metrics[key + '_min'];
    const max = metrics[key + '_max'];

    if (avg !== undefined) {
      const avgStr = key === 'performance' || key === 'cls' ?
        avg.toFixed(1) : Math.round(avg).toLocaleString();
      const minStr = key === 'performance' || key === 'cls' ?
        min.toFixed(1) : Math.round(min).toLocaleString();
      const maxStr = key === 'performance' || key === 'cls' ?
        max.toFixed(1) : Math.round(max).toLocaleString();

      report += `| ${name} | ${avgStr} | ${minStr} | ${maxStr} |\n`;
    }
  });

  // Links to Detailed Reports
  report += `\n## Detailed Reports\n\n`;
  report += `- [Bundle Analyzer Results](./bundle-analyzer-report.html)\n`;
  report += `- [Lighthouse HTML Reports](${path.relative(path.dirname(OUTPUT_FILE), PHASE_7_RESULTS_DIR)})\n`;
  report += `- [Performance Measurement Guide](./PERFORMANCE-MEASUREMENT-GUIDE.md)\n`;

  // Recommendations
  report += `\n## Recommendations\n\n`;

  Object.entries(cwvTargets).forEach(([key, config]) => {
    const actual = metrics[key];
    if (actual > config.target) {
      report += `- **${config.name}**: Exceeds target by ${typeof actual === 'number' ?
        (key === 'cls' ? (actual - config.target).toFixed(3) : Math.round(actual - config.target) + 'ms') : 'N/A'}\n`;
    }
  });

  Object.entries(bundleInfo).forEach(([key, info]) => {
    if (info.size > info.target) {
      const excessKB = ((info.size - info.target) / 1024).toFixed(1);
      report += `- **${key.charAt(0).toUpperCase() + key.slice(1)} Bundle**: Exceeds target by ${excessKB}KB\n`;
    }
  });

  return report;
}

// Main execution
async function main() {
  console.log('🔍 Reading Lighthouse results...');
  const results = findLatestLighthouseResults();

  if (!results.length) {
    console.error('❌ No Lighthouse results found. Run `npm run perf:collect` first.');
    process.exit(1);
  }

  console.log(`📊 Processing ${results.length} results...`);
  const metrics = calculateMetrics(results);

  console.log('📦 Analyzing bundle sizes...');
  const bundleInfo = getBundleSizeInfo();

  console.log('📝 Generating report...');
  const report = generateReport(metrics, bundleInfo);

  fs.writeFileSync(OUTPUT_FILE, report);
  console.log(`✅ Report generated: ${OUTPUT_FILE}`);

  // Save metrics for comparison
  const comparisonFile = path.join(LHCI_RESULTS_DIR, 'phase-7-comparison.json');
  const comparisonData = {
    timestamp: new Date().toISOString(),
    metrics,
    bundleInfo,
    resultsCount: results.length
  };
  fs.writeFileSync(comparisonFile, JSON.stringify(comparisonData, null, 2));
  console.log(`💾 Comparison data saved: ${comparisonFile}`);
}

main().catch(console.error);