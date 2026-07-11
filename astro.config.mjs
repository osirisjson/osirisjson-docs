// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://docs.osirisjson.org',
	integrations: [
		mermaid({
			theme: 'default',
			autoTheme: false,
		}),
		starlight({
			title: 'OSIRIS JSON Docs',
			logo: {
				src: './src/assets/logo/osiris-logo-color-positive.svg',
				alt: 'OSIRIS JSON',
				replacesTitle: true,
			},
			customCss: ['./src/styles/osiris-theme.css'],
			editLink: {
				baseUrl: 'https://github.com/osirisjson/osirisjson-docs/edit/dev/',
			},
			expressiveCode: {
				styleOverrides: {
					borderRadius: '0.5rem',
					borderColor: 'var(--osiris-table-border)',
					codeBackground: 'var(--osiris-code-bg)',
				},
			},
			components: {
				Header: './src/components/Header.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				MobileMenuFooter: './src/components/MobileMenuFooter.astro',
				MobileMenuToggle: './src/components/MobileMenuToggle.astro',
				EditLink: './src/components/EditLink.astro',
				Footer: './src/components/Footer.astro',
				PageTitle: './src/components/PageTitle.astro',
				Head: './src/components/Head.astro',
				TableOfContents: './src/components/TableOfContents.astro',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Welcome', slug: 'introduction/welcome' },
						
						{ label: 'Real-world use cases', slug: 'introduction/use-cases' },
						{ label: 'What is OSIRIS JSON', slug: 'introduction/what-is-osiris' },
					],
				},
				{
					label: 'OSIRIS JSON Consumers',
					items: [{ label: 'Getting started', slug: 'osiris-consumers/getting-started' }],
				},
				{
					label: 'OSIRIS JSON Producers',
					items: [
						{ label: 'Getting started', slug: 'osiris-producers/getting-started' },
						{ label: 'How to install', slug: 'osiris-producers/installation' },
						{ label: 'Security', slug: 'osiris-producers/security' },
						{
							label: 'Network',
							items: [{ label: 'Cisco', slug: 'osiris-producers/network/cisco' }],
						},
						{
							label: 'Hyperscalers',
							items: [
								{ label: 'Microsoft Azure', slug: 'osiris-producers/hyperscalers/microsoft-azure' },
								{ label: 'Amazon AWS', slug: 'osiris-producers/hyperscalers/amazon-aws' },
							],
						},
					],
				},

				{
					label: 'Examples',
					items: [
						{ label: 'IT infrastructure examples', slug: 'examples/it-infrastructure' },
						{ label: 'OT infrastructure examples', slug: 'examples/ot-infrastructure' },
					],
				},
				{
					label: 'Validate',
					items: [
						{ label: 'Toolbox CLI', slug: 'validate/toolbox-cli' },
						{ label: 'Validation levels', slug: 'validate/validation-levels' },
					],
				},
				{
					label: 'Developer guidelines',
					items: [
						{ label: 'Welcome', slug: 'developer-guidelines/welcome' },
						{ label: 'Architecture guidelines', slug: 'developer-guidelines/architecture' },
						{
							label: 'Producers',
							items: [
								{
									label: 'Producer guidelines',
									slug: 'developer-guidelines/producers/producer-guidelines',
								},
								{ label: 'Producer SDK', slug: 'developer-guidelines/producers/producer-sdk' },
								{
									label: 'Writing a producer',
									slug: 'developer-guidelines/producers/writing-a-producer',
								},
							],
						},
					],
				},
				{
					label: 'Community',
					items: [
						{
							label: 'Style guidelines',
							items: [
								{
									label: 'Introduction',
									slug: 'community/style-guidelines/introduction',
								},
								{
									label: 'Components',
									slug: 'community/style-guidelines/components',
								},
							],
						},
						{ label: 'Contributing', slug: 'community/contributing' },
						{ label: 'Support', slug: 'community/support' },
					],
				},
			],
		}),
		sitemap(),
	],
	vite: {
		build: {
			cssMinify: 'esbuild',
		},
	},
});
