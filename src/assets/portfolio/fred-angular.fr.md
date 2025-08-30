### Mon site personnel refaite en Angular

* 2023
* Technologie utilisé: Angular
* Projet réalisé en trois semaines

Je me suis intéressé à Angular pendant mon temps libre, j'ai donc recrée [mon site web React](modal:fred-react) vers Angular.

{{gallery:0}}

Le résultat est beaucoup plus propre grâce a la capacité d'itérer directement dans le template HTML avec **ngFor*.

La grosse différence est pour l'affichage les textes dans *parcours* et les articles du *portfolio*:
* Dans **React**, j'ai exploité le *JSX* qui était propre à lui et que je ne pouvais pas l'utiliser dans Angular.
* Pour contourner de problème dans **Angular**, j'ai utilisé un module pour pouvoir écrire mes textes en **Markdown** qui est un format plus propre plutôt que de mettre des balises HTML dans chaque paragraphe.

Une nouvelle fonctionnalité que j'ai aussi apportée à mon site est le fait de pouvoir afficher un article de mon portfolio directement depuis une chaîne de requête dans la barre d'adresse (l'adresse s'actualise aussi dès l'affichage d'un article).
