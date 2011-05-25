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
            try {
                var dataMatrix = new DataMatrix();

                if(this.xml.getElementsByTagName('ylegend')[0] == null) {
                    throw 'La légende en Y n\'est pas spécifiée';
                }
                var yLeg = this.xml.getElementsByTagName('ylegend')[0];
                dataMatrix.setYLegend(yLeg.textContent);

                var series = this.xml.getElementsByTagName('series')[0];
                if (series.childNodes.length == 1) {
                    throw "Le nombre de séries ne doit pas être nul";
                }
                $.each(series.childNodes, function(i, childNode) {
                    if (childNode.tagName == 'serie') {
                        if(childNode.attributes.getNamedItem('name') == null || childNode.attributes.getNamedItem('name').value == ""){
                            throw 'Le nom de la série n\'est pas spécifié';
                        }
                        dataMatrix.addColumnLabel(childNode.attributes.getNamedItem('name').value);
                        if (childNode.childNodes.length == 1) {
                            throw "Le nombre de valeurs ne doit pas être nul";
                        }
                        $.each(childNode.childNodes, function(j, grandChildNode) {
                            if (grandChildNode.tagName == 'value') {
                                if(grandChildNode.attributes.getNamedItem('label') == null || grandChildNode.attributes.getNamedItem('label').value == ""){
                                    throw 'Le label est mal formé';
                                }
                                if (!dataMatrix.hasRowLabel(grandChildNode.attributes.getNamedItem('label').value)) {
                                    dataMatrix.addRowLabel(grandChildNode.attributes.getNamedItem('label').value);
                                }
                                if(grandChildNode.textContent == "" || isNaN(parseInt(grandChildNode.textContent))){
                                    throw 'La valeur est mal formatée';
                                }
                                dataMatrix.setValue(dataMatrix.getRowLabels()[(j - 1) / 2],
                                                    dataMatrix.getColumnLabels()[(i - 1) / 2],
                                                    parseInt(grandChildNode.textContent));
                            }	else if (grandChildNode.tagName != undefined){
                                throw "La série est mal formée";
                            }
                        });
                    } else if (childNode.tagName != undefined){
                        throw "La série est mal formée";
                    }
                });
                return dataMatrix;
            } catch(e) {
                error = e;
            }
        }
    }
};
	
// Implémente IDataSource
InternalDataSource.prototype = new IDataSource();
InternalDataSource.prototype.constructor = InternalDataSource;