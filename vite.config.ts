import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from 'vite-plugin-laravel'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            postcss: [
                tailwindcss(),
                autoprefixer(),
            ],
        })
    ],
    server: {
        host: '0.0.0.0'
    },
});
