import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/w3schools.css',
                'resources/css/googleapis.css',
                'resources/css/cloudflare.css',
            ],
            refresh: true,
        }),
    ],
});
