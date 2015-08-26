# Introduction #

Cette page wiki décrit la première vision, en attente d'un DAL précis, de l'architecture statique et du fonctionnement dynamique de la librairie.


# Le modèle #
## Entrées/Sorties ##
Dans un premier lieu, les données seront stockée à l'aide d'une source interne. Radu propose pour ce faire d'utiliser la balise <pre> qui englobe un texte non interprété par le navigateur, permettant à javascript d'en parser le contenu.<br>
<br>
Un fois les données xml parsée, le modèle doit produit un objet de type DataMatrix.<br>
<br>
== Le type DataMatrix ==<br>
Le type DataMatrix (le nom pourra changer, proposez mieux) représente un tableau à double entrée indéxé par des _label_. L'accès aux labels se fait directement, on peut donc parcourir la matrice sans avoir recourt à des valeurs numériques. *ATTENTION* les xLabels sont les labels de colonne et les yLabels sont les labels de lignes (x et y représentant la position des labels dans le tableau, par leur sens).<br>
<br>
= La vue =<br>
== L'interface des diagrammes ==<br>
Chaque diagramme devra implémenter la classe abstraite IDiagramme. Pour<br>
l'instant, aucun contrôle de la bonne implémentation de la classe abstraite n'est fait, mais à l'avenir, subclasser IDiagramme vous *OBLIGERA* à respecter les contrats.<br>
Cette interface fournit un accès à un objet _data_ contenant les données récupérées par le modèle, et un objet _canvas_ contenant le pinceau html5.<br>
Elle permet pour l'instant de dessiner un axes abscisse/ordonnée, bien que l'axe des abscisse soit à redéfinir plus bas. A savoir que l'axe des ordonnées ainsi mis dans la surclasse brise le paradigme objet, puisque deux sous-classes connues devront surcharger la méthode drawYAxis pour qu'elle ne fasse rien.<br>
<br>
== Astuces pour le dessin ==<br>
N'oubliez pas de toujours *FERMER* le path dessiné, afin de ne pas encadré dans un seul chemin l'ensemble du diagramme (cf histo par Ludovic).<br>
<br>
== Dimensions des données ==<br>
Ne pas oublier que tous les diagrammes ne représentent pas les données de la même façon: le Pie ne peut présenter que 2 dimensions (valeurs et lignes, ou valeurs et colonnes) tandis que l'histogramme montre les 3 (valeurs, lignes et colonnes) grace à l'ajout de couleurs légendées (l'axe des y représente les valeur, l'axe des x les lignes et les couleurs les colonnes de la matrice).<br>
<br>
= Le contrôleur =<br>
Le contrôleur n'est pour l'instant pas fixé.