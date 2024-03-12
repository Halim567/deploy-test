import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            transformer: 'lightningcss'
        },
        build: {
            cssMinify: 'lightningcss'
        }
    },

    compressHTML: true,
    output: 'server',
    adapter: cloudflare()
});