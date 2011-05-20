/**
 * Classe représentant une source de style externe.
 * Conception: Lyes Kimouche
 */

/**
 * Constructeur de style externe.
 * @param url Adresse du XML de style externe
 */
var ExternalStyleSource = function(url) {
    //Adresse du XML
	this.url = url;
	IStyleSource.call(this);

    if (typeof ExternalStyleSource.initialized == "undefined" ) {
        ExternalStyleSource.initialized = true;

        /**
         * Callback appelé lors des étapes du chargement du XML
         * @param XHO XMLHttpObject représentant la requête.
         * @param callback Callback utilisateur appelé en cas de succès.
         */
        var xmlHandler = function(XHO, callback){
            if (XHO.readyState == 4 && XHO.status == 200){
                callback(XHO.responseXML);
            }
        };

        /**
         * Chargement des données externe à partir d'un fichier xml externe vers un
         *  modèle StyleMatrix
         * @param callback Callback utilisateur appelé lors du chargement des styles.
         * @return xmlhttp.responseXML
         */
        ExternalStyleSource.prototype.loadData = function(callback){
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
                return null;
            }
            xmlhttp.onreadystatechange = function() {xmlHandler(xmlhttp, callback);};
            xmlhttp.open("GET", this.url, true);
            xmlhttp.send(null);
            return xmlhttp.responseXML;
        };

        /**
         * Renvoie la matrice représentant les données lues.
         * @param xmlResponse Fichier xml d'ou tirer une matrice
         * @return Une matrice représentant les données de style
         */
	    ExternalStyleSource.prototype.getStyleMatrix = function(xmlResponse) {
	    	try{
		        var styleMat = new StyleMatrix();
		        
		    	var colors = xmlResponse.getElementsByTagName('colors')[0];
		    	if(colors.childNodes.length == 1){
	        		throw 'Le nombre de couleurs ne doit pas être nul';
	        	}
		    	 $.each(colors.childNodes, function(index, childNode) {
		         	if (childNode.tagName == 'color') {
		         		if(childNode.textContent == '' || isNaN(parseInt(childNode.textContent)) == false){
	            			throw 'La couleur n\'est pas spécifiée';
	            		}
		         		styleMat.addColor(childNode.textContent);
		         	} else if (childNode.tagName != undefined){
	                	throw 'La balise de couleurs est mal formée';
	                }
		         });
		
		    	 var legend =  xmlResponse.getElementsByTagName('legend')[0];
		    	 if(legend.childNodes.length != 5){
		        		throw 'La légende est mal formée';
		    	 }
		         $.each(legend.childNodes, function(index, childNode) {
		         	if (childNode.tagName == 'x') {
		         		if(childNode.textContent == '' || isNaN(parseInt(childNode.textContent))){
                         	throw 'La valeur X de la légende est mal formatée';
                     	}
		         		styleMat.setLegendX(parseInt(childNode.textContent));
		             } else if (childNode.tagName == 'y') {
		            	 if(childNode.textContent == '' || isNaN(parseInt(childNode.textContent))){
                         	throw 'La valeur Y de la légende est mal formatée';
                     	 }
		             	styleMat.setLegendY(childNode.textContent);
		             } else if (childNode.tagName == 'w'){
		            	 if(childNode.textContent == '' || isNaN(parseInt(childNode.textContent))){
	                         	throw 'La valeur W de la légende est mal formatée';
	                     	}
		             	styleMat.setLegendW(childNode.textContent);
		             } else if (childNode.tagName == 'h'){
		            	 if(childNode.textContent == '' || isNaN(parseInt(childNode.textContent))){
	                         	throw 'La valeur H de la légende est mal formatée';
	                     	}
		             	styleMat.setLegendH(childNode.textContent);
		             } else if (childNode.tagName != undefined){
		                	throw 'La légende est mal formée';
		                }
		         });
		        return styleMat;
	    	}catch(e){
	    		window_alert('Feuille de style non conforme', e);
	    	}
        }
    }
};

// Implémente IStyleSource
ExternalStyleSource.prototype = new IStyleSource();
ExternalStyleSource.prototype.constructor = ExternalStyleSource;
