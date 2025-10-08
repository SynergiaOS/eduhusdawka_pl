# Performance Measurement Guide

Comprehensive guide for measuring, analyzing, and optimizing the performance of the EduHustawka website.

## Quick Start

### First-time Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Run full performance analysis**
   ```bash
   npm run perf:full
   ```

### Daily Workflow

```bash
# After making performance-related changes:
npm run build
npm run perf:collect
npm run perf:report
```

## Core Web Vitals Explained

### First Contentful Paint (FCP)
- **What it measures**: Time from navigation to when any content is rendered
- **Target**: ≤800ms
- **Why it matters**: Users perceive sites that render content quickly as more responsive
- **Optimization tips**:
  - Minimize render-blocking resources
  - Optimize server response time
  - Use efficient CSS delivery

### Largest Contentful Paint (LCP)
- **What it measures**: Time from navigation to when the largest content element is visible
- **Target**: ≤1300ms
- **Why it matters**: Indicates when the main content of the page has loaded
- **Optimization tips**:
  - Optimize images (WebP format, proper sizing)
  - Preload important resources
  - Use modern image formats

### Cumulative Layout Shift (CLS)
- **What it measures**: Visual stability of the page during load
- **Target**: ≤0.05
- **Why it matters**: Prevents content from jumping around as the page loads
- **Optimization tips**:
  - Include size attributes on images and videos
  - Reserve space for ads and embeds
  - Avoid inserting content above existing content

### Total Blocking Time (TBT)
- **What it measures**: Total time between FCP and Time to Interactive where the main thread is blocked
- **Target**: ≤300ms
- **Why it matters**: Affects how quickly users can interact with the page
- **Optimization tips**:
  - Reduce JavaScript execution time
  - Code splitting and lazy loading
  - Optimize third-party scripts

### Speed Index
- **What it measures**: How quickly content is visually displayed during page load
- **Target**: ≤3000ms
- **Why it matters**: Overall perception of load speed
- **Optimization tips**:
  - Optimize critical rendering path
  - Prioritize above-the-fold content
  - Use progressive rendering

## Bundle Size Optimization

### Current Targets

| Component | Target | Priority |
|-----------|--------|----------|
| Shared JavaScript | 99.7KB | High |
| Homepage Total | 168KB | Medium |
| Middleware | 33KB | Low |

### Analysis Tools

1. **Bundle Analyzer**
   ```bash
   npm run build:analyze
   ```
   Opens interactive visualization of bundle composition.

2. **Bundle Verification**
   ```bash
   npm run perf:verify
   ```
   Automated verification against size targets.

### Optimization Strategies

1. **Code Splitting**
   - Dynamic imports for route-based splitting
   - Lazy load components not needed immediately
   - Use `React.lazy()` for heavy components

2. **Tree Shaking**
   - Ensure ES modules are used
   - Remove unused dependencies
   - Configure bundler properly

3. **Asset Optimization**
   - Compress images (WebP, AVIF)
   - Minimize CSS and JavaScript
   - Use font-display: swap

## Running Performance Tests

### Individual Commands

```bash
# Build application
npm run build

# Collect Lighthouse data
npm run perf:collect

# Generate performance report
npm run perf:report

# Verify bundle sizes
npm run perf:verify

# Compare with previous results
npm run perf:compare

# Run complete analysis
npm run perf:full
```

### Understanding the Output

1. **Lighthouse Results**
   - HTML reports: `.lighthouseci/phase-7-results/`
   - JSON data: `.lighthouseci/*.json`
   - Scores 0-100 for each category

2. **Bundle Analysis**
   - Size breakdown by component
   - Comparison against targets
   - Trends over time

3. **Performance Report**
   - Executive summary
   - Detailed metrics
   - Actionable recommendations

## Continuous Integration

### Pre-commit Checks

Consider adding these to your pre-commit hooks:

```bash
# Quick bundle size check
npm run perf:verify

# Lighthouse smoke test (single URL)
lhci collect --url=http://localhost:3000 --numberOfRuns=1
```

### CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Performance Tests
on: [push, pull_request]

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm install
      - run: npm run build

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.15.x
          lhci autorun

      - name: Verify bundle sizes
        run: npm run perf:verify
```

## Troubleshooting

### Common Issues

1. **Lighthouse Fails to Connect**
   ```bash
   # Ensure server is running on correct port
   npm start

   # Check port configuration
   cat lighthouserc.json | grep "url"
   ```

2. **Bundle Size Verification Fails**
   ```bash
   # Analyze what's increasing bundle size
   npm run build:analyze

   # Check for large dependencies
   npm ls --depth=0 | grep -E "\d+\.\d+\.\d+"
   ```

3. **Performance Regression**
   ```bash
   # Compare with previous results
   npm run perf:compare

   # Check recent changes
   git log --oneline -10
   ```

### Debug Mode

Enable verbose logging:

```bash
DEBUG=lighthouse:* npm run perf:collect
```

### Manual Lighthouse Testing

For quick tests without the full suite:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run single test
lighthouse http://localhost:3000 --output html --output-path ./report.html
```

## Performance Budgets

### Setting Budgets

Update `lighthouserc.json` to include budgets:

```json
{
  "ci": {
    "collect": {
      "settings": {
        "budgets": [
          {
            "path": "/*.js",
            "resourceSizes": [
              {
                "resourceType": "script",
                "budget": 100
              }
            ]
          }
        ]
      }
    }
  }
}
```

### Monitoring Trends

Track performance over time:

```bash
# Create baseline
npm run perf:report

# After changes:
npm run perf:compare
```

## Best Practices

### Development

1. **Performance-first mindset**
   - Consider performance impact when adding features
   - Test performance regularly, not just at the end
   - Set up performance budgets early

2. **Code organization**
   - Keep shared code minimal
   - Use dynamic imports for large libraries
   - Optimize images and assets before adding

3. **Testing strategy**
   - Test on realistic devices and network conditions
   - Include performance in your test suite
   - Monitor real-world performance

### Production

1. **Monitoring**
   - Set up Real User Monitoring (RUM)
   - Track Core Web Vitals in production
   - Set up alerts for performance regressions

2. **Optimization**
   - Regular bundle analysis
   - Image optimization
   - Caching strategy review

## Resources

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing tool
- [WebPageTest](https://www.webpagetest.org/) - Detailed performance analysis
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle size visualization

### Documentation
- [Core Web Vitals](https://web.dev/vitals/) - Google's performance metrics
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Automated performance testing
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance) - Next.js specific optimizations

### Communities
- [web.dev](https://web.dev/) - Modern web development best practices
- [Performance Calendar](https://perf.tips/) - Performance optimization tips
- [Smashing Magazine](https://www.smashingmagazine.com/category/performance/) - Performance articles

---

## Getting Help

If you encounter issues with performance measurement:

1. Check the [troubleshooting section](#troubleshooting) above
2. Review [Lighthouse CI documentation](https://github.com/GoogleChrome/lighthouse-ci)
3. Check [Next.js performance docs](https://nextjs.org/docs/advanced-features/measuring-performance)
4. Review the generated reports for specific recommendations

For questions about this guide or the performance setup, please refer to the project documentation or contact the development team.