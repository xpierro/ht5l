/**
 * Source de style interne
 * Conception: Lyes Kimouche
 */
var InternalStyleSource = function(preId) {
    IStyleSource.call(this);
    this.pre = preId;

    this.xml = null;
    if (typeof InternalStyleSource.initialized == "undefined") {
        InternalStyleSource.initialized = true;
        /**
         * Charge à partir d'une balise <pre> d'id this.pre un flux xml.
         * @param callback Fonction appelée à la fin de la transformation.
         */
        InternalStyleSource.prototype.loadData = function(callback) {
            if (window.DOMParser) {
                var parser = new DOMParser();
                // Utiliser /g remplace TOUTES les occurences.
                this.xml = parser.parseFromString(
                        document.getElementById(this.pre).innerHTML.trim().replace(/\n/g, ''),
                        "text/xml"
                        );
                callback(this.xml);
            } else {
                throw "Impossible de transformer la chaine fournie";
            }
        };

        /**
         * Renvoie la matrice représentant les données lues.
         */
        InternalStyleSource.prototype.getStyleMatrix = function() {
            try {
                var styleMat = new StyleMatrix();

                var colors = this.xml.getElementsByTagName('colors')[0];
                if (colors.childNodes.length == 1) {
                    throw 'Le nombre de couleurs ne doit pas être nul';
                }
                $.each(colors.childNodes, function(index, childNode) {
                    if (childNode.tagName == 'color') {
                        if (!childNode.textContent == '' && !isNaN(parseInt(childNode.textContent))) {
                            throw 'La couleur n\'est pas spécifiée';
                        }
                        styleMat.addColor(childNode.textContent);
                    } else if (childNode.tagName != undefined) {
                        throw 'La balise de couleurs est mal formée';
                    }
                });

                var legend = this.xml.getElementsByTagName('legende')[0];
                if (legend.childNodes.length > 9) {
                    throw 'La légende est mal formée';
                }
                $.each(legend.childNodes, function(index, childNode) {
                    if (childNode.tagName == 'x') {
                        if (childNode.textContent == '' || isNaN(parseInt(childNode.textContent))) {
                            throw 'La valeur X de la légende est mal formatée';
                        }
                        styleMat.setLegendX(parseInt(childNode.textContent));
                    } else if (childNode.tagName == 'y') {
                        if (childNode.textContent == '' || isNaN(parseInt(childNode.textContent))) {
                            throw 'La valeur Y de la légende est mal formatée';
                        }
                        styleMat.setLegendY(childNode.textContent);
                    } else if (childNode.tagName == 'w') {
                        if (childNode.textContent == '' || isNaN(parseInt(childNode.textContent))) {
                            throw 'La valeur W de la légende est mal formatée';
                        }
                        styleMat.setLegendW(childNode.textContent);
                    } else if (childNode.tagName == 'h') {
                        if (childNode.textContent == '' || isNaN(parseInt(childNode.textContent))) {
                            throw 'La valeur H de la légende est mal formatée';
                        }
                        styleMat.setLegendH(childNode.textContent);
                    } else if (childNode.tagName != undefined) {
                        throw 'La légende est mal formée';
                    }
                });

                return styleMat;
            } catch(e) {
                error = e;
            }
        }
    }
};

// Implémente IStyleSource
InternalStyleSource.prototype = new IStyleSource();
InternalStyleSource.prototype.constructor = InternalStyleSource;