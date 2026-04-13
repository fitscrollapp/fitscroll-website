export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'FitScroll — Move to Unlock | Turn Doomscrolling into Push-ups',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'FitScroll locks distracting apps until you do real push-ups or squats. On-device pose detection counts every rep. Every rep earns minutes back. Free 7-day trial on iOS.',
        },
        { name: 'theme-color', content: '#EF4723' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { name: 'author', content: 'FitScroll' },
        { name: 'keywords', content: 'screen time, doomscrolling, distraction blocker, push-up tracker, squat counter, focus app, digital wellbeing, pose detection, app blocker, iOS productivity' },
        // Open Graph
        { property: 'og:title', content: 'FitScroll — Move to Unlock' },
        { property: 'og:description', content: 'Lock distracting apps. Earn them back with real push-ups and squats. On-device, private.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fitscroll.app' },
        { property: 'og:site_name', content: 'FitScroll' },
        { property: 'og:image', content: 'https://fitscroll.app/og-image.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:image:alt', content: 'FitScroll app icon' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'FitScroll — Move to Unlock' },
        { name: 'twitter:description', content: 'Lock distracting apps. Earn them back with real push-ups and squats.' },
        { name: 'twitter:image', content: 'https://fitscroll.app/og-image.png' },
        // Apple
        { name: 'apple-mobile-web-app-title', content: 'FitScroll' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/logo-180.png' },
        { rel: 'canonical', href: 'https://fitscroll.app' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'FitScroll',
            operatingSystem: 'iOS',
            applicationCategory: 'HealthApplication',
            description: 'Lock distracting apps and earn screen time with real push-ups and squats. On-device pose detection. iOS app.',
            url: 'https://fitscroll.app',
            image: 'https://fitscroll.app/og-image.png',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              description: '7-day free trial, then subscription',
            },
            creator: {
              '@type': 'Organization',
              name: 'FitScroll',
              url: 'https://fitscroll.app',
            },
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'FitScroll',
            url: 'https://fitscroll.app',
          }),
        },
      ],
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
})
