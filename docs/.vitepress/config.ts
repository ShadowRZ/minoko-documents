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
                    text: '主线角色',
                    collapsed: false,
                    items: [
                        {
                            text: '现实角色',
                            collapsed: false,
                            items: [
                                { text: '祢洛子', },
                                { text: 'Alynx Zhou', },
                                { text: '叶琴玉', },
                                { text: '莫洛洛', },
                                { text: '喵咪卡', },
                                { text: '叶奈红波', },
                            ],
                        },
                        {
                            text: '作品角色',
                            collapsed: false,
                            items: [
                                { text: '结城理', },
                                { text: '佐仓双叶', },
                                { text: '白钟直斗', },
                                { text: '山岸风花', },
                                { text: '坂本龙司', },
                                { text: '奥村春', },
                            ],
                        },
                    ],
                },
                {
                    text: '附篇角色',
                    collapsed: false,
                    items: [
                        { text: '新井素羽', link: '/characters/extra/suwa-arai.html' },
                        { text: '路菲尔', link: '/characters/extra/luffy.html' },
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
        ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
        ['meta', { name: 'theme-color', content: '#9d174d' }],
    ],

    markdown: {
        config: (md) => {
            md.use(require('markdown-it-footnote'))
        },
    },
    transformHead: ({ assets }) => {
        // adjust the regex accordingly to match your font
        const files = assets.filter(file => file.match(/jost-latin-[0-9]00.*\.woff2$/))
        return files.map((file) => [
            'link',
            {
                rel: 'preload',
                href: file,
                as: 'font',
                type: 'font/woff2',
                crossorigin: ''
            }
        ])
    },
})
