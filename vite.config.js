import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    base: '/',
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Sistema de Stock y Ventas',
                short_name: 'StockApp',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#1d4ed8',
                icons: [
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
})