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
			Détenteur d'un bachelier en infographie, j'ai participé à la conception de plusieurs sites web. Étant de nature très curieuse, je me suis intéressé à leurs créations, me permettant de découvrir le milieu du code. C'est pourquoi en 2019,  j'ai décidé d'intégrer la formation de développeur web chez BeCode, me permettant de découvrir des Frameworks tel que *React* et *Angular*.

			Ayant de plus en plus envie de faire du développement mon métier, j'ai décidé en 2023 de suivre la formation de développeur .NET chez Technofutur TIC. Il me tarde de pouvoir mettre mes compétences au service d'une entreprise.
			
			L'expérience acquise dans le développement durant mes formations m'a permis de créer de nombreux *"mods"*, me permettant de découvrir de nouveaux langages tel que le *LUA*, dans des jeux vidéos qui se trouvent très souvent appréciés par les communautés de ces jeux.		
		`,
		en: `
			After my bachelor in Computer Graphics, I decided to become a developer.

			I started with UX Webdesign where I learned about the structure, designing and the accessibility of websites, only to realize that I enjoy coding more than designing websites.
			
			So I decided to invest myself in front-end and back-end development and make it my job.		
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
			Je suis actuellement disponible pour tout recrutement.

			Si vous êtes intéressé par mon profil et que vous souhaitez me recruter ou si vous avez des questions à me poser, vous pouvez me contacter par e-mail ou par téléphone.
			
			Je vous répondrai dès que possible.
		`,
		en: `
			I am currently available for recruiting.

			If you are interested about my profile and you wish to recruit me, or if you have questions to ask, you can contact me by e-mail or by phone.
			
			I will get back to you as soon as possible.
		`
	}
}