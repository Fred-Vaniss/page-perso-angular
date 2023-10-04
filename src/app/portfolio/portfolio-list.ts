import { Translation } from "../localization";

interface Links {
	note: Translation;
	git?: string;
	preview?: string;
}

interface PortfolioList {
	title: Translation;
	techno: string;
	img: string;
	url: Links;
}

export const PORTFOLIOLIST: PortfolioList[] =  [
	{
		title: {
			fr: "Project Zomboid",
			en: "Project Zomboid",
		},
		techno: "LUA, Illustrator",
		img: "zomboid",
		url:{
			note: {
				fr: `
					### Addons pour Project Zomboid
					#### Project personnels
					
					* 2022
					* Technologies utilisés: LUA
					
					Project Zomboid est un jeu de survie dans un monde affecté par une apocalypse zombie. On crée un personnage et le but est simplement de survivre et de subvenir à ses besoins dans un monde ouvert gigantesque.</p>

					
					Le jeu est extrêmement modulable et permets d'ajouter de nouvelles fonctionalités au jeu et même de modifier le monde. <br/> Il à un Steam Workshop où tout le monde peuvent publier leurs créations pour que les autres puissent modifier leurs propres expérience de jeu.</p>

					---

					### Mini Health Panel
					#### Interface utilisateur
					
					Développer un addon pour Project Zomboid s'est révélé être un gros challenge. Contrairement à Garry's Mod, il n'y a aucune documentation pour développer un addon. Il a donc fallu devoir lire "déchiffrer" moi même les fichiers LUA déjà établi par les développeurs ainsi que les autres addons par la communauté afin de comprendre comment fonctionnent les fonctions du jeu.</p>
					
					Ça m'a pris du temps pour comprendre mais j'ai réussi à développer un addon qui a fait son petit succès sur le Workshop du jeu.</p>

					<Gallery src={[
						{format: "jpg", img:"zomboid/zomboid-1", alt:"Création des silhouettes du Illustrator"},
						{format: "jpg", img:"zomboid/zomboid-2", alt:"Aperçu du panneau en jeu"},
						{format: "gif", img:"zomboid/zomboid-3", alt:"Apparition et intéraction avec le panneau"}
					]}/>
					
					J'ai créé un panneau de santé minimaliste. La silhouette est invisible par défaut et apparait à l'écran dès qu'il y a une blessure à traiter.</p>
					
					Cet addon à pour but de pouvoir se passer de l'interface de santé de base qui prends beaucoup d'espace à l'écran et qu'il s'affiche seulement dans le besoin au lieu de le garder en permanence à l'écran ou de devoir cliquer sur l'icone de santé dès qu'il faut traiter son personnage.</p>
					
					Beaucoup de personnes ont appréciés mon travail est à atteint le premier mod du worshop des plus populaires de la semaine et des trois derniers mois.</p>

				`,
				en: `
				
				`
			}
		}
	},
	// Skipped one entry, need to add later
	{
		title: {
			fr: "Suivi d'objectifs",
			en: "Objective tracker"
		},
		techno: "React, SASS",
		img: "bt-tracker",
		url:{
			note: {
				fr: `
					### Suivir d'objetifs limités dans le temps
					#### Projet personnel
					
					* Février 2021
					* Technologies utilisés: React, SASS
					* Projet terminé en cinq jours
					
					<Gallery src={[
						{format: "jpg", img: "bt-tracker/tracker-1", alt:"Exemple d'utilisation"},
						{format: "jpg", img: "bt-tracker/tracker-2", alt:"Exemple de différents états"},
						{format: "jpg", img: "bt-tracker/tracker-3", alt:"Exemple de différents erreurs"},
					]}/>
					
					Je joue beaucoup aux jeux vidéos et il existe un concept qu'on appelle "Battlepass", ou Pass de Combat. C'est un objectif limité dans le temps (généralement trois mois) où on peut gagner des récompenses supplémentaires.
					
					Je me suis dit du coup pourquoi ne pas me faire une appli pour avoir un suivi et qui me permettrait de déterminer si je suis dans le temps ou si je suis en retard. C'était aussi le projet idéal pour me remettre dans le bain de React.
					
					Cette appli permet de créer plusieurs suivis avec une date de début, une date de fin, une heure, un nombre déterminant l'objectif à atteindre et la quantité que les boutons + et - incrémentent
					
					Les barres de progressions ont une petite barre de temps qui défile de gauche à droite en fonction du temps restant, c'est ce qui détermine si on est en avance ou en retard par rapport au pourcentage de la progression, c'est un concept que le jeu Diablo III m'a inspiré.
					
					Et pour aller plus loin, j'ai aussi ajouté la possibilité de réorganiser les différentes entrées, de les éditer ainsi que de les supprimer.
				`,
				en: `
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
					
					And to go further, I also added the possibility to rearrange the different entries and edit them and to delete them.</p>
				`
			},
			git: "https://github.com/Fred-Vaniss/battlepass-tracker",
			preview: "https://fred-vaniss.be/timed-progress-tracker"
		}
	}
]