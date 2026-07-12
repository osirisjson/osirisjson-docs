export interface NavItem {
	label: string;
	href: string;
	target?: '_blank';
}

export interface NavGroup {
	title?: string;
	items: NavItem[];
}

export interface NavDropdownEntry {
	type: 'dropdown';
	label: string;
	align?: 'start' | 'end';
	groups: NavGroup[];
}

export interface NavLinkEntry {
	type: 'link';
	label: string;
	href: string;
}

export type NavEntry = NavDropdownEntry | NavLinkEntry;
const ORG_SITE = 'https://osirisjson.org';

export const navEntries: NavEntry[] = [
	{
		type: 'dropdown',
		label: 'Commitments',
		groups: [
			{
				items: [
					{
						label: 'The manifesto',
						href: `${ORG_SITE}/en/commitments/manifesto`,
						target: '_blank',
					},
					{ label: 'Security', href: `${ORG_SITE}/en/commitments/security`, target: '_blank' },
					{ label: 'Roadmap', href: `${ORG_SITE}/en/commitments/roadmap`, target: '_blank' },
					{
						label: 'Maintainers',
						href: `${ORG_SITE}/en/commitments/maintainers`,
						target: '_blank',
					},
					{
						label: 'Code of conduct',
						href: `${ORG_SITE}/en/commitments/codeofconduct`,
						target: '_blank',
					},
					{ label: 'Governance', href: `${ORG_SITE}/en/commitments/governance`, target: '_blank' },
				],
			},
		],
	},
	{
		type: 'dropdown',
		label: 'Resources',
		align: 'end',
		groups: [
			{
				title: 'The Specification',
				items: [
					{
						label: 'Specification Reference',
						href: `${ORG_SITE}/en/specification`,
						target: '_blank',
					},
					{
						label: 'Core Schema',
						href: `${ORG_SITE}/schema/v1.0/osiris.schema.json`,
						target: '_blank',
					},
					{
						label: 'Media kit',
						href: `${ORG_SITE}/en/media-kit`,
						target: '_blank',
					},
					{
						label: 'Presentation slide deck',
						href: `${ORG_SITE}/assets/media-kit/osiris-json-value-deck.pptx`,
						target: '_blank',
					},
				],
			},
		],
	},
	{
		type: 'link',
		label: 'Learn',
		href: '/',
	},
	{
		type: 'link',
		label: 'Newsroom',
		href: `${ORG_SITE}/en/news`,
	},
];
