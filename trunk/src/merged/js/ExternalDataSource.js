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
        	
        	try {
	            var dataMatrix = new DataMatrix();
	            
	            if(xmlResponse.getElementsByTagName('ylegend')[0] == null) {
	            	throw 'La légende en Y n\'est pas spécifiée';
	            }
	            var yLeg = xmlResponse.getElementsByTagName('ylegend')[0];
	            dataMatrix.setYLegend(yLeg.textContent);
	        	
	            var series =  xmlResponse.getElementsByTagName('series')[0];
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
	                        } else if (grandChildNode.tagName != undefined){
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

/**
 * Implémente IDataSource
 */
ExternalDataSource.prototype = new IDataSource();
ExternalDataSource.prototype.constructor = ExternalDataSource;