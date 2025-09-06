export interface Translation {
	[key: string]: string;
}


export const LOCINTRO: Translation = {
	fr: "Développeur web",
	en: "Web Developer"
}

interface Locnavbar{
	lang: Translation;
	about: Translation;
	skills: Translation;
	career: Translation;
}

export const LOCNAVBAR: Locnavbar = {
	lang: {
		fr: 'English',
		en: 'Français'
	},
	about: {
		fr: "À propos",
		en: "About",
	},
	skills: {
		fr: 'Compétences',
		en: 'Skills'
	},
	career: {
		fr: 'Parcours',
		en: 'Career'
	}
}

interface LocAbout{
	title: Translation;
	text: Translation;
}

export const LOCABOUT: LocAbout = {
	title: {
		fr: "À propos de moi",
		en: "About me"
	},
	text: {
		fr: `
			Détenteur d'un bachelier en infographie, j'ai participé à la création de plusieurs sites, ce qui a éveillé ma curiosité pour le code et le web. Cette découverte m'a conduit à suivre en 2019 la formation de développeur web chez BeCode, où j'ai appris à utiliser des frameworks tels que React et Angular.

      En 2023, j'ai poursuivi avec la formation de développeur .NET chez Technofutur TIC, afin de transformer cet intérêt pour le développement en métier.

      En parallèle, j'ai développé de nombreux mods pour jeux vidéo, explorant de nouveaux langages comme Lua et créant des expériences appréciées par les communautés.
		`,
		en: `
			Holder of a Bachelor’s degree in Graphic Design, I took part in the creation of several websites, which sparked my curiosity for coding and the web. This discovery led me to join the Web Developer training at BeCode in 2019, where I learned to work with frameworks such as React and Angular.

      In 2023, I continued with the .NET Developer training at Technofutur TIC, in order to turn this interest in development into a career.

      Alongside my studies, I have developed numerous mods for video games, exploring new languages such as Lua and creating experiences that are well appreciated by player communities.
		`
	}
}

export const LOCSKILLS: Translation = {
	fr: "Mes compétences",
	en: "My skills"
}

export const LOCTIMELINE: Translation = {
	fr: "Mon parcours",
	en: "My career"
}

export const LOCPORTFO: Translation = {
	fr: "Mon portfolio",
	en: "My portforlio"
}

interface LocButtons{
	open: Translation;
	close: Translation;
	preview: Translation;
	git: Translation;
}

export const LOCBUTTONS: LocButtons = {
	open: {
		fr: "Plus d'infos",
		en: "More details"
	},
	close: {
		fr: "Fermer",
		en: "Close"
	},
	preview: {
		fr: "Page du projet",
		en: "Project page"
	},
	git: {
		fr: "Dépot GitHub",
		en: "Github repository"
	}
}

interface LocContact {
	title: Translation;
	text: Translation;
}

export const LOCCONTACT: LocContact = {
	title: {
		fr: "Contactez-moi",
		en: "Get in touch"
	},
	text: {
		fr: `
			Je suis actuellement disponible pour de nouvelles opportunités.

      Si mon profil vous intéresse ou si vous avez des questions, n’hésitez pas à me contacter par e-mail ou par téléphone. Je vous répondrai rapidement.
		`,
		en: `
			I am currently available for new opportunities.

      If you are interested in my profile or have any questions, feel free to contact me by email or phone. I will get back to you promptly.
		`
	}
}
