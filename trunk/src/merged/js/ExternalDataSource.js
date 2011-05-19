/**
 * Classe représentant la source de données externe.
 * Conception: Lyes Kimouche et Pierre Collignon
 */

/**
 * Constructeur de la source de données externe
 * @param url Adresse du fichier XML externe.
 */
var ExternalDataSource = function(url) {
    // Url du xml
	this.url = url;
	IDataSource.call(this);
    if (typeof ExternalDataSource.initialized == "undefined" ) {
        ExternalDataSource.initialized = true;
        /**
         * Callback appelé lors des étapes du chargement du XML externe
         * @param XHO XMLHttpObject représentant la requête
         * @param callback Callback utilisateur appelé lors du succès de la requête.
         */
        var xmlHandler = function(XHO, callback){
            if (XHO.readyState == 4 && XHO.status == 200){
                callback(XHO.responseXML);
            }
        };

        /**
         * Chargement des données externe à partir d'un fichier xml externe vers un
         *  modèle DataMatrix
         * @param callback Callback utilisateur à appeler lorsque les données sont chargées.
         * @return xmlhttp.responseXML
         */
        ExternalDataSource.prototype.loadData = function(callback){
            var xmlhttp = null;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
                if (xmlhttp.overrideMimeType) {
                    xmlhttp.overrideMimeType('text/xml');
                }
            }
            else if (window.ActiveXObject) {
                try {
                    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch (e) {
                    try {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    catch (e) {}
                }
            }
            if (!xmlhttp) {
                throw "Impossible de créer une requete XML";
            }
            xmlhttp.onreadystatechange = function() {xmlHandler(xmlhttp, callback);};
            xmlhttp.open("GET", this.url, true);
            xmlhttp.send(null);
            return xmlhttp.responseXML;
        };

        /**
         * Renvoie la matrice représentant les données lues.
         */
        ExternalDataSource.prototype.getDataMatrix = function(xmlResponse) {
            var dataMatrix = new DataMatrix();
            
            var yLeg = xmlResponse.getElementsByTagName('ylegend')[0];
            dataMatrix.setYLegend(yLeg.textContent);
        	
            var series =  xmlResponse.getElementsByTagName('series')[0];
            $.each(series.childNodes, function(i, childNode) {
                if (childNode.tagName == 'serie') {
                	if(childNode.attributes.getNamedItem('name') == null || childNode.attributes.getNamedItem('name').value == ""){
                		throw "nom de la serie non defini";
                	}
                    dataMatrix.addColumnLabel(childNode.attributes.getNamedItem('name').value);
                    $.each(childNode.childNodes, function(j, grandChildNode) {                   
                        if (grandChildNode.tagName == 'value') {
                            if (!dataMatrix.hasRowLabel(grandChildNode.attributes.getNamedItem('label').value)) {
                            	if(grandChildNode.attributes.getNamedItem('label') == null || grandChildNode.attributes.getNamedItem('label').value == ""){
                            		throw "nom de la colomne non defini";
                            	}
                                dataMatrix.addRowLabel(grandChildNode.attributes.getNamedItem('label').value);
                            }
                            if(isNaN(parseInt(grandChildNode.textContent))){
                        		throw "valeur non defini";
                        	}
                            dataMatrix.setValue(dataMatrix.getRowLabels()[(j - 1) / 2],
                                                dataMatrix.getColumnLabels()[(i - 1) / 2],
                                                parseInt(grandChildNode.textContent));
                        } 
                    });  
                }
            });
            return dataMatrix;
        }
    }
};

/**
 * Implémente IDataSource
 */
ExternalDataSource.prototype = new IDataSource();
ExternalDataSource.prototype.constructor = ExternalDataSource;