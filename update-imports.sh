#!/bin/bash

# Script to update component imports after refactoring

echo "Updating component imports..."

# Layout components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/header|@/components/layout/header|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/footer|@/components/layout/footer|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/layout-primitives|@/components/layout/layout-primitives|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/page-transition|@/components/layout/page-transition|g' {} \;

# Animation components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/animated-section|@/components/animations/animated-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/animated-page-section|@/components/animations/animated-page-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/animated-stats|@/components/animations/animated-stats|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/development-timeline|@/components/animations/development-timeline|g' {} \;

# Media components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/unified-image|@/components/media/unified-image|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/youtube-embed|@/components/media/youtube-embed|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/google-map|@/components/media/google-map|g' {} \;

# Form components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/contact-form|@/components/forms/contact-form|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/appointment-form|@/components/forms/appointment-form|g' {} \;

# Section components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/about-section|@/components/sections/about-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/blog-section|@/components/sections/blog-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/faq-section|@/components/sections/faq-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/pricing-section|@/components/sections/pricing-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/testimonials-section|@/components/sections/testimonials-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/service-articles-section|@/components/sections/service-articles-section|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/simple-contact-section|@/components/sections/simple-contact-section|g' {} \;

# Navigation components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/enhanced-breadcrumb|@/components/navigation/enhanced-breadcrumb|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/interactive-services-map|@/components/navigation/interactive-services-map|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/directions-info|@/components/navigation/directions-info|g' {} \;

# Analytics components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/google-analytics|@/components/analytics/google-analytics|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/google-tag-manager|@/components/analytics/google-tag-manager|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/analytics-test|@/components/analytics/analytics-test|g' {} \;

# Feedback components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/testimonials|@/components/feedback/testimonials|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/recommended-services|@/components/feedback/recommended-services|g' {} \;

# Blog components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/blog-card|@/components/blog/blog-card|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/blog-post-modal|@/components/blog/blog-post-modal|g' {} \;

# Error components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/error-boundary|@/components/error/error-boundary|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/enhanced-error-boundary|@/components/error/enhanced-error-boundary|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/error-fallbacks|@/components/error/error-fallbacks|g' {} \;

# Loading components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/loading-spinner|@/components/loading/loading-spinner|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/loading-states|@/components/loading/loading-states|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/lazy-components|@/components/loading/lazy-components|g' {} \;

# Preferences components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/theme-provider|@/components/preferences/theme-provider|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/theme-toggle|@/components/preferences/theme-toggle|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/cookie-banner|@/components/preferences/cookie-banner|g' {} \;

# Common components
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/structured-data|@/components/common/structured-data|g' {} \;
find app/ -name "*.tsx" -type f -exec sed -i 's|@/components/social-icons|@/components/common/social-icons|g' {} \;

echo "Import updates completed!"
