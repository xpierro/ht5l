var ConnectorDataSource = function(url) {
	this.url = url;
	IDataSource.call(this);
	
	/**
	 * Chargement des données externe à partir d'un fichier xml externe vers un
	 * modèle DataMatrix
	 * @param url
	 */
	ExternalDataSource.prototype.loadData = function(callback){
        
		/**
         * récuperer les données de la source de données.
         */
		
	};

    /**
	 * Renvoie la matrice représentant les données lues.
	 */
        ExternalDataSource.prototype.getDataMatrix = function(xmlResponse) {
            var dataMatrix = new DataMatrix();
        	
            /**
             * parcourir les données et remplir la matrice.
             */
            
            return dataMatrix;
        }
};

// Héritage: chainage des prototypes.
ConnectorDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
ConnectorDataSource.prototype.constructor = ConnectorDataSource;
