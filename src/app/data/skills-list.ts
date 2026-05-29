import { Translation } from "./localization";

interface Skills {
	title: string;
	icon: string;
	subSkills?: Skills[];
}

export const SKILLS: Skills[] = [
	{
		title: "HTML",
		icon: "html",
    subSkills: [
      {
        title: "CSS",
        icon: "css"
      },
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
		title: "C#",
		icon: "csharp",
		subSkills: [
			{
				title: "Microsoft .NET",
				icon: "dotnet"
			}
		]
	},
  {
    title: "PHP",
    icon: "php",
    subSkills: [
      {
        title: "Symfony",
        icon: "symfony"
      },
      {
        title: "Wordpress",
        icon: "wordpress"
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

export const SOFTSKILLS: Translation[] = [
	{
		fr: "Analyser les besoins du client",
		en: "Analyse the client's needs"
	},
	{
		fr: "Planifier et mettre en oeuvre le développement",
		en: "Plan and implement development"
	},
	{
		fr: "Analyser et résoudre des problèmes techniques",
		en: "Analyse and solve technical problems"
	},
	{
		fr: "Méthode agile",
		en: "Agile software development"
	}
]
