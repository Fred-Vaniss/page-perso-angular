### Hematolysis
#### Addon de systèmes de survival horror pour Garry's mod

* 2021 - 2023
* Technologie utilisé: Lua

Hematolysis est un addon pour Garry's Mod qui a pour objectif d'apporter un aspect *survival-horror*.

Mon projet est divisé en trois parties distinctes: l'affichage tête haute (ATH), un système d'infection et un système d'inventaire avec plusieurs interactions possibles avec chaque objet.

{{gallery:0}}


---

### L'ATH et le système d'infection

{{gallery:1}}

Tous les éléments graphiques ont été créés par mes soins sur Photoshop.<br/>J’ai d’abord travaillé sur la conception, puis la découpe de chaque image séparée, avant de les implémenter dans le jeu.<br/>L’électrocardiogramme, quant à lui, est animé avec After Effects.

Un système d’infection, volontairement simplifié, vient également s’ajouter.<br/>Lorsqu’un joueur est touché par un zombie, son pourcentage d’infection augmente.<br/>S’il atteint 100 %, le joueur se transforme alors en zombie.

Certains objets permettent toutefois de réduire temporairement l’infection.

Le compteur de balles dans le chargeur comporte aussi une animation à chaque balle tirée qui est animé procéduralement.

---

### Le système d'inventaire

{{galIndex:2}}

C'est sans doute la partie la plus complexe de ce projet.

Chaque joueur ne peut porter qu’un nombre limité d’armes, de munitions et d’objets, tous confondus.<br/>Chaque objet est listé dans une fenêtre affichée via une touche, et peut être équipé, utilisé, combiné ou lâché.<br/>Le projet comprend également un système de combinaison d’objets, où deux objets sont consommés pour en créer un nouveau (voir deuxième illustration).

Il y a aussi l’affichage des inventaires des joueurs à proximité.<br/>Un joueur peut voir les objets qu’un autre porte s’il est visible et se situe à une distance suffisante *(voir troisième illustration)*.

Cette partie du projet m’a beaucoup appris sur l’interaction client-serveur.<br/>Par exemple, pour afficher le contenu de l’inventaire d’un joueur ou les combinaisons possibles, j’ai mis en place une fonction côté client qui demande au serveur de fournir les informations nécessaires.

Il en va de même pour l’utilisation d’objets, la combinaison d’objets, bref, tout ce que le client ne peut pas faire seul et qui nécessite l’intervention du serveur pour relayer actions et informations.

C’est sans nul doute le plus gros projet que j’ai eu à développer, et il m’a permis d’apprendre de nouvelles méthodologies et principes de développement.

---

### Mises à jours

{{galIndex:3}}

Les mises à jours se suivent et se ressemblent
