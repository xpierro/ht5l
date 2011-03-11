var styleMatrix = function() {
    // Attributs privés
	this.colors = new Array();
	this.xLegend;
	this.yLegend;
	this.wLegend;
	this.hLegend;
	
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof styleMatrix.initialized == "undefined" ) {
    	styleMatrix.initialized = true;

    	/**
    	 * Retourne le tableau de couleurs.
    	 */
    	styleMatrix.prototype.getColors = function() {
    		return this.colors;
    	};

    	/**
    	 * Ajoute une couleur.
    	 */
    	styleMatrix.prototype.addColor = function(color) {
    		this.colors.push(color);
    	};
    	
    	/**
    	 * Retourne le x de la legend.
    	 */
    	styleMatrix.prototype.getXLegend = function() {
    		return this.xLegend;
    	};
    	
    	/**
    	 * Retourne le y de la legend.
    	 */
    	styleMatrix.prototype.getYLegend = function() {
    		return this.yLegend;
    	};
    	
    	/**
    	 * Retourne le w de la legend.
    	 */
    	styleMatrix.prototype.getWLegend = function() {
    		return this.wLegend;
    	};
    	
    	/**
    	 * Retourne le h de la legend.
    	 */
    	styleMatrix.prototype.getHLegend = function() {
    		return this.hLegend;
    	};

    	styleMatrix.prototype.setXLegend = function(xlegend) {
    		this.xLegend = xlegend;
    	};
    	
    	styleMatrix.prototype.setYLegend = function(ylegend) {
    		this.yLegend = ylegend;
    	};
    	
    	styleMatrix.prototype.setWLegend = function(wlegend) {
    		this.wLegend = wlegend;
    	};
    	
    	styleMatrix.prototype.setHLegend = function(hlegend) {
    		this.hLegend = hlegend;
    	};
    }
};