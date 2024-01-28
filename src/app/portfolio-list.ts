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
				
			]
		],
		article: {
			fr:[
				`
					### Hematolysis
					#### Addon de systèmes de survival horror pour Garry's mod

					* 2021 - 2023
					* Technologie utilisé: LUA

					Hematolysis est un addon pour Garry's Mod qui a pour but de donner un aspect *survival-horror*.

					Mon projet est divisé en trois parties distinctes: l'affichage tête haute (ATH), un système d'infection et un système d'inventaire avec plusieurs interactions possibles avec chaque objet.
				`,
					{galIndex: 0},
				`

					---

					### L'ATH et le système d'infection
				`,
					{galIndex: 1},
				`
					Tous les éléments graphiques sont créés de mes propres mains sur Photoshop. J'ai d'abord commencé sur la conception, puis la découpe de chaque image séparée pour finir sur l'implémentation sur le jeu. L'électrocardiogramme est animé sur After Effect.

					Puis il vient s'ajouter aussi un système d'infection plutôt simpliste. Si le joueur se fait toucher par un zombie, le pourcentage d'infection monte et si ce pourcentage atteint 100% le joueur se transforme en zombie.

					Il existe aussi des objets qui permettent de réduire temporairement l'infection.

					Le compteur de balles dans le chargeur comporte aussi une animation à chaque balle tiré qui est simplement animé grâce aux maths.

					---

					### Le système d'inventaire
				`,
					{galIndex: 2},
				`
					C'est sans doute la partie la plus complexe de ce projet.

					Chaque joueur ne peut porter qu'un nombre limité d'armes, de munitions et d'objets, tout confondu. Chaque objet est listé dans une fenêtre affichés à l'aide d'une touche et chaque objet peut être équipé, utilisé, combiné ou lâché.

					Puis vient aussi un système de combinaison d'objet où deux objets sont consommés pour en créer une nouvelle. (voir deuxième illustration)

					Et il y a aussi l'affichage des inventaires des joueurs à proximité. Un joueur peut voir les objets qu'un autre porte s'il est visible et qu'il se situe à une distance suffisante. (voir troisième illustration)

					Cette partie du projet m'a fait beaucoup apprendre l'interaction entre client-serveur. Par exemple pour afficher le contenu de l'inventaire d'un joueur ou les combinaisons possibles, j'ai mis en place une fonction au client qui va demander au serveur de fournir les informations demandées.
					
					Il en va de même pour l'utilisation d'objet, la combinaison d'objets, bref, tout ce que le client n'a aucun privilège et requiert l'intervention du serveur pour relayer les actions ou informations.

					C'est sans nul doute le plus gros projet que j'ai eu à développer et qui m'a aussi permis d'apprendre des méthodologies et d'autres principes.
				`
			],
			en:[
				`
					### Hematolysis
					#### Survival-horror system addon for Garry's Mod

					* 2021 - 2023
					* Used technology: LUA

					Hematolysis is an addon for Garry's mod which aims to give a *survival-horror* aspect.

					My project is divided into three distinct parts: the heads-up display (HUD), an infection system and an inventory system with several possible interactions with each item.
				`,
					{galIndex: 0},
				`

					---

					### The HUD and the infection system
				`,
					{galIndex: 1},
				`
					All graphic elements are created by my own hands on Photoshop. I first started with the design, then the cutting of each separate image to finish with the implementation in the game. The electrocardiogram is animated on After Effect.

					Then there is also a rather simplistic infection system. If the player is hit by a zombie, the infection percentage increases and if this percentage reaches 100% the player turns into a zombie.

					There are also items that can temporarily reduce infection.

					The bullets counter in the magazine also features an animation for each bullet fired which is simply animated by using math.

					---

					### The inventory system

				`,
					{galIndex: 2},
				`
					This is undoubtedly the most complex part of this project.

					Each player can only carry a limited number of weapons, ammo, and items combined. Each item is listed in a window displayed using a button and each item can be equipped, used, combined or dropped.

					Then also comes an item combination system where two items are consumed to create a new one. (see second illustration)

					And there is also the display of nearby player inventories. A player can see items that another player is carrying if they are visible and at a sufficient distance. (see third illustration)

					This part of the project made me learn a lot about client-server interaction. For example, to display the contents of a player's inventory or possible combinations, I set up a function in the client who will ask the server to provide the requested information.
					
					The same goes for the use of items, the combination of items, in short, everything that the client has no privileges and requires the intervention of the server to relay actions or information.

					It's undoubtedly the biggest project I've ever had to develop, and has also enabled me to learn methodologies and other principles.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Mon site personnel refaite en Angular

					* 2023
					* Technologie utilisé: Angular
					* Projet réalisé en trois semaines

					Je me suis intéressé à Angular pendant mon temps libre, j'ai donc re-crée [mon site web React](/?lang=fr&article=fred-react#portfolio) vers Angular.
				`,
					{galIndex: 0},
				`
					Le résultat est beaucoup plus prore grâce a la capacité d'itérer directement dans le template HTML avec **ngFor*.

					La grosse différence est pour l'affichage les textes dans *parcours* et les articles du *portfolio*:
					* Dans **React** j'ai exploité le *JSX* qui était propre à lui et que je ne pouvait pas l'utiliser dans Angular.
					* Pour contourner de problème dans **Angular** j'ai utilisé un module pour pouvoir écrire mes texte en **Markdown** qui est un format plus propre plutôt que de mettre des balises HTML dans chaque paragraphes.

					Une nouvelle fonctionnalité que j'ai aussi apporté à mon site est le fait de pouvoir afficher un article de mon portfolio directement depuis une chaîne de requête dans la barre d'adresse (l'adresse s'actualise aussi dès l'affichage d'un article).
				`
			],
			en: [
				`
					### My personal website redone in Angular

					* 2023
					* Used technology: Angular
					* Project done in three weeks

					I got interested in Angular in my free time, so I re-built [my React website](/?lang=fr&article=fred-react#portfolio) to Angular.
					
				`,
					{galIndex: 0},
				`
					The result is much more cleaner thanks to the ability to iterate directly in the HTML template with **ngFor*.

					The big difference is for displaying the texts in *career* and the articles in the *portfolio*:
					* In **React** I exploited the *JSX* which was specific to it and which I could not use it in Angular.
					* To work around the problem in **Angular** I used a module to be able to write my text in **Markdown** which is a cleaner format rather than putting HTML tags in each paragraph.

					A new feature  that I also brought to my website is the ability to display an article from my portfolio directly from a query string in the address bar (the address is also updated when an article is displayed).
				`
			],
		}
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
		],
		article:{
			fr: [
				`
					### Addons pour Project Zomboid
					#### Project personnels
					
					* 2022
					* Technologies utilisés: LUA
					
					[Project Zomboid](https://projectzomboid.com/blog/the-game/) est un jeu de survie dans un monde affecté par une apocalypse zombie. On crée un personnage et le but est simplement de survivre et de subvenir à ses besoins dans un monde ouvert gigantesque.

					Le jeu est extrêmement modulable et permets d'ajouter de nouvelles fonctionalités au jeu et même de modifier le monde. <br/> Il à un Steam Workshop où tout le monde peuvent publier leurs créations pour que les autres puissent modifier leurs propres expérience de jeu.

					---

					### Mini Health Panel
					#### Interface utilisateur
					
					Développer un addon pour Project Zomboid s'est révélé être un gros challenge. Contrairement à Garry's Mod, il n'y a aucune documentation pour développer un addon. Il a donc fallu devoir lire "déchiffrer" moi même les fichiers LUA déjà établi par les développeurs ainsi que les autres addons par la communauté afin de comprendre comment fonctionnent les fonctions du jeu.
					
					Ça m'a pris du temps pour comprendre mais j'ai réussi à développer un addon qui a fait son petit succès sur le Workshop du jeu.
				`,

				{galIndex : 0},

				`
					J'ai créé un panneau de santé minimaliste. La silhouette est invisible par défaut et apparait à l'écran dès qu'il y a une blessure à traiter.
					
					Cet addon à pour but de pouvoir se passer de l'interface de santé de base qui prends beaucoup d'espace à l'écran et qu'il s'affiche seulement dans le besoin au lieu de le garder en permanence à l'écran ou de devoir cliquer sur l'icone de santé dès qu'il faut traiter son personnage.
					
					Beaucoup de personnes ont appréciés mon travail est à atteint le premier mod du worshop des plus populaires de la semaine et des trois derniers mois.
				`
			],
			en: [
				`
					### Addons for Project Zomboid
					#### Personal projects

					* 2022
					* Used technologies: LUA

					[Project Zomboid](https://projectzomboid.com/blog/the-game/) is a survival game in a world under a zombie apocalypse. We create a character and the goal is simply to survive and fulfill our needs on a huge world.
					
					The game is extremely modulable and allows to add new features to the game and even modify the world. <br/> It has a Steam Workshop where everyone can publish their creations so others can modify their own game experience.

					---
					
					### Mini Health Panel
					#### User interface
					
					Developing an addon for Project Zomboid was a big challenge. Unlike Garry's Mod, there si no documentation for addon development. So I had to read and "decipher" myself the LUA files already established by the developers and other addons by the community in order to figure out how the game's functions works.
					
					It took some time to understand but I managed to develop an addon which made its small success on the workshop of the game.
				`,

				{galIndex: 0},

				`
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
						fr: "Animation de l'electrocardiogramme",
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
		],
		article:{
			fr: [
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
					
					[Plus de détails sur ce projet](/?lang=fr&article=hema)					
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
			en: [
				`
					### Addons for Garry's Mod
					#### Personal projects
					
					* 2020 - 2021
					* Used technologies: LUA
					
					During my free time, I develop addons for Garry's Mod. It's both a video game and an artistic tool, it's highly modulable by the possibility to add LUA coded scripts within the game.
					
					The creations can be published on the Steam Workshop where everyone can install created addons.
					
					---

					### HEMA HUD						
					#### Animated heads-up display
					
					This addon were commissioned by someone which I got renumerated for this task. It is a heads-up display for an addons pack about a zombie apocalypse survival called Hematolysis. This HUD were completely designed by myself.
					
					It features an electrocardigogram as a health indicator like Resident Evil (animated with AfterEffect). The ammo clip counter display individual bullets in a container and animate as bullets are shots.

					[More details about this project](/?lang=en&article=hema)
				`,
					{galIndex: 0},
				`
					
					---

					### SYNTHETIK HUD
					#### Animated heads-up display
					
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
					
				`,
				{galIndex: 0},
				`
					I play a lot of video games and there's a concept called "Battlepass". This is a time-limited goal (usually three months) where you can earn additional rewards.
					
					So I thought why not make myself an app to have a tracking that helps me determine if I'm on time or if I'm late. It was also the perfect project to get me back into React.
					
					This app allows creating several trackers with a start date, an end date, a time, a number determining the goal to be reached and the amount that the buttons + and - increments.
					
					The progress bars have a small time bar that moves from left to right depending on the remaining time, that's what determines whether you're ahead or behind the progress percentage, it's a concept that the game Diablo III inspired me.
					
					And to go further, I also added the possibility to rearrange the different entries and edit them and to delete them.
				`
			]
		},
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
		],
		article: {
			fr: [
				`
					### Test de construction d'un template pour Grav
					#### Projet de test pour Why Agency
					
					* Février 2021
					* Technologies utilisés: PHP, Twig
					* Projet terminé en une journée.
					
				`,
					{galIndex: 0},
				`					
					Avec Why Agency, on a eu un client qui a eu la particularité de nous demander un site web basé sur un CMS léger et écologique. Nous qui travaillons sur WordPress, on sait qu'il nous faudrait trouver un autre CMS.
					
					On a approché l'option de [Grav](https://getgrav.org/), c'est un CMS open source basé sur Symfony, qui est *Flat-File* (qui utilise des fichiers bruts au lieu d'une base de donnée) et utilise le *Markdown* pour les articles et le contenu.
					
					Grav étant un CMS beaucoup moins connu que WordPress, on a du coup beaucoup moins d'options pour des thèmes déjà construits. 
					J'ai donc proposé à l'équipe de tenter l'approche de construire soi-même un thème Grav à partir d'un bête thème HTML statique.
					
					Je me suis donc lancé sur ce test à partir [d'un thème gratuit Bootstrap "Creative"](https://startbootstrap.com/theme/creative). 
					Je n'avais absolument aucune expérience sur la construction d'un thème, ni sur le langage Twig. C'était un total découvert pour moi et il m'a fallu beaucoup me renseigner sur la documentation officiele de Grav et observer comment les autres thèmes ont étés construits.
					
					Avant de me lancer sur la conversion du HTML en thème Twig, j'ai d'abord analysé la structure HTML afin de déterminer comment le découper, quels éléments qui vont être répétés pour afficher différents contenus sous une même structure et comment les données vont êtres sauvegardés.
					
					Ça m'a pris une journée entière pour construire ce thème. Au fur et à mesure je découvre de nouvelles choses, j'ai même pris le temps de personnaliser les panneaux du Back-Office selon le module.
					
					Ce test fut couronné de succès, j'ai appris pas mal de choses sur ce test et on va pouvoir se créer d'autres thèmes que ce qui est déjà proposé.

				`
			],
			en: [
				`
					### Grav template building test
					#### Test project for Why Agency
					
					* February 2021
					* Used technologies: PHP, Twig
					* Project finished in one day.
					
				`,
					{galIndex: 0},
				`					
					With Why Agency, we had a client who had the particularity of asking a website based on a lightweight and environmentally friendly CMS. We work on WordPress and we knew that we have to find another CMS.
					
					We approached the [Grav](https://getgrav.org/) option, it's an open source CMS based on Symfony, which is *Flat-File* (using raw files instead of a database) and uses Markdown for articles and content.
					
					Grav being CMS less known than WordPress, we have fewer options for themes already built. So I suggested to the team to try the approach of building a Grav theme ourselves from a static HTML theme.
					
					So I started this test using [a free Bootstrap theme "Creative"](https://startbootstrap.com/theme/creative). I had absolutely no experience on building a theme nor the Twig language. It was a total discovery for me and it took me a lot of research on the official Grav documentation and observing how the other themes were constructed.
					
					Before beginning to convert the HTML into Twig theme, I first analyzed the HTML layout to determine how to cut it, what elements will be repeated to display different contents under the same structure, and how the data will be saved.
					
					It took me a while day to build this theme. As I discover new tricks, I even took the time to customize the Back-Office panels according to the module.
					
					This test was successful, I learned a lot about this test and we will be able to create other themes than what is already proposed.

				`
			]
		}
	},
	{
		title: {
			fr: "Fiche personnage",
			en: "Character sheet"
		},
		techno: "ReactJS, SASS",
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
		],
		article: {
			fr: [
				`
					### Fiche de personnage Donjons & Dragons</h3>
					#### Projet personnel</h4>
					
					* Mars 2020
					* Technologies utilisés: ReactJS, SASS
					* Projet interrompu
					
				`,
					{galIndex: 0},
				`
					Je participait avec un groupe d'amis à un jeu de rôle sur table Donjon & Dragons. Dans ce jeu, chacun à une fiche de son personnage sous format papier où est indiqué tous les informations sur son personnage.
					
					Je me suis donc lancé l'idée de faire cette fiche de personnage sous format page web. Non seulement elle sera au format numérique mais en plus il fera les calculs automatiquement avec les différents statistiques associés.
					
					Pour simplifier le partage de nos fiches de personnage, toutes les modifications apportés sont enregistrés dans l'URL en tant que paramètre.
				`
			],
			en: [
				`
					### Dungeon & Dragons character sheet</h3>
					#### Personal project</h4>
					
					* March 2020
					* Used technologies: ReactJS, SASS 
					* Interrupted project
					
				`,
					{galIndex: 0},
				`
					I partipated with a group of friends in a Dungeons & Dragons tabletop role-playing game. In this game, each person has its own character sheet in paper where all the information about their characters is indicated.
					
					So I came up with the idea of making this character sheet in web format. Not only will it be in digital format, but it will also do the calculations automatically with the different associated statistics.
					
					To simplify the sharing of our character sheets, all changes made are saved in the URL as parameters.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Isotrim
					#### Réalisé chez ADEVO Solutions
					
					* Janvier 2020
					* Technologies utilisés: Wordpress, PHP, JavaScript
					* Projet auquel j'ai participé au développement
					
				`,
					{galIndex: 0},
				`
					Contrairement à Heliostart, ceci est un projet auquel j'ai apporté mon soutien, j'ai principalement apporté des modifications et de nouvelles fonctionnalités au site.
					
					En effet, j'ai créé un nouveau module pour le site qui est le panneau latéral, je l'ai créée de toute pièce, on peut y insérer les modules qu'on veut. Ainsi il sert de petit formulaire pour que le client puisse se faire appeler par l'entreprise dans la tranche horaire qu'il veut.
					
					Une autre modification que j'ai apportée est celle de la ligne de temps dans la page *à propos*. De base il avait juste les boutons sur la gauche, j'ai modifié son fonctionnement pour qu'il défile tout seul jusqu'à ce qu'on interagisse avec et ajouté deux boutons sur les côtés pour passer au slide suivant et précédent.
					
					Et la dernière modification que j'ai apportée au site est l'intégration d'un aperçu d'image *lightbox* dans le site pour les pages *nos services* et *nos réalisations*
				`
			],
			en: [
				`
					### Isotrim</h3>
					#### Made at ADEVO Solutions</h4>
					
					* January 2020
					* Used technologies: Wordpress, PHP, JavaScript
					* Project that I've participated
					
				`,
					{galIndex: 0},
				`
					Unlike Heliostart, this was a project that I have supported, I mainly made changes and new features to the website.
					
					Indeed, I created a new module for the website, which is the side panel, I created it from scratch, we can insert the modules we want. Thus it serves as a small form so that the customer can be called by the company in the time slot he wants.
					
					Another change I made is the timeline in the page *about*. Before it had just the buttons on the left, I modified it to make it scroll by itself until you interact with it and added two buttons on the sides to go to the next and previous slide.
					
					And the last modification I made to the website is the integration of a *lightbox* image preview in the website for the pages *our services* and *our realizations*.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Heliostart
					#### Réalisé chez ADEVO Solutions
					
					* Novembre 2019
					* Technologies utilisés: Wordpress, PHP, JavaScript
					* Durée du projet: 2 mois
				`,
					{galIndex: 0},
				`
					Mon premier projet de stage chez ADEVO Solutions consiste à concevoir et à construire un site internet pour promouvoir et vendre un produit et des services Heliostart. 
					C'est un boîtier permettant d'automatiser le fonctionnement d'un banc solaire à l'aide d'une application Android, il propose également des services de création de sites web.

					Le projet s'est basé d'un thème Wordpress. Le site étant sur-mesure, il a fallu beaucoup modifier dans le CSS et pas mal d'éléments ont étés construite en HTML brut.
					
					J'ai du aussi mettre en application mes talents de graphiste et de Webdesigner, j'avais à disposition une maquette de ce que devrais ressembler le site, mais il m'a fallu créer pas mal d'éléments graphiques pour le site, tel que le logo, le fond de la page d'accueil, les pictogrammes, et ainsi de suite.
					
					La partie qui m'a demandé le plus de travail est sans doute la page commander, pour cette partie j'ai du créer un shortcode PHP pour que les prix soient à jour par rapport aux données entrées dans les articles WooCommerce, puis il m'a fallu faire du JavaScript pour faire le calcul et l'affichage du récapitulatif en fonction des articles sélectionnés. 
					Et pour que les articles s'ajoutent correctement dans le panier, je me suis aussi servi de JavaScript pour que le lien de commande se mette à jour pour mettre les articles sélectionnés au panier.
				`
			],
			en: [
				`
					### Heliostart
					#### Made at ADEVO Solutions
				
					* November 2019
					* Used technologies: Wordpress, PHP, JavaScript
					* Project duration: 2 months
				`,
					{galIndex: 0},
				`
					My first internship project at ADEVO Solutions is to design and build a website to promote and sell a Heliostart product and services. It is a box that allows to automating the operation of a sunbed using an Android application, it also offers website creation services.

					The project was based on a WordPress theme. The site being customized, it was necessary to modify the CSS a lot and a lot of elements were built in raw HTML

					I also had to apply my graphic and web designer skills. I had a mock-up of what the website should look like, but I had to create a lot of graphic elements for the website, such as the logo, the background of the homepage, the pictograms and so on.

					The part that required the most of the work is certainly the order page, for this part I had to create a PHP shortcode so that the prices are up to date with the data entered in WooCommerce articles, then I had to use JavaScript to do the calculation and display the summary according to the selected articles.
					And in order to add the items correctly to the cart, I also used JavaScript to update the order links to put in the select items in the cart.
				`
			]
		}
	},
	{
		title: {
			fr: "Ce site web (React)",
			en: "This website (React)"
		},
		techno: "ReactJS, SASS",
		id: "fred-react",
		url:{
			git: "https://github.com/Fred-Vaniss/page_perso"
		},
		article: {
			fr: [
				`
					### Mon site personnel (React)

					* 2019-2022
					* Technologies utilisés: ReactJS, Sass
					* Projet réalisé en un mois
				
					Je me suis lancé dans ce projet de création de mon propre site web afin de m'exposer en ligne et pour pouvoir montrer mes projets réalisés. Cela m'a permis de mettre un plus en pratique le ReactJS et de découvrir les procédés d'hébergement de site internet.
					
					Je suis donc passé de la création de la maquette vers le développement jusqu'à l'hébergement en ligne de mon site.
					
					Ce qui m'a motivé à le développer en React c'est sa rapidité et la possibilité d'utiliser des components réutilisable pour afficher plusieurs éléments avec la même disposition, ce qui est extrêmement utile pour afficher plusieurs éléments de mon parcous et de mon portfolio.
					
					Cela m'a également permis de découvrir le processus d'hébergement en ligne. J'ai pris un VPS et un nom de domaine chez OVH, j'ai donc dû manuellement installer les prérequis via le terminal Ubuntu de mon VPS et d'envoyer mon site par FTP.
				`
			],
			en: [
				`
					### My personal website (React)

					* 2019-2021
					* Used technologies: ReactJS, Sass
					* Project finished in one month
				
					I launched this project of creating my own website in order to exhibit myself online and to showcase my project. This allowed me to put more ReactJS into practice and to discover the process of hosting websites.
					
					So I went from creating the mock-up to the development and the online hosting of my website.
					
					What motivated me to develop it in React is its speed and the ability to use reusable components to display multiple items with the same layout, which is extremely useful for displaying my career and portfolio items.
					
					It also allowed me to discover the online hosting process. I took a VPS and a domain name from OVH, so I had to manually install the prerequisite through the Ubuntu terminal of my VPS and send my website through FTP.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### AllezCiné
					#### Exercice de groupe chez BeCode
				
					* 2019
					* Technologies utilisés: HTML, JavaScript
					* Exercice terminé en 3 semaines
				`,
					{galIndex: 0},
				`
					Cet exercice de groupe a eu comme principal but de mettre en pratique la répartition des tâches dans un travail de groupe, l'utilisation de GIT à plusieurs, ainsi que la mise en pratique les requêtes AJAX.

					Le but de cet exercice était de reproduire la maquette d'un site et qu'il soit fonctionnel. Pour cela on a utilisé l'API de [The Movie Database](https://www.themoviedb.org/) pour fournir une liste des films à jour ainsi que les détails
					
					Les différents membres de mon groupe ont eu la tâche se s'occuper de différentes parties du site tandis que je me suis occupé des requêtes de l'API et d'afficher la liste des films et les informations.
					
					La seule grosse difficulté qu'on a eue était une erreur de coordination au début du projet mais après cela, tout s'est bien passé sans encombre.
				`
			],
			en: [
				`
					### AllezCiné
					#### Group exercice at BeCode
				
					* 2019
					* Used technologies: HTML, JavaScript
					* Exercice finished in 3 weeks
				`,
					{galIndex: 0},
				`
					The main purpose of this group exercice was to put into practice the allocation of tasks in a group work, the use of GIT with several people and the practical application of AJAX requests

					The goal of this exercice was to reproduce a mock-up of a website and make it functional. For this, we used [The Movie Database](https://www.themoviedb.org/) API to provide an up-to-date list and details of the movies.
					
					The different memeber of my group had the task of taking care of different parts of the website while I took care of the API queries and displaying the list of movies and information.
					
					The only big problem we had was a miscoordination at the start of the project, but after that, everything went smoothly.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Jeu du pendu
					#### Projet individuel chez BeCode
				
					* 2019
					* Technologies utilisés: HTML, SASS, JavaScript
					* Projet terminé en un mois
				`,
					{galIndex: 0},
				`
					C'était à la base juste un petit exercice à base de "prompt" pour demander à la personne de choisir une lettre et d'afficher dans la console les lettres devinées et le nombre d'essais restants.

					Sauf que je suis allé beaucoup plus loin que ce qui était demandé dans l'exercice, j'ai utilisé la page HTML pour interagir avec le jeu alors qu'on n'avais pas encore évoqué le DOM en cours. Au fur et à mesure que je progresse, j'ai même ajouté des mots aléatoires, des mots complexes avec des tirets, apostrophes et des accents. Pour finir, j'ai mis une liste gigantesque dans un fichier JSON.
					
					Puis j'ai été encore plus loins en affichant le fameux bonhomme allumette au fur et à mesure qu'on épuise le nombre d'essais ainsi qu'un clavier virtuel qui change de couleur si la lettre figure dans le mot ou pas.
					
					Plus de détails dans le README de mon dépôt Github.
				`
			],
			en: [
				`
					### Hangman's game
					#### Individual project at BeCode
				
					* 2019
					* Used technologies: HTML, SASS, JavaScript
					* Project finished in a month
				`,
					{galIndex: 0},
				`
					It was at first just a little exercise with a "prompt" that asks the person to choose a letter and display in the console the guessed letters and the number of trials remaining.

					Except that I went much further than what was asked for in the exercise, I used the HTML page to interact with the game while we had not mentioned the DOM in the course yet. 
					As I progressed, I even added random words, complex words with dashes, apostrophes and accents. Finally, I but a gigantic list in a JSON file.
					
					Then I went even further by displaying the famous stickman as we use the of trials and a virtual keyboard that changes color whether the letter is in the word or not.
					
					More details in the README of my Github repository. (in French)
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Mél'égumes
					#### Projet de groupe chez Technocité
				
					* 2019
					* Technologies utilisés: HTML, SASS, JavaScript
					* Projet terminé en trois mois
				`,
					{galIndex: 0},
				`
					Ce site a été développé dans le cadre d'une formation en UX Webdesign chez Technocité en partenariat avec Design Innovation.

					Le projet consiste à concevoir et de développer un site internet pour notre cliente Mélanie pour promouvoir son entreprise de permaculture Mél'égumes.
					
					La cliente n'ayant ni contenu, ni charte graphique, on a dû tout créer de nous-mêmes par équipes de trois personnes.
					
					Mes collègues se sont occupés de la mise en page, du contenu graphique et textuels tandis que je me suis occupé de coder le site.
				`
			],
			en: [
				`
					### Mél'égumes
					#### Group project at Technocité
				
					* 2019
					* Used technologies: HTML, SASS, JavaScript
					* Project finished in three months
				`,
				{galIndex: 0},
				`
					This website was developed as part of a UX Webdesign training course at Technocité in partnership with Design Innovation.

					The project consists of designing and developing a website for or client Mélanie to promote her permaculture business Mél'égumes.
					
					Since the client didn't have any content or graphics, we had to crate everything ourselves in teams of three people.
					
					My colleagues took care of the layout, the graphic and textual content, while I took care of the coding of the website.
				`
			]
		}
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
		],
		article: {
			fr: [
				`
					### Artifact Rush
					#### Projet de fin d'étude de bachelier
				
					* Première création: 2017
					* Refonte du site: 2019
					* Technos: HTML, SASS, JavaScript
					* Durée du projet: 2 mois
				`,
					{galIndex: 0},
				`
					C'est une refonte complète de mon site de projet de fin d'études (créé en 2017).

					À cet époque, je n'avais quasi aucune conaissance sur la création d'un site web et des bonnes pratiques, du coup je m'étais contenté juste de prendre un thème Bootstrap et le me modifier, le résultat au format mobile était catastrophique.
					
					Je me suis donc lancé sur ce re-créer mon site à partir de zéro afin de mettre en application ce que j'avais appris en UX Webdesign chez Technocité.
					
					Cette refonte ne dépends pas de Bootstrap et toutes les fonctionnalités du site sont faites en JavaScript brut. 
					J'ai également fait des améliorations sur la mise en page et elle est désormais parfaitement responsive.
				`
			],
			en: [
				`
					### Artifact Rush
					#### Bachelor End-of-study work
				
					* First creation: 2017
					* Re-creation: 2019
					* Techs: HTML, SASS, JavaScript
					* Project duration: 2 months
				`,
					{galIndex: 0},
				`
					This is a complete recreation of my end-of-study project website (created in 2017).

					At that time, I had almost no knowledge about creating a website and best practices, so I had just taken a Bootstrap theme and changed it, the result in mobile format was quite catastrophic.
					
					So I embarked on this project to recreate my website from scratch in order to apply what I've learned in UX Webdesign course at Technocité.
					
					This recreation doesn't depend on Bootstrap and all the features of the website are made in vanilla JavaScript. I also made some improvements on the layout and it is now perfectly responsive.
				`
			]
		}
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
		article: {
			fr: [`
				# Erreur

				L'article spécifié n'existe pas.
			`],
			en: [`
				# Error

				The specified article doesn't exist.
			`]
		}
	}
]