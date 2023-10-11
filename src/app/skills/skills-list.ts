interface Skills {
	title: string;
	icon: string;
	subSkills?: Skills[];
}

export const SKILLS: Skills[] = [
	{
		title: "HTML 5",
		icon: "html",
	},
	{
		title: "CSS 3",
		icon: "css",
		subSkills: [
			{
				title: "SASS",
				icon: "sass"
			}
		]
	},
	{
		title: "JavaScript",
		icon: "js",
		subSkills: [
			{
				title: "Angular",
				icon: "angular"
			},
			{
				title: "React",
				icon: "react"
			}
		]
	},
	{
		title: "PHP",
		icon: "php",
		subSkills: [
			{
				title: "WordPress",
				icon: "wordpress"
			},
			{
				title: "PrestaShop",
				icon: "prestashop"
			}
		]
	},
	{
		title: "Photoshop",
		icon: "photoshop",
	},
	{
		title: "Illustrator",
		icon: "illustrator",
	},
	{
		title: "InDesign",
		icon: "indesign",
	}
]