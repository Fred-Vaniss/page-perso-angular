# PagePersoAngular

* Projet solo
* Septembre - octobre 2023
* Angular
* Site web: [fred-vaniss.be](https://fred-vaniss.be/)

Ceci est une re-création de [mon site en React](https://github.com/Fred-Vaniss/page_perso) en Angular. 

Mon application web React date de 2019 et présente maintenant plusieurs problèmes: plusieurs versions de React et de ses dépendances sont sorties au fil des ans et mon application web est désormais obsolète et ne peux plus être compilé à moins de mettre à jour React et les dépendances, ce qui prendrait beaucoup de temps pour trouver et réadapter tout les codes qui ne fonctionnerait plus avec la nouvelle version.

Ca fait un petit moment que je me suis intéressé à Angular et j'ai donc appliqué mes conaissances acquise pour re-créer mon site dessus. J'ai eu juste à reprendre toute mes feuilles SCSS et adapter mon code et ma logique pour Angular.

Le résultat est beaucoup plus prore grâce a la capacité d'itérer directement dans le template HTML (avec **ngFor*).

La grosse différence est pour l'affichage les textes dans *parcours* et les articles du *portfolio*:
* Dans **React** j'ai exploité le *JSX* qui était propre à lui et que je ne pouvait pas l'utiliser dans Angular.
* Pour contourner de problème dans **Angular** j'ai utilisé un module pour pouvoir écrire mes texte en **Markdown** qui est un format plus propre plutôt que de mettre des balises HTML dans chaque paragraphes.