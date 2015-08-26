# Introduction #

Nous décrivons ici la marche à suivre pour bien développer en équipe, avec svn.


# IDE #
Le développement doit se faire **absolument** à l'aide d'un environnement de développement intégré type eclipse, possèdant une intégration du logiciel de contrôle de version _subversion_. **RAPPEL** Eclipse peut utiliser svn à l'aide du plugin _subclipse_.

# Utilisation de SVN #
Dès le démarrage d'une période de développement, faire une mise à jour du code (eclipse: _update to head_). Avant chaque commit, refaire cette mise à jour. Commenter clairement et **systématiquement** chaque commit, afin de faire savoir à l'équipe les améliorations proposées par le commit. Signaler aussi les problèmes rencontrés, la marche à suivre pour tester si besoin.

# Limites de SVN et solutions proposée #
SVN, contrairement à GIT gère mal la modification concurrente d'un même fichier. Une solution simple (vous pouvez proposer mieux) consiste à créer un repertoire par membre de l'équipe. Chacun développe dans son répertoire, recopie les fichiers des autres ou les lient (../autre/fichier.js). Chaque code validé ensemble et figé quasi définitivement, sera intégré au dossier _merged_.

# Utilisation du tableau des actions #
Le tableau des action, à partir du 30/01/2011, sera remis en route et devra être suivi.

# Javascript #
On utilisera intensivement le paradigme objet en Javascript, se référer aux document sur Dropbox pour plus d'information. Un exemple concret est proposé par PieDiagramme.js.

# Séances de codages #
Afin de motiver (et de forcer à travailler) les membres de l'équipe, des séances collectives de codages seront organisées chaque semaine, en théorie le vendredi après-midi, à la demande d'au moins deux membres du groupe. Elles feront aussi office de réunion, avec compte rendu sur canvas minutes, ou page wiki d'explication à la clef.

# Utilisation des divers moyens de partage #
Rappelons que:
  * Dropbox ne sert qu'à la mise en commun de document
  * SVN ne sert qu'à la mise en commun de codes
  * Le repo de download google code ne sert qu'à la mise en commun soit de versions du programme, soit de modules de tests précis. Ne pas faire 5 versions du même module corrigé (on peut déclarer les downloads deprecated pour éviter leur accumulation malheureuse).