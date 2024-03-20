import { Translation } from "../../localization";

export enum ParType {
	Entr,
	Forma,
	Gradu
}

interface Parcours {
	type: ParType;
	entreprise: string;
	place?: string;
	list?: string[];
	time: string;
	title: Translation;
	desc: Translation;
}

export const PARCOURS: Parcours[] = [
  {
    type: ParType.Gradu,
    entreprise: "Citizens Of Wallonia",
    time: "Mars 2024",
    place: "Charleroi",
    list: ["Angular", "ASP.NET"],
    title: {
      fr: "Hackathon",
      en: "Hackathon"
    },
    desc: {
      fr: `
        Réalisation d'une application prototype durant un week-end appelé **P**imp **M**y **R**ide.

        Nous avons pris part au challenge proposé par Infrabel en réalisant un conept d'extention d'applications afin mettre en avant les infrastructures pour personnes à mobilité réduite dans les gares en se basant des Open Data fournis par la Wallonie.

        Notre équipe à remporté le prix des Territoires Intelligents.

        ![Citizens Of Wallonia: prix des Territoires Intelligent](assets/img/hackathon-price.png)
      `,
      en: `
        Creation of a prototype application over a week-end called **P**imp **M**y **R**ide.

        We took part in the challenge proposed by Infrabel by creating an application extension concept to highlight infrastructure for people with reduced mobility in stations based on Open Data provided by the Wallonia.

        Our team has earned the *Smart Territory* price.

        ![Citizens Of Wallonia: Smart Territory price](assets/img/hackathon-price.png)
      `
    }
  },
	{
		type: ParType.Forma,
		entreprise: "Technofutur TIC",
		time: "2023-2024",
		place: "Gosselies",
		title: {
			fr: "Formation développeur .NET",
			en: ".NET developer course"
		},
		desc: {
			fr:`
				Cette formation m'a introduit au langage C# et une partie des frameworks de *.NET*.

				Cela m'a appris à convevoir un schéma relationnel d'une base de donnée (*entité-association*) que j'ai pu mettre en application via SQL Server et Entity Framework.

				J'y ai également appris le concept de la *Programmation Orienté Objet*, le principe de *Design Patterns*, comment mettre en place un serveur API avec ASP.NET et utiliser celui-ci côté client avec ASP MVC/Blazor.

				* C#
					* Programmation Orienté Objet
				* .Net
					* Entity Framework
					* ASP.NET
					* ASP MVC
					* Blazor
				* Base de donnée
					* Conception schéma relationnel
					* SQL Server
				* Angular
			`,
			en:`
				This course introduced me to C# language and a bunch of .NET frameworks.

				This taught me how to design a relational schema of a database (*entity-association*) that I was able to implement via SQL Server and Entity Framework.

				I also learned the concept of *Object Oriented Programming*, the principle of *Design Patterns*, how to set up an API server with ASP.NET and use it on the client side with ASP MVC/Blazor.

				* C#
					* Object Oriented Programming
				* .Net
					* Entity Framework
					* ASP.NET
					* ASP MVC
					* Blazor
				* Database
					* Conception schéma relationnel
					* SQL Server
				* Angular
			`
		}
	},
	{
		type: ParType.Entr,
		entreprise: "Why Agency",
		time: "2020-2022",
		list: ["HTML & CSS", "Javascript, PHP", "Wordpress, Grav"],
		title: {
			fr: "Développeur web",
			en: "Web developer"
		},
		desc: {
			fr: "Freelance",
			en: "Freelance"
		}
	},
	{
		type: ParType.Entr,
		entreprise: "Adevo Solution",
		time: "2019-2020",
		place: "Gilly",
		list: ["HTML & CSS", "JavaScript, PHP", "WordPress, PrestaShop", "Photoshop, Illustrator"],
		title: {
			fr: "Stage développeur web",
			en: "Web development internship"
		},
		desc: {
			fr: `
				Stage de fin de formation de BeCode dans une agence créative et de marketing.

				J'ai participé au développement de plusieurs projets aussi bien sur WordpPress que sur PrestaShop. Mes compétences de graphiste m'ont permis d'affimer une polyvalence sur ces projets en participant à l'élaboration de pictogrammes/logos.
			`,
			en: `
				I've taken part in the development of several projects on both WordpPress and PrestaShop. My skills as a graphic designer allowed me to demonstrate my versatility on these projects by participating in the creation of pictograms/logos.
			`
		}
	},
	{
		type: ParType.Forma,
		entreprise:"BeCode",
		place:"Charleroi",
		time:"2019",
		list:["Git", "HTML & CSS (SASS)", "JavaScript, NodeJS, React", "PHP", "Wordpress", "MySQL"],
		title: {
			fr: "Formation développeur web",
			en: "Web dev training course"
		},
		desc: {
			fr: `
				Formation dans le développement web Full Stack.

				Cette formation est ma première expérience dans le monde du développement, elle m'a permis de découvrir plusieurs langages de programmation et leurs frameworks.

				Durant cette formation, j'ai pu participer à la réalisation de projets en groupe, me permettant de découvrir le versioning via *Git*. J'ai aussi été amené à appliquer les compétences nouvellement acquises lors d'événements tels que des *Hackathons* et *Coder Dojos*.
			`,
			en: `
				Training in Full Stack web development.

				This training is my first experience in the world of development, it allowed me to discover several programming languages and their frameworks.

				During this training, I was able to participate in the realization of group projects, allowing me to discover versioning via *Git*. I was also able to apply newly acquired skills during events such as *Hackathons* and *Coder Dojos*.
			`
		}
	},
	{
		type: ParType.Forma,
		entreprise:"Technocité",
		place:"Hornu",
		time:"2018 - 2019",
		title: {
			fr: "Formation UX Webdesign",
			en: "UX Webdesign training course"
		},
		desc: {
			fr: `
				Cette formation m'a appris à concevoir des sites web ergonomique et accessible.

				Tout au long de la formation, j'ai participé à la réalisation du site web d'une entreprise de permaculture [Mel'égumes](modal:mel).

				* HTML & CSS (SASS)
				* JavaScript
				* Conception et intégration de sites web
				* Méthode agile
				* Responsive webdesign
			`,
			en: `
				This training taught me how to design ergonomic and accessible websites.

				Throughout the training, I participated in the creation of the website of a permaculture company [Mel'égumes](modal:mel)

				* HTML & CSS (SASS)
				* JavaScript
				* Website designing and integration
				* Agile software development
				* Responsive webdesign
			`
		}
	},
	{
		type: ParType.Entr,
		entreprise:"Artistic Studio",
		place:"Marchienne-au-pont",
		time:"2016",
		title: {
			fr: "Stage infographie",
			en: "Graphic designer internship"
		},
		desc: {
			fr: `
				Stage de fin d’études dans une entreprise de graphiste où j’ai réalisé plusieurs tâches et travaux graphique.

				* Photoshop, Illustrator & InDesign
				* Création d'affiche et carte de visite
				* Mise en page de flyers
				* Création de logos
				* Montage vidéo
			`,
			en: `
				Graduation internship at a graphic designer's company where I've performed several tasks and graphic works.

				* Photoshop, Illustrator & InDesign
				* Poster and business card creation
				* Flyers layout
				* Logos creation
				* Video editing
			`
		}
	},
	{
		type: ParType.Gradu,
		entreprise:"ISIPS",
		place:"Charleroi",
		time:"2012 - 2017",
		list:["Adobe Photoshop, Illustrator & InDesign", "HTML & CSS", "After Effect", "Avid Pro Tools", "Blender"],
		title: {
			fr: "Bachelier en infographie",
			en: "Computer graphics bachelor"
		},
		desc: {
			fr: `
				Mon projet de fin d'étude [Artifact Rush](modal:artifact), m'a permis de décrocher mon bachelier avec grande distinction.
			`,
			en: `
				My end-of-study project [Artifact Rush](modal:artifact), allowed me to obtain my bachelor's degree with great distinction.
			`
		}
	}
]
