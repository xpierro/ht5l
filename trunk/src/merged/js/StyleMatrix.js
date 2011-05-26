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
    if (typeof StyleMatrix.initialized == "undefined") {
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
            if (color) {
                this.colors.push(color);
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
            if (xlegend) {
                this.xLegend = xlegend;
            }
        };

        /**
         * Donne l'ordonnée du coin supérieur droit de la légende
         * @param ylegend
         */
        StyleMatrix.prototype.setLegendY = function(ylegend) {
            if (ylegend) {
                this.yLegend = ylegend;
            }
        };

        /**
         * Donne la largeur du cadre de la légende
         * @param wlegend
         */
        StyleMatrix.prototype.setLegendW = function(wlegend) {
            if (wlegend) {
                this.wLegend = wlegend;
            }
        };

        /**
         * Donne la hauteur du cadre de la légende
         * @param hlegend
         */
        StyleMatrix.prototype.setLegendH = function(hlegend) {
            if (hlegend) {
                this.hLegend = hlegend;
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