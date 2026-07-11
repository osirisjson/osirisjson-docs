// @ts-check
/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	useTabs: true,
	singleQuote: true,
	printWidth: 100,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
