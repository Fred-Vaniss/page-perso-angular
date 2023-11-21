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
			A la suite de mon bachelier en Infographie, j'ai décidé de devenir développeur.

			J'ai commencé par l'UX Webdesign où j'ai appris la structure, la conception et l'accessibilité des sites web, pour me rendre compte ensuite que je prends plus de plaisir à coder qu'à conceoir des sites web. 
			
			J'ai donc décidé de m'investir dans le développement front-end et back-end et d'en faire mon métier.
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