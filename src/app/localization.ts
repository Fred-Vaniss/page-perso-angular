interface Translation {
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