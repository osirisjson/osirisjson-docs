export interface SidebarLink {
	type: "link";
	label: string;
	href: string;
	badge?: { text: string; variant: "note" | "danger" | "success" | "caution" | "tip" | "default" };
}

export interface SidebarGroup {
	type: "group";
	label: string;
	icon?: string;
	collapsed?: boolean;
	nodes: SidebarNode[];
}

export type SidebarNode = SidebarLink | SidebarGroup;

export interface SidebarSection {
	heading: string;
	nodes: SidebarNode[];
}

const link = (label: string, href: string, badge?: SidebarLink['badge']): SidebarLink => ({
	type: "link",
	label,
	href,
	...(badge && { badge }),
});

export const osirisSidebarSections: SidebarSection[] = [
	{
		heading: "Overview",
		nodes: [
			link("Welcome", "/introduction/welcome/"),
            link("What is OSIRIS JSON", "/introduction/what-is-osiris/"),
            link("Use cases", "/introduction/use-cases/"),
		],
	},
	{
		heading: "The OSIRIS JSON Consumers",
		nodes: [
			link("Get started", "/osiris-consumers/getting-started/"),
		],
	},
    {
		heading: "The OSIRIS JSON Producers",
		nodes: [
			link("Get started", "/osiris-producers/getting-started/"),
			link("How to install", "/osiris-producers/installation/"),
			link("Security context", "/osiris-producers/security/"),
			{
				type: "group",
				label: "Networking",
				collapsed: true,
				nodes: [
					link("Cisco", "/osiris-producers/network/cisco/"),
					link("HPE", "/osiris-producers/network/hpe-aruba-networking-central/"),
				],
			},
			{
				type: "group",
				label: "Hyperscalers",
				icon: "cloud",
				collapsed: true,
				nodes: [
					link("Amazon AWS", "/osiris-producers/hyperscalers/amazon-aws/"),
					link("Microsoft Azure", "/osiris-producers/hyperscalers/microsoft-azure/"),
				],
			},
		],
	},
	{
		heading: "Validate",
		nodes: [
			{
				type: "group",
				label: "Validation tools",
				collapsed: true,
				nodes: [
					link("Toolbox CLI", "/validate/toolbox-cli/"),
					link("Validation levels", "/validate/validation-levels/"),
				],
			},
			{
				type: "group",
				label: "Infrastructure examples",
				collapsed: true,
				nodes: [
					link("IT infrastructure", "/examples/it-infrastructure/"),
					link("OT infrastructure", "/examples/ot-infrastructure/"),
				],
			},
		],
	},
    {
		heading: "Developers",
		nodes: [
			{
				type: "group",
				label: "Developer Guidelines",
				collapsed: true, 
				nodes: [
					link("Welcome", "/developer-guidelines/welcome/"),
					link("Architecture", "/developer-guidelines/architecture/"),
					{
						type: "group",
						label: "Producer SDK",
						collapsed: true,
						nodes: [
							link("Producer guidelines", "/developer-guidelines/producers/producer-guidelines/"),
							link("SDK Reference", "/developer-guidelines/producers/producer-sdk/"),
							link("Writing a producer", "/developer-guidelines/producers/writing-a-producer/"),
						],
					},
				],
			}
		],
	},
	{
		heading: "Community",
		nodes: [
			{
				type: "group",
				label: "Community",
				collapsed: true,
				nodes: [
					link("Contributing", "/community/contributing/"),
					link("Support", "/community/support/"),
					{
						type: "group",
						label: "Style guidelines",
						collapsed: true,
						nodes: [
							link("Introduction", "/community/style-guidelines/introduction/"),
							link("Components", "/community/style-guidelines/components/"),
						],
					},
				],
			},
		],
	},
];