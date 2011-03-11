var IStyle = function() {
	if (typeof IStyle.initialized == "undefined" ) {
		IStyle.initialized = true;

        /**
         * Charge les données depuis la source.
         * @param callback Fonction appelée lors de la fin du chargement des données.
         */
		IStyle.prototype.loadData = function(callback) { };

        /**
         *  Retourne la matrice représentant les données.
         */
		IStyle.prototype.getStyleMatrix = function() { };
	}
};