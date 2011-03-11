var IStyleSource = function(preId) {
	IStyle.call(this);
    this.pre = preId;

    this.xml = null;
    if (typeof IStyleSource.initialized == "undefined" ) {
    	IStyleSource.initialized = true;
        /**
         * Charge à partir d'une balise <pre> d'id this.pre un flux xml.
         * @param callback Fonction appelée à la fin de la transformation.
         */
    	IStyleSource.prototype.loadData = function(callback) {
            if (window.DOMParser) {
                var parser = new DOMParser();
                // Utiliser /g remplace TOUTES les occurences.
                this.xml = parser.parseFromString(
                            document.getElementById(this.pre).innerHTML.trim().replace(/\n/g, '').replace(/ /g, ''),
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
        IStyleSource.prototype.getStyleMatrix = function() {
            var styleMatrix = new styleMatrix();

        	var colors = this.xml.getElementsByTagName('colors')[0];
            $.each(colors.childNodes, function(index, childNode) {
                styleMatrix.addColor(childNode.textContent);
            });

            var legend = this.xml.getElementsByTagName('legend')[0];
            $.each(legend.childNodes, function(index, childNode) {
            	if (childNode.tagName == 'x') {
            		styleMatrix.setXLegend(childNode.textContent);
                } else if (childNode.tagName == 'y') {
                	styleMatrix.setYLegend(childNode.textContent);
                } else if (childNode.tagName == 'w'){
                	styleMatrix.setWLegend(childNode.textContent);
                } else if (childNode.tagName == 'h'){
                	styleMatrix.setHLegend(childNode.textContent);
                }
            });
            
            return styleMatrix;
        }
    }
};

// Héritage: chainage des prototypes.
IStyleSource.prototype = new IStyle(); // TODO: on répète deux fois, trouver mieux
IStyleSource.prototype.constructor = IStyleSource;