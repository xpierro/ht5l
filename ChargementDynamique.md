# Introduction #

Le chargement dynamique nous permet de n'avoir qu'un seul fichier javascript à intégrer, tout en utilisant une multitudes de ces fichiers en réalité.


# Principes #
Le chargement dynamique, encapsulé dans le fichier DynamicLoader.js (nom pouvant changer, proposez mieux) est une application directe du cours de développement Web, en particulier celui sur la manipulation du DOM.
Nous créons en effet au chargement de la page un élement de type "script" dont nous spécifions les attributs. Puis nous le contaténons à l'header de la page.

# Limites #
Charger de grosses bibliothèques avec ce principe semble poser problème, par exemple une fois sur dix, google-chrome ne parviendra pas à charger JQuery avant le reste des scripts, cela empechant le chargement complet de la librairie.

# Conseils #
N'utilisez QUE ce système lors du développement, afin de ne pas avoir à régler les problèmes liés au chargement dynamique en fin d'itération