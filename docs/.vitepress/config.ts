import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'Minoko Documents',
    description: 'Documents of Minoko Novel',
    lastUpdated: true,
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/ShadowRZ/minoko-documents/edit/master/docs/:path',
            text: '编辑页面……',
        },
        nav: [
            { text: '主页', link: '/' },
            { text: '介绍', link: '/introduction.html' },
            { text: '出场角色', link: '/characters/' },
            { text: '常见问题', link: '/faq.html' },
        ],
        sidebar: {
            '/': [
                {
                    text: '内容列表',
                    collapsed: false,
                    items: [
                        { text: '介绍', link: '/introduction.html' },
                        { text: '常见问题', link: '/faq.html',},
                        { text: '勘误表', link: '/errata.html',},
                    ],
                },
                {
                    text: 'Minoko Documents',
                    collapsed: false,
                    items: [
                        { text: '编写约定', link: '/conventions.html' },
                    ],
                },
            ],
            '/characters/': [
                {
                    text: '出场角色',
                    items: [
                        { text: '索引及概述', link: '/characters/' },
                    ],
                }
            ]
        },
        lastUpdatedText: '最后更新',
        outlineTitle: '本页内容',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '暗色开关',
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        returnToTopLabel: '返回顶部',
        outline: 'deep',
        aside: false,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ShadowRZ/minoko-documents', },
        ],
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

    markdown: {
        config: (md) => {
            md.use(require('markdown-it-footnote'))
        },
    },
})
