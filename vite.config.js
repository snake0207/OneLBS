import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '#', replacement: '/src' }],
    },
    server: {
        port: 2999,
        proxy: {
            '/api': {
                target: 'https://stg-gpss-eu.auto-hmg.io',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
