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
                target: 'http://k8s-portal-admin-058f374ba2-825941414.eu-central-1.elb.amazonaws.com/gw',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
