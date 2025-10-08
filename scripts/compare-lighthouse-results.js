#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const LHCI_RESULTS_DIR = path.join(process.cwd(), '.lighthouseci');
const COMPARISON_FILE = path.join(LHCI_RESULTS_DIR, 'phase-7-comparison.json');
const PREVIOUS_RESULTS = path.join(LHCI_RESULTS_DIR, 'previous-results.json');

function loadComparisonData() {
  if (!fs.existsSync(COMPARISON_FILE)) {
    console.warn('⚠️  No current comparison data found. Run `npm run perf:report` first.');
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(COMPARISON_FILE, 'utf8'));
  } catch (err) {
    console.error('❌ Error loading comparison data:', err.message);
    return null;
  }
}

function loadPreviousResults() {
  if (!fs.existsSync(PREVIOUS_RESULTS)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(PREVIOUS_RESULTS, 'utf8'));
  } catch (err) {
    console.warn('⚠️  Error loading previous results:', err.message);
    return null;
  }
}

function saveCurrentResults(results) {
  fs.writeFileSync(PREVIOUS_RESULTS, JSON.stringify(results, null, 2));
}

function calculateDelta(current, previous, key) {
  if (!current || !previous || current[key] === undefined || previous[key] === undefined) {
    return null;
  }

  const currentVal = current[key];
  const previousVal = previous[key];
  const delta = currentVal - previousVal;
  const percentChange = previousVal !== 0 ? (delta / previousVal) * 100 : 0;

  return {
    current: currentVal,
    previous: previousVal,
    delta,
    percentChange,
    improved: isImprovement(key, delta)
  };
}

function isImprovement(key, delta) {
  // Lower is better for these metrics
  const lowerIsBetter = ['fcp', 'lcp', 'cls', 'tbt', 'speedIndex'];
  // Higher is better for these metrics
  const higherIsBetter = ['performance'];

  if (lowerIsBetter.includes(key)) {
    return delta < 0;
  } else if (higherIsBetter.includes(key)) {
    return delta > 0;
  }
  return false;
}

function formatDelta(delta, key) {
  const symbol = delta.improved ? '✅' : '❌';
  const value = Math.abs(delta.delta);
  const percent = Math.abs(delta.percentChange);

  let formattedValue;
  if (key === 'performance' || key === 'cls') {
    formattedValue = value.toFixed(1);
  } else {
    formattedValue = Math.round(value).toLocaleString() + 'ms';
  }

  const direction = delta.improved ? '↓' : '↑';
  return `${symbol} ${formattedValue} (${direction}${percent.toFixed(1)}%)`;
}

function generateComparisonReport(current, previous) {
  let report = `# Performance Comparison Report\n\n`;
  report += `**Current:** ${new Date(current.timestamp).toLocaleString()}\n`;
  report += `**Previous:** ${new Date(previous.timestamp).toLocaleString()}\n\n`;

  // Performance Metrics Comparison
  report += `## Performance Metrics Comparison\n\n`;
  report += `| Metric | Current | Previous | Delta | Status |\n`;
  report += `|--------|---------|----------|-------|--------|\n`;

  const metrics = ['performance', 'fcp', 'lcp', 'cls', 'tbt', 'speedIndex'];
  const metricNames = {
    performance: 'Performance Score',
    fcp: 'First Contentful Paint',
    lcp: 'Largest Contentful Paint',
    cls: 'Cumulative Layout Shift',
    tbt: 'Total Blocking Time',
    speedIndex: 'Speed Index'
  };

  metrics.forEach(metric => {
    const delta = calculateDelta(current.metrics, previous.metrics, metric);
    if (delta) {
      const currentStr = metric === 'performance' || metric === 'cls' ?
        delta.current.toFixed(1) : Math.round(delta.current).toLocaleString();
      const previousStr = metric === 'performance' || metric === 'cls' ?
        delta.previous.toFixed(1) : Math.round(delta.previous).toLocaleString();
      const deltaStr = formatDelta(delta, metric);

      report += `| ${metricNames[metric]} | ${currentStr} | ${previousStr} | ${deltaStr} |\n`;
    }
  });

  // Bundle Size Comparison
  report += `\n## Bundle Size Comparison\n\n`;
  report += `| Component | Current | Previous | Delta | Status |\n`;
  report += `|-----------|---------|----------|-------|--------|\n`;

  const bundles = ['sharedJs', 'homepage', 'middleware'];
  const bundleNames = {
    sharedJs: 'Shared JS',
    homepage: 'Homepage',
    middleware: 'Middleware'
  };

  bundles.forEach(bundle => {
    const delta = calculateDelta(current.bundleInfo, previous.bundleInfo, bundle);
    if (delta) {
      const currentKB = (delta.current / 1024).toFixed(1);
      const previousKB = (delta.previous / 1024).toFixed(1);
      const deltaKB = (delta.delta / 1024).toFixed(1);
      const symbol = delta.improved ? '✅' : '❌';
      const direction = delta.improved ? '↓' : '↑';

      report += `| ${bundleNames[bundle]} | ${currentKB}KB | ${previousKB}KB | ${symbol} ${deltaKB}KB (${direction}${Math.abs(delta.percentChange).toFixed(1)}%) |\n`;
    }
  });

  // Summary
  report += `\n## Summary\n\n`;

  const improvements = [];
  const regressions = [];

  metrics.forEach(metric => {
    const delta = calculateDelta(current.metrics, previous.metrics, metric);
    if (delta) {
      if (delta.improved) {
        improvements.push(metricNames[metric]);
      } else {
        regressions.push(metricNames[metric]);
      }
    }
  });

  if (improvements.length > 0) {
    report += `**Improvements:**\n`;
    improvements.forEach(imp => report += `- ✅ ${imp}\n`);
    report += '\n';
  }

  if (regressions.length > 0) {
    report += `**Regressions:**\n`;
    regressions.forEach(reg => report += `- ❌ ${reg}\n`);
    report += '\n';
  }

  if (improvements.length === 0 && regressions.length === 0) {
    report += `No significant changes detected.\n\n`;
  }

  return report;
}

// Main execution
async function main() {
  console.log('📊 Loading current results...');
  const currentResults = loadComparisonData();

  if (!currentResults) {
    process.exit(1);
  }

  console.log('📈 Loading previous results...');
  const previousResults = loadPreviousResults();

  if (!previousResults) {
    console.log('📝 No previous results found. This will be the baseline for future comparisons.');
    saveCurrentResults(currentResults);
    console.log('✅ Baseline established.');
    process.exit(0);
  }

  console.log('🔄 Generating comparison report...');
  const report = generateComparisonReport(currentResults, previousResults);

  const outputFile = path.join(process.cwd(), 'docs', 'PERFORMANCE-COMPARISON.md');
  fs.writeFileSync(outputFile, report);

  console.log(`✅ Comparison report generated: ${outputFile}`);

  // Save current results for next comparison
  saveCurrentResults(currentResults);
  console.log('💾 Results saved for future comparison.');
}

main().catch(console.error);