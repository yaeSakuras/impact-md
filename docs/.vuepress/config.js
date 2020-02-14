const moment = require('moment');

module.exports = {
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
                }
            }
        ]
    ],
    title: 'Garfield的个人空间',
    description: 'Tech Otakus Save The World',
    base: '/impact-md/',
    markdown: {
        lineNumbers: true // 代码行数
    },
    themeConfig: {
        lastUpdated: '上次更新',
        sidebarDepth: 3,
        nav: [
            {
                text: 'javascript',
                link: '/javascript/'
            }, {
                text: 'css',
                link: '/css/'
            }, {
                text: 'react',
                link: '/react/'
            }, {
                text: 'tools',
                link: '/tools/'
            }, {
                text: '练习',
                link:'https://yaesakuras.github.io/react-ts/#/practice'
            }

        ],
        sidebar: {
            '/javascript/': [
                '/javascript/作用域是什么',
                '/javascript/Range对象',
                '/javascript/Selection对象',
            ]
        }
    },
};