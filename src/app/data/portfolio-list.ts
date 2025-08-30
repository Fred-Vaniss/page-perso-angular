import { Translation } from "./localization";

export interface GalleryCall {
	galIndex: number;
}

export type Article = string | GalleryCall

interface Links {
	git?: string;
	preview?: string;
}

export interface GalImage{
	img: string;
	format: string;
	alt: Translation;
}

export type Gallery = GalImage[];


export interface PortfolioEntry {
	title: Translation;
	techno: string;
	id: string;
	url?: Links;
	galleries?: Gallery[];
	exclude?: boolean;
}

export interface ModalChange {
    article: PortfolioEntry;
    doUpdateUrl: boolean;
}


export const PORTFOLIOLIST: PortfolioEntry[] =  [
  {
    title: {
      fr: "Hematolysis",
      en: "Hematolysis",
    },
    techno: "LUA",
    id: "hema",
    url: {},
    galleries:[
      [
        {
          img: "overview",
          format: "jpg",
          alt: {
            fr: "Une vue d'ensemble de l'ATH et de l'inventaire.",
            en: "An overview of the HUD and the inventory."
          }
        }
      ],
      [
        {
          img: "hud-1",
          format: "jpg",
          alt: {
            fr: "Conception de l'interface",
            en: "Interface concept"
          },
        },
        {
          img: "hud-2",
          format: "gif",
          alt: {
            fr: "Animation de l'electrocardiogramme",
            en: "Electrocardiogram animations"
          },
        },
        {
          img: "hud-3",
          format: "gif",
          alt: {
            fr: "Animation du chargeur",
            en: "Clip animation"
          },
        }
      ],
      [
        {
          img: "inv-1",
          format: "jpg",
          alt: {
            fr: "Exemple de quelques données d'objets d'inventaire.",
            en: "Example of some inventory items data."
          }
        },
        {
          img: "inv-2",
          format: "jpg",
          alt: {
            fr: "Exemple de quelques données de combinaison d'objets et le résultat en jeu.",
            en: "Example of some items combination data and the result in game."
          }
        },
        {
          img: "inv-3",
          format: "jpg",
          alt: {
            fr: "Affichage des inventaires des joueurs à proximités",
            en: "Display of players inventories in proximity."
          }
        },

      ],
      [
        {
          img: "updt-1",
          format: "jpg",
          alt: {
            fr: "fr",
            en: "en"
          }
        },
        {
          img: "updt-2",
          format: "jpg",
          alt: {
            fr: "fr",
            en: "en"
          }
        }
      ]
    ]
  },
  {
    title: {
      fr: "Pimp My Ride",
      en: "Pimp My Ride"
    },
    techno: "Angular",
    id: "pmr",
    url: {},
    galleries: [
      [
        {
          img: "pmr-1",
          format: "png",
          alt: {
            fr: "Carte interactive intégré avec Leaflet",
            en: "Interactive map integrated with Leaflet"
          }
        },
        {
          img: "pmr-2",
          format: "png",
          alt: {
            fr: "Détails d'une gare",
            en: "Station details"
          }
        }
      ],
      [
        {
          img: "pmr-award",
          format: "png",
          alt: {
            fr: "Prix des Territoires Intelligents",
            en: "Smart Territory award"
          }
        },
        {
          img: "pmr-ceremony",
          format: "jpg",
          alt: {
            fr: "Remise des prix du Hackathon",
            en: "Hackathon award ceremony"
          }
        }
      ]
    ]
  },
  {
		title: {
			fr: "Ce site web (Angular)",
			en: "This website (Angular)"
		},
		techno: "Angular",
		id: "fred-angular",
		url: {
			git: "https://github.com/Fred-Vaniss/page-perso-angular"
		},
		galleries: [
			[
				{
					img: "f-angular-1",
					format: "jpg",
					alt: {
						fr: "Différences d'itération des compétences entre React et Angular.",
						en: "Skills iteration difference between React and Angular"
					}
				},
				{
					img: "f-angular-2",
					format: "jpg",
					alt: {
						fr: "Différences d'itération du parcours entre React et Angular.",
						en: "Career iteration difference between React and Angular"
					}
				},
				{
					img: "f-angular-3",
					format: "jpg",
					alt: {
						fr: "React: utilisation du JSX ; Angular: utilisation du Markdown",
						en: "React: using JSX ; Angular: using Markdown"
					}
				},
			]
		]
	},
	{
		title: {
			fr: "Project Zomboid",
			en: "Project Zomboid",
		},
		techno: "LUA, Illustrator",
		id: "zomboid",
		url: {},
		galleries: [
			[
				{
					img: "zomboid-1",
					format: "jpg",
					alt: {
						fr: "Création des silhouettes du Illustrator.",
						en: "Creation of silhouettes on Illustrator."
					}
				},
				{
					img: "zomboid-2",
					format: "jpg",
					alt: {
						fr: "Aperçu du panneau en jeu.",
						en: "Overview of the in-game panel."
					}
				},
				{
					img: "zomboid-3",
					format: "gif",
					alt: {
						fr: "Apparition et intéraction avec le panneau.",
						en: "Apparition and interaction with the panel."
					}
				},
			],
		]
	},
	{
		title: {
			fr: "Addons Gmod",
			en: "Gmod addons"
		},
		techno: "LUA, Photoshop",
		id: "gmod",
		url: {},
		galleries: [
			[
				{
					img: "hema-1",
					format: "jpg",
					alt: {
						fr: "Conception de l'interface",
						en: "Interface concept"
					},
				},
				{
					img: "hema-2",
					format: "gif",
					alt: {
						fr: "Animation de l'électrocardiogramme",
						en: "Electrocardiogram animations"
					},
				},
				{
					img: "hema-3",
					format: "gif",
					alt: {
						fr: "Animation du chargeur",
						en: "Clip animation"
					},
				}
			],
			[
				{
					img: "synthud-1",
					format: "gif",
					alt: {
						fr: "Animation barre de santé et d'armure",
						en: "Health and armor bar animation"
					},
				},
				{
					img: "synthud-2",
					format: "gif",
					alt: {
						fr: "Animation du compteur de munitions",
						en: "Ammo count animation"
					},
				},
				{
					img: "synthud-3",
					format: "jpg",
					alt: {
						fr: "La communauté Steam a adoré mon addon",
						en: "The Steam community loved my addon"
					},
				}
			]
		]
	},
	{
		title: {
			fr: "Suivi d'objectifs",
			en: "Objective tracker"
		},
		techno: "React, SASS",
		id: "bt-tracker",
		url:{
			git: "https://github.com/Fred-Vaniss/battlepass-tracker",
			preview: "https://fred-vaniss.be/showcase/timed-progress-tracker"
		},
		galleries: [
			[
				{
					img: "tracker-1",
					format: "jpg",
					alt: {
						fr: "Exemple d'utilisation",
						en: "Usage example",
					}
				},
				{
					img: "tracker-2",
					format: "jpg",
					alt: {
						fr: "Exemple de différents états",
						en: "Differents states example"
					}
				},
				{
					img: "tracker-3",
					format: "jpg",
					alt: {
						fr: "Exemple de différentes erreurs",
						en: "Differents errors example"
					}
				}
			]
		]
	},
	{
		title: {
			fr: "Template Grav",
			en: "Grav Template"
		},
		techno: "PHP, Twig",
		id: "grav",
		url: {
			git: "https://github.com/Fred-Vaniss/creative-gh-grav",
			preview: "https://fred-vaniss.be/showcase/grav-site/"
		},
		galleries: [
			[
				{
					img: "grav-1",
					format: "jpg",
					alt: {
						fr: "Aperçu du site depuis la Back-Office.",
						en: "Website preview from the Back-Office."
					}
				},
				{
					img: "grav-2",
					format: "jpg",
					alt: {
						fr: "Edition du module de services.",
						en: "Services module editing."
					}
				},
				{
					img: "grav-3",
					format: "jpg",
					alt: {
						fr: "Edition du module de portfolio.",
						en: "Portfolio module editing."
					}
				}
			]
		]
	},
	{
		title: {
			fr: "Fiche personnage",
			en: "Character sheet"
		},
		techno: "React, SASS",
		id: "dnd",
		url: {
			preview: "https://fred-vaniss.be/showcase/dnd-sheet/"
		},
		galleries: [
			[
				{
					img: "dnd-1",
					format: "jpg",
					alt: {
						fr: "Fiche de personnage",
						en: "Character sheet"
					}
				},
				{
					img: "dnd-2",
					format: "jpg",
					alt: {
						fr: "Classe d'armure",
						en: "Armor class"
					}
				},
				{
					img: "dnd-3",
					format: "jpg",
					alt: {
						fr: "Jets de sauvegardes",
						en: "Save throws"
					}
				},
			]
		]
	},
	{
		title: {
			fr: "Isotrim",
			en: "Isotrim"
		},
		techno: "Wordpress, JavaScript",
		id: "isotrim",
		url: {
			preview: "https://www.isotrim.be/fr/",
		},
		galleries: [
			[
				{
					img: "iso-1",
					format: "jpg",
					alt: {
						fr: "Section ligne du temps modifiée.",
						en: "Modified timeline section"
					}
				},
				{
					img: "iso-2",
					format: "jpg",
					alt: {
						fr: "Panneau latérale que j'ai créé",
						en: "Sidebar I've made"
					}
				},
				{
					img: "iso-3",
					format: "jpg",
					alt: {
						fr: "Section d'accueil que j'ai adapté en responsive",
						en: "Reworked home section that I've adapted to responsive"
					}
				}
			]
		]
	},
	{
		title: {
			fr: "Heliostart",
			en: "Heliostart"
		},
		techno: "Wordpress, JavaScript",
		id: "helio",
		url: {
			preview: "https://www.heliostart.com"
		},
		galleries: [
			[
				{
					img: "helio-1",
					format: "jpg",
					alt: {
						fr: "Page d'accueil.",
						en: "Homepage"
					}
				},
				{
					img: "helio-2",
					format: "jpg",
					alt: {
						fr: "Section boutique",
						en: "Shop section."
					}
				},
				{
					img: "helio-3",
					format: "jpg",
					alt: {
						fr: "Section de présentation du produit",
						en: "Product presentation section."
					}
				},
			]
		]
	},
	{
		title: {
			fr: "Ce site web (React)",
			en: "This website (React)"
		},
		techno: "React, SASS",
		id: "fred-react",
		url:{
			git: "https://github.com/Fred-Vaniss/page_perso"
		},
	},
	{
		title: {
			fr: "AllezCiné",
			en: "AllezCiné"
		},
		techno: "HTML, CSS, Javascript",
		id: "cine",
		url: {
			git: "https://github.com/Fred-Vaniss/site-allezcine",
			preview: "https://fred-vaniss.github.io/site-allezcine/"
		},
		galleries: [
			[
				{
					img: "cine-1",
					format: "jpg",
					alt: {
						fr: "Header du site",
						en: "Website header"
					}
				},
				{
					img: "cine-2",
					format: "jpg",
					alt: {
						fr: "Films en vedette",
						en: "Featured films"
					}
				},
				{
					img: "cine-3",
					format: "jpg",
					alt: {
						fr: "Détails d'un film",
						en: "Film detail"
					}
				},
			]
		]
	},
	{
		title: {
			fr: "Jeu du pendu",
			en: "Hangman's game"
		},
		techno: "JavaScript",
		id: "hangman",
		url: {
			git: "https://github.com/Fred-Vaniss/jeu-pendu",
			preview: "https://fred-vaniss.github.io/jeu-pendu/"
		},
		galleries: [
			[
				{
					img: "hangman-1",
					format: "jpg",
					alt: {
						fr: "L'exercice demandé.",
						en: "The asked exercice."
					}
				},
				{
					img: "hangman-2",
					format: "jpg",
					alt: {
						fr: "Première phase de développement.",
						en: "First phase of development."
					}
				},
				{
					img: "hangman-3",
					format: "gif",
					alt: {
						fr: "Résultat final (GIF)",
						en: "Final result (GIF)"
					}
				}
			]
		]
	},
	{
		title: {
			fr: "Mel'égumes",
			en: "Mel'égumes"
		},
		techno: "HTML, SASS, JavaScript",
		id: "mel",
		url: {
			git: "https://github.com/Fred-Vaniss/site-mel-egumes",
			preview: "https://fred-vaniss.github.io/site-mel-egumes/"
		},
		galleries: [
			[
				{
					img: "mel-1",
					format: "jpg",
					alt: {
						fr: "Page d'accueil",
						en: "Homepage"
					}
				},
				{
					img: "mel-2",
					format: "jpg",
					alt: {
						fr: "Un site responsive",
						en: "A responsive website"
					}
				},
				{
					img: "mel-3",
					format: "jpg",
					alt: {
						fr: '"Raconte moi des salades"',
						en: '"Tell me some salads (french expression)"'
					}
				}
			]
		]
	},
	{
		title: {
			fr: "Artifact Rush",
			en: "Artifact Rush",
		},
		techno: "HTML, SASS, JavaScript",
		id: "artifact",
		url: {
			git: "https://github.com/Fred-Vaniss/artifact-rush-website",
			preview: "https://fred-vaniss.github.io/artifact-rush-website/"
		},
		galleries: [
			[
				{
					img: "artifact-1",
					format: "jpg",
					alt: {
						fr: "Section d'accueil",
						en: "Home section"
					}
				},
				{
					img: "artifact-2",
					format: "jpg",
					alt: {
						fr: "Section portfolio",
						en: "Portfolio section"
					}
				},
				{
					img: "artifact-3",
					format: "jpg",
					alt: {
						fr: "Détail d'un article dans un modal",
						en: "Article detail in a modal"
					}
				}
			]
		]
	},
	{
		exclude: true,
		title: {
			fr: "",
			en: ""
		},
		techno: "",
		id: "error",
		url: {},
	}

]
