import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),

    VitePWA({ //generate the service workers  and manifest at build time.
      registerType: 'autoUpdate',     // Auto update when new version available
      devOptions: {
        enabled: true,  // Enable PWA in development mode                        
      },

      // Manifest Configuration
      manifest: {
        name: 'Movie Blog PWA',
        short_name: 'MovieBlog',
        description: 'A React PWA to browse movies',
        theme_color: '#1f2937',       // Dark gray (matches your bg-gray-700)
        background_color: '#111827',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/img-234.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img-343.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },

      // Offline Support (App Shell Caching)
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}'], // Cache these files
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.themoviedb\.org\/.*/i,
            handler: 'NetworkFirst',        // Try network first, fallback to cache
            options: {
              cacheName: 'tmdb-api-cache-v2',
              networkTimeoutSeconds:5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5   // 24 hours
              },cacheableResponse: { statuses: [0, 200] }  
            }
          },
          {
            urlPattern: /^https:\/\/image\.tmdb\.org\/.*/i,
            handler: 'CacheFirst',          // Cache images aggressively
            options: {
              cacheName: 'tmdb-images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30  // 30 days
              }
            }
          }
        ]
      }
    })
  ],
})
