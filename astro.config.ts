// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import UnoCSS from "unocss/astro";
import swup from "@swup/astro";
import icon from "astro-icon";

import GFM from "remark-gfm";
import ins from "remark-ins";
import mark from "remark-flexible-markers";
import CJK from "remark-cjk-friendly";
import CJKStrikethrough from "remark-cjk-friendly-gfm-strikethrough";
import math from "remark-math";
import gemoji from "remark-gemoji";
import footnote from "remark-footnotes-extra";
import { remarkExtendedTable as table, extendedTableHandlers as tableHandler } from "remark-extended-table";
import directive from "remark-directive";
import ruby from "remark-ruby-directive";
import alerts from "remark-github-blockquote-alert";
import { rehypeHeadingIds as ids } from "@astrojs/markdown-remark";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";

import anchor from "rehype-autolink-headings";
import links from "rehype-external-links";
import katex from "rehype-katex";
import sectionize from "@hbsnow/rehype-sectionize";
import rehypeComponents from "rehype-components";
import rehypeSlug from "rehype-slug";

import spoiler from "./src/utils/remark/spoiler";
import abbr from "./src/utils/remark/abbr";
import wrapper from "./src/utils/remark/table-wrapper";
import copy from "./src/utils/code-copy";
import reading from "./src/utils/remark/reading";
import figure from "./src/utils/remark/figure";
import GithubCardComponent from "./src/utils/rehype/github-card.mjs";
import parseDirectiveNode from "./src/utils/remark/directive.mjs";

import siteConfig from "./site.config";
import remarkComponentEmbed from "./src/utils/remark/embed.mjs";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		platformProxy: {
			enabled: true
		},
		imageService: "compile"
	}),
	site: "https://feli77.com",
	trailingSlash: "never",
	i18n: {
		...siteConfig.i18n,
		routing: {
			redirectToDefaultLocale: false,
			prefixDefaultLocale: false
		}
	},
	image: {
		service: passthroughImageService()
	},
	markdown: {
		remarkPlugins: [
			[GFM, { singleTilde: false }],
			ins,
			mark,
			spoiler,
			CJK,
			[CJKStrikethrough, { singleTilde: false }],
			math,
			gemoji,
			footnote,
			abbr,
			[table, { colspanWithEmpty: true }],
			wrapper,
			directive,
			ruby,
			[alerts, { legacyTitle: true }],
			reading,
			remarkGithubAdmonitionsToDirectives,
			remarkComponentEmbed,
			parseDirectiveNode
		],
		remarkRehype: {
			footnoteLabel: null,
			footnoteLabelTagName: "p",
			footnoteLabelProperties: {
				className: ["hidden"]
			},
			handlers: {
				...tableHandler
			}
		},
		rehypePlugins: [
			ids,
			[anchor, { behavior: "wrap" }],
			[links, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] }],
			katex,
			figure,
			sectionize,
			[rehypeComponents, { components: { github: GithubCardComponent } }],
			rehypeSlug
		],
		smartypants: false,
		shikiConfig: {
			themes: {
				light: "catppuccin-latte",
				dark: "catppuccin-mocha"
			},
			transformers: [
				copy({
					duration: 1500
				})
			]
		}
	},
	vite: {
		// Workaround for https://github.com/withastro/astro/issues/14692
		optimizeDeps: {
			include: ["picocolors"]
		},
		// @ts-expect-error
		plugins: [yaml()]
	},
	integrations: [
		svelte(),
		mdx(),
		sitemap(),
		swup({
			globalInstance: true,
			preload: false,
			smoothScrolling: false,
			progress: true
		}),
		UnoCSS({
			injectReset: "@unocss/reset/normalize.css"
		}),
		icon()
	]
});
