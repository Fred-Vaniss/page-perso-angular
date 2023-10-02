import {Parcours} from './parcours';

import { faBook, faBuilding, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const PARCOURS: Parcours[] = [
	{
		type: "entreprise",
		entreprise: "Why Agency",
		time: "2020-2022",
		list: ["HTML & CSS", "Javascript", "PHP, Wordpress, Grav"],
		title: "Développeur web",
		desc: "<p>Travail en freelance dans le développment de sites Wordpress et Grav</p>"
	},
	{
		type: "entreprise",
		entreprise: "Adevo Solution",
		time: "2019-2020",
		place: "Gilly",
		list: ["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"],
		title: "Stage développeur web",
		desc: `
			<p>Stage de fin de formation de BeCode dans une agence créative et marketing. J'ai réalisé et participé au développement de plusieurs autres projets WordpPress et PrestaShop.</p>
			<p>L'entreprise étant très petite, j'ai été très polyvalent durant ce stage. J'ai du aussi utiliser mes compétences de graphiste pour créer des images, des pictogrammes, des logos, concevoir la disposition d'un site et veiller à ce que les images soient bien optimisés.</p>
			<p>Ce stage m'a permis d'en découvrir beaucoup plus sur Wordpress et Prestashop et à apprendre beaucoup de choses sur le développement web.</p>
		`
	}
]