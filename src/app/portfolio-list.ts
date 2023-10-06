import { Translation } from "./localization";

export interface GalleryCall {
	galIndex: number;
}

export type Article = string | GalleryCall

interface ArticleTranslation {
	[key: string]: Article[];
}

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
	url: Links;
	article: ArticleTranslation;
	galleries?: Gallery[];
}


export const PORTFOLIOLIST: PortfolioEntry[] =  [
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
					img: "zomboid/zomboid-1", 
					format: "jpg", 
					alt: {
						fr: "Création des silhouettes du Illustrator.",
						en: "Creation of silhouettes on Illustrator." 
					}
				},
				{ 
					img: "zomboid/zomboid-2", 
					format: "jpg", 
					alt: {
						fr: "Aperçu du panneau en jeu.",
						en: "Overview of the in-game panel." 
					}
				},
				{ 
					img: "zomboid/zomboid-3", 
					format: "gif", 
					alt: {
						fr: "Apparition et intéraction avec le panneau.",
						en: "Apparition and interaction with the panel." 
					}
				},
			],
		],
		article:{
			fr: [`
					### Addons pour Project Zomboid
					#### Project personnels
					
					* 2022
					* Technologies utilisés: LUA
					
					Project Zomboid est un jeu de survie dans un monde affecté par une apocalypse zombie. On crée un personnage et le but est simplement de survivre et de subvenir à ses besoins dans un monde ouvert gigantesque.

					
					Le jeu est extrêmement modulable et permets d'ajouter de nouvelles fonctionalités au jeu et même de modifier le monde. <br/> Il à un Steam Workshop où tout le monde peuvent publier leurs créations pour que les autres puissent modifier leurs propres expérience de jeu.

					---

					### Mini Health Panel
					#### Interface utilisateur
					
					Développer un addon pour Project Zomboid s'est révélé être un gros challenge. Contrairement à Garry's Mod, il n'y a aucune documentation pour développer un addon. Il a donc fallu devoir lire "déchiffrer" moi même les fichiers LUA déjà établi par les développeurs ainsi que les autres addons par la communauté afin de comprendre comment fonctionnent les fonctions du jeu.
					
					Ça m'a pris du temps pour comprendre mais j'ai réussi à développer un addon qui a fait son petit succès sur le Workshop du jeu.
				`,

				{galIndex : 0},

				`
					<div id="gal1"></div>
					
					J'ai créé un panneau de santé minimaliste. La silhouette est invisible par défaut et apparait à l'écran dès qu'il y a une blessure à traiter.
					
					Cet addon à pour but de pouvoir se passer de l'interface de santé de base qui prends beaucoup d'espace à l'écran et qu'il s'affiche seulement dans le besoin au lieu de le garder en permanence à l'écran ou de devoir cliquer sur l'icone de santé dès qu'il faut traiter son personnage.
					
					Beaucoup de personnes ont appréciés mon travail est à atteint le premier mod du worshop des plus populaires de la semaine et des trois derniers mois.
				`
			],
			en: [`
					### Addons for Project Zomboid
					#### Personal projects

					* 2022
					* Used technologies: LUA

					Project Zomboid is a survival game in a world under a zombie apocalypse. We create a character and the goal is simply to survive and fulfill our needs on a huge world.
					
					The game is extremely modulable and allows to add new features to the game and even modify the world. <br/> It has a Steam Workshop where everyone can publish their creations so others can modify their own game experience.

					---
					
					### Mini Health Panel
					#### User interface
					
					Developing an addon for Project Zomboid was a big challenge. Unlike Garry's Mod, there si no documentation for addon development. So I had to read and "decipher" myself the LUA files already established by the developers and other addons by the community in order to figure out how the game's functions works.
					
					It took some time to understand but I managed to develop an addon which made its small success on the workshop of the game.
				`,

				{galIndex: 0},

				`
					
					<div id="gal1"></div>

					I created a minimalistic health panel. The silhouette is invisible by default and appear on the screen whenever there is a wound to treat.
					
					This addon's purpose is to be able to do without the health interface of the base's game which take a lot of screen space and displays only when needed instead of always keeping it on sreen or having to click on the health icon as soon you need to treat your character.
					
					Many people appreciated my work and was the most popular of the week and the last three months.
				`
			]
		}
		
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
					img: "hema/hema-1",
					format: "jpg",
					alt: {
						fr: "Conception de l'interface",
						en: "Interface concept"
					},
				},
				{
					img: "hema/hema-2",
					format: "gif",
					alt: {
						fr: "Animation de l'electrocardiogramme",
						en: "Electrocardiogram animations"
					},
				},
				{
					img: "hema/hema-3",
					format: "gif",
					alt: {
						fr: "Animation du chargeur",
						en: "Clip animation"
					},
				}
			],
			[
				{
					img: "synt/synthud-1",
					format: "gif",
					alt: {
						fr: "Animation barre de santé et d'armure",
						en: "Health and armor bar animation"
					},
				},
				{
					img: "synt/synthud-2",
					format: "gif",
					alt: {
						fr: "Animation du compteur de munitions",
						en: "Ammo count animation"
					},
				},
				{
					img: "synt/synthud-3",
					format: "jpg",
					alt: {
						fr: "La communauté Steam a adoré mon addon",
						en: "The Steam community loved my addon"
					},
				}
			]
		],
		article:{
			fr: 
			[
				`
					### Addons pour Garry's mod
					#### Projets personnels
					
					* 2020 - 2021
					* Technologies utilisés: LUA
						
					Durant mon temps libre, je développe des addons pour Garry's Mod. C'est à la fois un jeu vidéo et un outil artistique qui est hautement modulable grâce à la possibilité d'implémenter des scripts codés en LUA dans le jeu.
					
					Les créations peuvent être publiées sur le Steam Workshop où tout le monde peuvent installer les addons créés.
					
					---

					### HEMA HUD
					#### Affichage tête haute animé
					
					Cet addon à été créé à la demande d'une personne dont j'ai été rénuméré pour cette tâche. C'est une interface tête haute pour un pack d'addons portant sur une survie d'une apocalypse zombie appelé Hematolysis. Cet ATH à été entièrement conçu par moi-même.
					
					Il comporte un électrocardiogramme en guise d'indicateur de santé comme Resident Evil (animé avec AfterEffect). Le compteur de munitions dans le chargeur affiche des balles individuel dans un conteneur et s'anime quand les balles sont tirés.
					
				`,
					{galIndex: 0},
				`
					
					---

					### SYNTHETIK HUD
					#### Affichage tête haute animé
					
					Mon projet qui a connu un grand succès sur le Steam Workshop est un addon d'ATH qui reprend d'un jeu vidéo du nom de SYNTHETIK.
					
					C'est une interface qui est minimaliste et qui est animée fidèlement.

				`,
					{galIndex: 1},
				`
					
					---

					### FPV Drone
					#### Drone FPV pilotable
					
					Mon hobby dans la vie réelle est le pilotage de drone FPV. C'est un drone où il n'y a pas d'assistance de stabilisation, on peut tourner dans tous les axes et on porte un masque dans les yeux qui transmet ce que le drone voit.
					
					J'ai développé cet addon qui reproduit à peu près le pilotage d'un vrai drone FPV et où on peut s'amuser dans d'innombrables cartes créées par la communauté Garry's Mod.
					
					Ce fut aussi ma toute première entité programmée qui fallait à la fois gérer le côté client et le côté serveur de cet addon.
					<div class="modal-gallery">
						<div class="video-wrapper">
							<iframe width="560" 
									height="315" 
									src="https://www.youtube.com/embed/5zpn2cg4Jq8" 
									frameBorder="0" 
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
									allowFullScreen="allowfullscreen"
									title="Vidéo de démonstration du drone FPV"></iframe>
						</div>
					</div>
				`
			],
			en: 
			[
				`
					### Addons for Garry's Mod
					#### Personal projects
					
					* 2020 - 2021
					* Used technologies: LUA
					
					During my free time, I develop addons for Garry's Mod. It's both a video game and an artistic tool, it's highly modulable by the possibility to add LUA coded scripts within the game.
					
					The creations can be published on the Steam Workshop where everyone can install created addons.
					
					---

					### HEMA HUD						
					#### Animated heads up display
					
					This addon were commissioned by someone which I got renumerated for this task. It is a heads up display for an addons pack about a zombie apocalypse survival called Hematolysis. This HUD were completely designed by myself.
					
					It features an electrocardigogram as a health indicator like Resident Evil (animated with AfterEffect). The ammo clip counter display individual bullets in a container and animate as bullets are shots.
					
				`,
					{galIndex: 0},
				`
					
					---

					### SYNTHETIK HUD
					#### Animated heads up display
					
					My project that got a huge success on the Steam Workshop is an animated HUD that is based on a video game called SYNTHETIK
					
					It's a minimalistic interface which is faithfully animated.

				`,
					{galIndex: 1},
				`
					
					---

					### FPV Drone
					#### Pilotable FPV drone
					
					My real life hobby is piloting FPV drone. It's a drone where there is no stabilization assist, we can turn in every angle and we wear a mask on the eyes that transmit what the drone sees.
					
					I developed this addon that reproduces approximately the piloting of a real FPV drone and where we can enjoy in countless of maps created by the Garry's Mod community.
					
					This also was my very first programmed entity where I had to manage the client side and the server side of this addon.
					<div class="modal-gallery">
						<div class="video-wrapper">
							<iframe width="560" 
									height="315" 
									src="https://www.youtube.com/embed/5zpn2cg4Jq8" 
									frameBorder="0" 
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
									allowFullScreen="allowfullscreen"
									title="Demo video of my FPV drone"></iframe>
						</div>
					</div>
				`
			]
		}
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
			preview: "https://fred-vaniss.be/timed-progress-tracker"
		},
		galleries: [
			[
				{
					img: "bt-tracker/tracker-1",
					format: "jpg",
					alt: {
						fr: "Exemple d'utilisation",
						en: "Usage example",
					}
				},
				{
					img: "bt-tracker/tracker-2",
					format: "jpg",
					alt: {
						fr: "Exemple de différents états",
						en: "Differents states example"
					}
				},
				{
					img: "bt-tracker/tracker-2",
					format: "jpg",
					alt: {
						fr: "Exemple de différentes erreurs",
						en: "Differents errors example"
					}
				}
			]
		],
		article: {
			fr: [
				`
					### Suivir d'objetifs limités dans le temps
					#### Projet personnel
					
					* Février 2021
					* Technologies utilisés: React, SASS
					* Projet terminé en cinq jours
					
				`,
				{galIndex: 0},
				`
					
					Je joue beaucoup aux jeux vidéos et il existe un concept qu'on appelle "Battlepass", ou Pass de Combat. C'est un objectif limité dans le temps (généralement trois mois) où on peut gagner des récompenses supplémentaires.
					
					Je me suis dit du coup pourquoi ne pas me faire une appli pour avoir un suivi et qui me permettrait de déterminer si je suis dans le temps ou si je suis en retard. C'était aussi le projet idéal pour me remettre dans le bain de React.
					
					Cette appli permet de créer plusieurs suivis avec une date de début, une date de fin, une heure, un nombre déterminant l'objectif à atteindre et la quantité que les boutons + et - incrémentent
					
					Les barres de progressions ont une petite barre de temps qui défile de gauche à droite en fonction du temps restant, c'est ce qui détermine si on est en avance ou en retard par rapport au pourcentage de la progression, c'est un concept que le jeu Diablo III m'a inspiré.
					
					Et pour aller plus loin, j'ai aussi ajouté la possibilité de réorganiser les différentes entrées, de les éditer ainsi que de les supprimer.
				`
			],
			en: [
				`
					### Time limited objectives tracker
					#### Personal project
					
					* February 2021
					* Used technologies: React, SASS
					* Project finished in five days
					
					<Gallery src={[
						{format: "jpg", img: "bt-tracker/tracker-1", alt:"Usage example"},
						{format: "jpg", img: "bt-tracker/tracker-2", alt:"Differents states example"},
						{format: "jpg", img: "bt-tracker/tracker-3", alt:"Differents errors example"},
					]}/>
					
					I play a lot of video games and there's a concept called "Battlepass". This is a time-limited goal (usually three months) where you can earn additional rewards.
					
					So I thought why not make myself an app to have a tracking that helps me determine if I'm on time or if I'm late. It was also the perfect project to get me back into React.
					
					This app allows creating several trackers with a start date, an end date, a time, a number determining the goal to be reached and the amount that the buttons + and - increments.
					
					The progress bars have a small time bar that moves from left to right depending on the remaining time, that's what determines whether you're ahead or behind the progress percentage, it's a concept that the game Diablo III inspired me.
					
					And to go further, I also added the possibility to rearrange the different entries and edit them and to delete them.
				`
			]
		},
	}
]