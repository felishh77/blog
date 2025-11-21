import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Felix's Blog",
	prologue: "The time is gone, the song is over\nThought I'd something more to say.",
	author: {
		name: "Felix",
		email: "l.shuheng@outlook.com",
		link: "https://feli77.com"
	},
	description: "A personal space to share knowledge and thoughts.",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["en", "zh-cn", "ja"],
		defaultLocale: "zh-cn"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
