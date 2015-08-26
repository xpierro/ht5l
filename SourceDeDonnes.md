# Introduction #
Nous décrivons ici la façon dont sont implémentées les différentes sources de données.

# IDataSource : Une interface commune #
L'interface IDataSource possède deux méthodes à réimplémenter dans chaque classe :
  * loadData(callback: function(o: Object)) qui charge les données et
appelle la méthode callback en lui envoyant un objet résultat.
  * getDataMatrix() qui retourne la matrice des données lues. Il est conseillé de déclancher cette méthode dans le callback de loadData.

# InternalDataSource : La source interne #
La source de données interne lit un flux xml contenu dans une balise <pre> dont la visibilité est "hidden". La vitesse de traitement ne nécessite pas l'utilisation du callback.<br>
<br>
= ExternalDataSource : La source externe =<br>
= Le système de connecteurs =