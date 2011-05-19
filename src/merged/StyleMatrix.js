/**
 * Classe représentant la matrice de style.
 * Conception: Lyes Kimouche
 */

var StyleMatrix = function() {
    // Attributs privés
	this.colors = new Array();
	this.xLegend = null;
	this.yLegend = null;
	this.wLegend = null;
	this.hLegend = null;
	this.yLabelLegend = null;
	
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
    		 try {
                 if (color == null) {
                     throw "color null";
                 }
                 this.colors.push(color);
             } catch(wronganswer) {
                 if (wronganswer == "color null") {
                     window_alert("Erreur de couleur", "La couleur ne doit pas être nulle");
                 }
             }
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

        /**
         * Donne l'abscisse du coin supérieur droit de la légende
         * @param xlegend
         */
    	StyleMatrix.prototype.setLegendX = function(xlegend) {
    		try {
                if (xlegend == null) {
                    throw "xLegend null";
                }
                this.xLegend = xlegend;
            } catch(wronganswer) {
                if (wronganswer == "xLegend null") {
                    window_alert("Erreur de légende", "La légende en x doit être déclarée et non nulle");
                }
            }
    	};

        /**
         * Donne l'ordonnée du coin supérieur droit de la légende
         * @param ylegend
         */
    	StyleMatrix.prototype.setLegendY = function(ylegend) {
    		try {
                if (ylegend == null) {
                    throw "yLegend null";
                }
                this.yLegend = ylegend;
            } catch(wronganswer) {
                if (wronganswer == "yLegend null") {
                    window_alert("Erreur de légende", "La légende en y doit être déclarée et non nulle");
                }
            }
    	};

        /**
         * Donne la largeur du cadre de la légende
         * @param wlegend
         */
    	StyleMatrix.prototype.setLegendW = function(wlegend) {
    		try {
                if (wlegend == null) {
                    throw "wLegend null";
                }
                this.wLegend = wlegend;
            } catch(wronganswer) {
                if (wronganswer == "wLegend null") {
                    window_alert("Erreur de légende", "La légende en w doit être déclarée et non nulle");
                }
            }
    	};

        /**
         * Donne la hauteur du cadre de la légende
         * @param hlegend
         */
    	StyleMatrix.prototype.setLegendH = function(hlegend) {
    		try {
                if (hlegend == null) {
                    throw "hLegend null";
                }
                this.hLegend = hlegend;
            } catch(wronganswer) {
                if (wronganswer == "hLegend null") {
                    window_alert("Erreur de légende", "La légende en h doit être déclarée et non nulle");
                }
            }
    	};
    	
    	/**
         * Retourne le rectangle de la legende
         */
    	StyleMatrix.prototype.getLegendRectangle = function() {
    		return {x: this.xLegend, y: this.yLegend, width: this.wLegend, height: this.hLegend};
    	};
    	
    }
};