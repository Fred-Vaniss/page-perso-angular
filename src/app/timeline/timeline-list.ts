import { Translation } from "../localization";

interface Parcours {
	type: string;
	entreprise: string;
	place?: string;
	list?: string[];
	time: string;
	title: Translation;
	desc: Translation;
}

export const PARCOURS: Parcours[] = [
	{
		type: "formation",
		entreprise: "Technofutur",
		time: "2023-2024",
		place: "Gosselies",
		title: {
			fr: "Développeur .NET orienté Cloud Azure",
			en: ".NET developer oriented Cloud Azure"
		},
		desc: {
			fr:`
				Formation en cours...
			`,
			en:`
				Ongoing training course...
			`
		}
	},
	{
		type: "entreprise",
		entreprise: "Why Agency",
		time: "2020-2022",
		list: ["HTML & CSS", "Javascript", "PHP, Wordpress, Grav"],
		title: {
			fr: "Développeur web",
			en: "Web developer"
		},
		desc: {
			fr: "Travail en freelance dans le développment de sites Wordpress et Grav",
			en: "Freelance work in the development of WordPress websites"
		}
	},
	{
		type: "entreprise",
		entreprise: "Adevo Solution",
		time: "2019-2020",
		place: "Gilly",
		list: ["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"],
		title: {
			fr: "Stage développeur web",
			en: "Web development internship"
		},
		desc: {
			fr: `
				Stage de fin de formation de BeCode dans une agence créative et marketing. J'ai réalisé et participé au développement de plusieurs autres projets WordpPress et PrestaShop.
				
				L'entreprise étant très petite, j'ai été très polyvalent durant ce stage. J'ai du aussi utiliser mes compétences de graphiste pour créer des images, des pictogrammes, des logos, concevoir la disposition d'un site et veiller à ce que les images soient bien optimisés.
				
				Ce stage m'a permis d'en découvrir beaucoup plus sur Wordpress et Prestashop et à apprendre beaucoup de choses sur le développement web.
			`,
			en: `
				The internship to end my training course at BeCode in a creative and marketing agency. I realized and participated on multiple WordPress and PrestaShop development projects.
				
				The company being very small, I was very versatile during this internship. I also had to use my graphic designer skills to create images, pictograms, logos and designing a website layout and ensure that the images are well optimized.
				
				This internship allowed me to discover more about Wordpress and Prestashop and learning more about web development.
			`
		}
	},
	{
		type: "formation",
		entreprise:"BeCode",
		place:"Charleroi",
		time:"2019",
		list:["Git", "HTML & CSS & SASS", "JavaScript, NodeJS, ReactJS", "PHP & MySQL & Wordpress"],
		title: {
			fr: "Formation développeur web",
			en: "Web dev training course"
		},
		desc: {
			fr: `
				Formation intensive dans le développement front-end et back-end. Contrairement à ma précédente formation chez Technocité, cette formation est entièrement focalisé sur la programmation.
				
				J'ai appris à apprendre différents langages de programmation ainsi que les différents frameworks. La particularité de cette formation est qu'on a peu de cours et qu'on est majoritairement livré à nous-même pour suivre les parcours supervisés par des coachs. 
				
				J'ai également réalisé plusieurs travaux de groupe, participés à divers evénements tels que les Hackathons, Coder Dojos et autres...
			`,
			en: `
				An intensive training course on front-end and back-end web development. Unlike my previous training course at Technocité, this one is entirely focused on programming.
				
				I learned to learn different programming languages and frameworks as well. The particularity on this training course is we have very few courses and we are on our own to follow the courses supervised by coaches.
				
				I also carried out several group work, participated at diverse events like Hackathons, Coder Dojos and more...
			`
		}
	},
	{
		type:"formation",
		entreprise:"Technocité",
		place:"Hornu",
		time:"2018 - 2019",
		title: {
			fr: "Formation UX Webdesign",
			en: "UX Webdesign training course"
		},
		desc: {
			fr: `
				Cette formation m'a appris à concevoir des sites web ergonomique qui sensibilise beaucoup sur l'accessibilité et l'expérience utilisateur.
				
				J'ai appris sur des méthodes pour améliorer ma créativité, différents méthodes de travail en équipe tel que la méthode agile ainsi que l'utilisation de "personnas".
				
				J'ai également travaillé un projet client pour une entreprise de permaculture du nom de *Mel'égumes* qui à été réalisé tout au long de la formation par équipes de trois personnes.

				* HTML & CSS & SASS
				* JavaScript
				* Conception et intégration de sites web
				* Méthode agile
				* Responsive webdesign
			`,
			en: `
				This training has taught me how to design ergonomic websites that raise awareness about accessibility and user experience
				
				I learned about methods to improve my creativity, different teamwork methods such as the agile software development and the use of "personas"
				
				I also worked on a client project for a permaculture company named *Mel'égumes* which was carried throughout the training by teams of three persons.

				* HTML & CSS & SASS
				* JavaScript
				* Website designing and integration
				* Agile software development
				* Responsive webdesign
			`
		}
	},
	{
		type:"entreprise",
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
		type:"graduation",
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
				Cet étude m'a fait découvrir tous les horizons de l'infographie.
				
				À la fin de ces trois ans, j'ai réalisé mon projet de fin d'étude sur **Artifact Rush** et j'ai décroché mon Bachelier avec une grande distinction.
			`,
			en: `
				This study made me discover all the horizons of graphic design.
				
				At the end of these three years, I completed my graduation project on **Artifact Rush** and earned my bachelor’s degree with great distinction.
			`
		}
	}
]