import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Minoko Documents',
    description: 'Documents of Minoko Novel',
    themeConfig: {
        repo: 'ShadowRZ/minoko-documents',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '编辑页面……',
        activeHeaderLinks: false,
    },
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['meta', { name: 'msapplication-TileColor', href: '#9f00a7' }],
        ['meta', { name: 'theme-color', href: '#ffffff' }],
    ],
})
