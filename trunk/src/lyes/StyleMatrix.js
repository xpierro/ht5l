var StyleMatrix = function() {
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
    if (typeof StyleMatrix.initialized == "undefined" ) {
    	StyleMatrix.initialized = true;

    	/**
    	 * Retourne le tableau de couleurs.
    	 */
    	StyleMatrix.prototype.getColors = function() {
    		return this.colors;
    	};

    	/**
    	 * Ajoute une couleur.
    	 */
    	StyleMatrix.prototype.addColor = function(color) {
    		this.colors.push(color);
    	};
    	
    	/**
    	 * Retourne le x de la legend.
    	 */
    	StyleMatrix.prototype.getLegendX = function() {
    		return this.xLegend;
    	};
    	
    	/**
    	 * Retourne le y de la legend.
    	 */
    	StyleMatrix.prototype.getLegendY = function() {
    		return this.yLegend;
    	};
    	
    	/**
    	 * Retourne le w de la legend.
    	 */
    	StyleMatrix.prototype.getLegendW = function() {
    		return this.wLegend;
    	};
    	
    	/**
    	 * Retourne le h de la legend.
    	 */
    	StyleMatrix.prototype.getLegendH = function() {
    		return this.hLegend;
    	};

    	StyleMatrix.prototype.setLegendX = function(xlegend) {
    		this.xLegend = xlegend;
    	};
    	
    	StyleMatrix.prototype.setLegendY = function(ylegend) {
    		this.yLegend = ylegend;
    	};
    	
    	StyleMatrix.prototype.setLegendW = function(wlegend) {
    		this.wLegend = wlegend;
    	};
    	
    	StyleMatrix.prototype.setLegendH = function(hlegend) {
    		this.hLegend = hlegend;
    	};
    	
    	/*retourne le rectangle de la legende*/
    	StyleMatrix.prototype.getLegendRectangle = function() {
    		return {x: this.xLegend, y: this.yLegend, width: this.wLegend, height: this.hLegend};
    	};
    	
    }
};