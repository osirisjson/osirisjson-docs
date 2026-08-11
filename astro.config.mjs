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
				Sidebar: './src/components/ui/sidebar/Sidebar.astro',
			},
			// This array only drives Starlight internals (Prev/Next
			// pagination, route
			// metadata) the rendered sidebar comes from ./src/components/ui/sidebar/Sidebar.astro.
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'Welcome', slug: 'introduction/welcome' },
						{ label: 'What is OSIRIS JSON', slug: 'introduction/what-is-osiris' },
						{ label: 'Use cases', slug: 'introduction/use-cases' },
					],
				},
				{
					label: 'OSIRIS JSON Consumers',
					items: [{ label: 'Get started', slug: 'osiris-consumers/getting-started' }],
				},
				{
					label: 'OSIRIS JSON Producers',
					items: [
						{ label: 'Get started', slug: 'osiris-producers/getting-started' },
						{ label: 'How to install', slug: 'osiris-producers/installation' },
						{ label: 'Security context', slug: 'osiris-producers/security' },
						{
							label: 'Networking',
							items: [
								{ label: 'Cisco', slug: 'osiris-producers/network/cisco' },
								{ label: 'HPE', slug: 'osiris-producers/network/hpe-aruba-networking-central' },
							],
						},
						{
							label: 'Hyperscalers',
							items: [
								{ label: 'Amazon AWS', slug: 'osiris-producers/hyperscalers/amazon-aws' },
								{ label: 'Microsoft Azure', slug: 'osiris-producers/hyperscalers/microsoft-azure' },
							],
						},
					],
				},
				{
					label: 'Validate',
					items: [
						{
							label: 'Validation tools',
							items: [
								{ label: 'Toolbox CLI', slug: 'validate/toolbox-cli' },
								{ label: 'Validation levels', slug: 'validate/validation-levels' },
							],
						},
						{
							label: 'Infrastructure examples',
							items: [
								{ label: 'IT infrastructure', slug: 'examples/it-infrastructure' },
								{ label: 'OT infrastructure', slug: 'examples/ot-infrastructure' },
							],
						},
					],
				},
				{
					label: 'Developers',
					items: [
						{
							label: 'Developer Guidelines',
							items: [
								{ label: 'Welcome', slug: 'developer-guidelines/welcome' },
								{ label: 'Architecture', slug: 'developer-guidelines/architecture' },
								{
									label: 'Producer SDK',
									items: [
										{
											label: 'Producer guidelines',
											slug: 'developer-guidelines/producers/producer-guidelines',
										},
										{ label: 'SDK Reference', slug: 'developer-guidelines/producers/producer-sdk' },
										{
											label: 'Writing a producer',
											slug: 'developer-guidelines/producers/writing-a-producer',
										},
									],
								},
							],
						},
					],
				},
				{
					label: 'Community',
					items: [
						{ label: 'Contributing', slug: 'community/contributing' },
						{ label: 'Support', slug: 'community/support' },
						{
							label: 'Style guidelines',
							items: [
								{ label: 'Introduction', slug: 'community/style-guidelines/introduction' },
								{ label: 'Components', slug: 'community/style-guidelines/components' },
							],
						},
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
