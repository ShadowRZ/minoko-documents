import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Minoko Documents',
    description: 'Documents of Minoko Novel',
    lastUpdated: true,
    themeConfig: {
        repo: 'ShadowRZ/minoko-documents',
        editLink: {
            pattern: 'https://github.com/ShadowRZ/minoko-documents/edit/master/docs/:path',
            text: '编辑页面……',
        },
        activeHeaderLinks: false,
        lastUpdatedText: '最后更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '介绍', link: '/introduction.html' },
            { text: '常见问题', link: '/faq.html' },
            { text: 'GitHub', link: 'https://github.com/ShadowRZ/minoko-documents' },
        ],
        sidebar: [
            {
                text: '内容列表',
                collapsible: true,
                items: [
                    { text: '介绍', link: '/introduction.html' },
                    { text: '常见问题', link: '/faq.html',},
                ],
            },
            {
                text: '出场角色',
                collapsible: true,
                items: [
                    { text: '角色列表', link: '/characters/' },
                ],
            },
        ],
        docFooter: {
            prev: '前一页面',
            next: '下一页面'
        }
    },
    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', href: '#da532c' }],
        ['meta', { name: 'theme-color', href: '#ffffff' }],
    ],
})
