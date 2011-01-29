var IDiagramme = function() {
	/**
	 *	Définit la largeur de la fenêtre du diagramme.
	 *	@param x Largeur de la fenêtre
	 */
	this.setWindowWidth = function(x){};
	
	/**
	 *	Retourne la largeur de la fenêtre du diagramme.
	 */
	this.getWindowWidth = function(){};
	
	/**
	 *	Définit la hauteur de la fenêtre du diagramme
	 *	@param y Hauteur de la fenêtre.
	 */
	this.setWindowHeight = function(y){};
	
	/**
	 *	Retourne la hauteur de la fenêtre du diagramme
	 */
	this.getWindowHeight = function(){};
	
	/**
	 * Charge un fichier de style pour le diagramme.
	 * @param css Url d'un fichier css.
	 */
	this.setStyle = function(css) {};
	
	/**
	 * Charge les données du diagramme.
	 * @param dataMatrix Matrice des données
	 */
	this.setData = function(dataMatrix) {};
	
	/**
	 *	Dessine la légende du diagramme
	 */
	this.drawLegend = function(){};
	
	/**
	 *	Dessine les abscisses et ordonnées du diagramme
	 */
	this.drawAxis = function(){};
	
	/**
	 *	Dessine le diagramme. 
	 */
	this.drawDiagram = function(){};
};
