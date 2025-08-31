### Mon site personnel refaite en Angular

* **Année**: 2023
* **Technologie**: Angular
* **Durée**: Trois semaines

Après avoir expérimenté React, j’ai souhaité découvrir Angular pendant mon temps libre. J’ai donc recréé [mon site web réalisé initialement en React](modal:fred-react) en Angular.

{{gallery:0}}

Le résultat est plus structuré, notamment grâce à la possibilité d’itérer directement dans le template HTML avec ngFor.

La principale différence concerne l’affichage des textes dans la section *parcours* et les articles du *portfolio* :

* Avec **React**, j’exploitais le **JSX**, propre à ce framework, mais inutilisable dans Angular.
* Dans **Angular**, j’ai contourné cette limite en utilisant un module permettant d’écrire mes textes en **Markdown**, un format plus lisible et maintenable que l’insertion directe de balises HTML dans chaque paragraphe.

Enfin, j’ai ajouté une nouvelle fonctionnalité : la possibilité d’afficher un article du portfolio directement depuis une chaîne de requête dans l’URL. L’adresse s’actualise automatiquement à l’ouverture d’un article, ce qui améliore le partage et la navigation.
