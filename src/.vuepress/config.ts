import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
    bundler: viteBundler(),
    base: "/stormbpmn-enduser-docs/",
    lang: "ru-RU",

    title: "StormBPMN Docs",
    description: "Документация StormBPMN",
    head: [["link", { rel: "icon", href: "/stormbpmn-enduser-docs/favicon.svg", type: "image/svg+xml" }]],

    theme: hopeTheme({
        fullscreen: true,
        plugins: {
            searchPro: {
                indexContent: true,
            },
            copyCode: {},
            mdEnhance: {
                mark: true,
                align: true,
                attrs: false,
                tasklist: true,
                hint: true,
                component: true,
            },
        },
        repo: "KotskinKotskin/stormbpmn-enduser-docs",
        repoLabel: "GitHub",
        repoDisplay: true,
        docsRepo: "KotskinKotskin/stormbpmn-enduser-docs",
        docsDir: "src",
        docsBranch: "main",
        editLink: true,
        headerDepth: 2,
        footer: "",
        hotReload: true,
        iconAssets: "fontawesome",
        lastUpdated: true,
        sidebar: "structure",

        logo: "https://new.stormbpmn.com/favicon.svg",

        navbar: [
            {
                text: "Руководство",
                link: "/guide/",
            },
        ],
    }),
});
