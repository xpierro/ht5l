var IDiagramme = function(canvas) {
	var pencil = canvas;
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof IDiagramme.initialized == "undefined" ) {
        IDiagramme.initialized = true;
        
		/**
		 *	Définit la largeur de la fenêtre du diagramme.
		 *	@param x Largeur de la fenêtre
		 */
		IDiagramme.prototype.setWindowWidth = function(w){
			
		};
	
		/**
		 *	Retourne la largeur de la fenêtre du diagramme.
		 */
		IDiagramme.prototype.getWindowWidth = function(){};
	
		/**
		 *	Définit la hauteur de la fenêtre du diagramme
		 *	@param y Hauteur de la fenêtre.
		 */
		IDiagramme.prototype.setWindowHeight = function(h){};
	
		/**
		 *	Retourne la hauteur de la fenêtre du diagramme
		 */
		IDiagramme.prototype.getWindowHeight = function(){};
		
		/**
		 * Charge un fichier de style pour le diagramme.
		 * @param css Url d'un fichier css.
		 */
		IDiagramme.prototype.setStyle = function(css) {};
	
		/**
		 * Charge les données du diagramme.
		 * @param dataMatrix Matrice des données
		 */
		IDiagramme.prototype.setData = function(dataMatrix) {};
		
		/**
		 *	Dessine la légende du diagramme
		 */
		IDiagramme.prototype.drawLegend = function(){};
		
		/**
		 *	Dessine les abscisses et ordonnées du diagramme
		 */
		IDiagramme.prototype.drawAxis = function(){};
		
		/**
		 *	Dessine le diagramme. 
		 */
		IDiagramme.prototype.drawDiagram = function(){};
    }
};
