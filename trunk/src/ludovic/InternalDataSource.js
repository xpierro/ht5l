/**
 * Classe représentant la source de donnée interne à la page.
 * Conception: Pierre Collignon
 */

/**
 * Constructeur de la source de donnée interne
 * @param preId Identifiant de la balise pre contenant le flux xml.
 */

var InternalDataSource = function(preId) {
	IDataSource.call(this);
    this.pre = preId;

    this.xml = null;
    if (typeof InternalDataSource.initialized == "undefined" ) {
        InternalDataSource.initialized = true;
        /**
         * Charge à partir d'une balise <pre> d'id this.pre un flux xml.
         * @param callback Fonction appelée à la fin de la transformation.
         */
        InternalDataSource.prototype.loadData = function(callback) {
            if (window.DOMParser) {
                var parser = new DOMParser();
                // Utiliser /g remplace TOUTES les occurences.
                this.xml = parser.parseFromString(
                		document.getElementById(this.pre).innerHTML.trim().replace(/\n/g, ''),"text/xml");
                callback(this.xml);
            } else {
                throw "Impossible de transformer la chaine fournie";
            }
        };

        /**
         * Renvoie la matrice représentant les données lues.
         */
        InternalDataSource.prototype.getDataMatrix = function() {
            var dataMatrix = new DataMatrix();
            var yLeg = this.xml.getElementsByTagName('ylegend')[0];
            dataMatrix.setYLegend(yLeg.textContent);
        	var series = this.xml.getElementsByTagName('series')[0];
            $.each(series.childNodes, function(i, childNode) {
                if (childNode.tagName == 'serie') {
                    dataMatrix.addColumnLabel(childNode.attributes[0].value);
                    $.each(childNode.childNodes, function(j, grandChildNode) {                   
                        if (grandChildNode.tagName == 'value') {
                            dataMatrix.addRowLabel(grandChildNode.attributes[0].value);
                            dataMatrix.setValue(dataMatrix.getRowLabels()[(j-1)/2], dataMatrix.getColumnLabels()[(i-1)/2],
                                    grandChildNode.textContent);
                        } 
                    });  
                }
            });
            return dataMatrix;
        }
    }
};

// Héritage: chainage des prototypes.
InternalDataSource.prototype = new IDataSource(); // TODO: on répète deux fois, trouver mieux
InternalDataSource.prototype.constructor = InternalDataSource;