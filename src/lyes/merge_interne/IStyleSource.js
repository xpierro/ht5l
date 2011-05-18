/**
 * Interface décrivant les méthodes à implémenter par les sources de style.
 * Conception: Lyes Kimouche
 */
var IStyleSource = function() {
	if (typeof IStyleSource.initialized == "undefined" ) {
		IStyleSource.initialized = true;

        /**
         * Charge les données depuis la source.
         * @param callback Fonction appelée lors de la fin du chargement des données.
         */
		IStyleSource.prototype.loadData = function(callback) { };

        /**
         *  Retourne la matrice représentant les données.
         */
		IStyleSource.prototype.getStyleMatrix = function() { };
	}
};