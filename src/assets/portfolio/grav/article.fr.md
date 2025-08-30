### Test de construction d'un template pour Grav
#### Projet de test pour Why Agency

* Février 2021
* Technologies utilisées: PHP, Twig
* Projet terminé en une journée.

{{gallery:0}}

Avec Why Agency, on a eu un client qui a eu la particularité de nous demander un site web basé sur un CMS léger et écologique. Nous qui travaillons sur WordPress, on sait qu'il nous faudrait trouver un autre CMS.

On a approché l'option de [Grav](https://getgrav.org/), c'est un CMS open source basé sur Symfony, qui est *Flat-File* (qui utilise des fichiers bruts au lieu d'une base de données) et utilise le *Markdown* pour les articles et le contenu.

Grav étant un CMS beaucoup moins connu que WordPress, on a du coup beaucoup moins d'options pour des thèmes déjà construits.
J'ai donc proposé à l'équipe de tenter l'approche de construire soi-même un thème Grav à partir d'un bête thème HTML statique.

Je me suis donc lancé sur ce test à partir [d'un thème gratuit Bootstrap "Creative"](https://startbootstrap.com/theme/creative).
Je n'avais absolument aucune expérience sur la construction d'un thème, ni sur le langage Twig. C'était un total découvert pour moi et il m'a fallu beaucoup me renseigner sur la documentation officiele de Grav et observer comment les autres thèmes ont étés construits.

Avant de me lancer sur la conversion du HTML en thème Twig, j'ai d'abord analysé la structure HTML afin de déterminer comment le découper, quels éléments qui vont être répétés pour afficher différents contenus sous une même structure et comment les données vont êtres sauvegardés.

Ça m'a pris une journée entière pour construire ce thème. Au fur et à mesure je découvre de nouvelles choses, j'ai même pris le temps de personnaliser les panneaux du Back-Office selon le module.

Ce test fut couronné de succès, j'ai appris pas mal de choses sur ce test et on va pouvoir se créer d'autres thèmes que ce qui est déjà proposé.
