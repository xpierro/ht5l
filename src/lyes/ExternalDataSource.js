var ExternalDataSource = function(url) {
	this.url = url;
	IDataSource.call(this);

	var xmlHandler = function(XHO, callback){
        if (XHO.readyState == 4 && XHO.status == 200){
			callback(XHO.responseXML);
		}
	};
	
	/**
	 * Chargement des données externe à partir d'un fichier xml externe vers un
	 *  modèle DataMatrix
	 * @param url
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
			return null;
		}
		xmlhttp.onreadystatechange = function() {xmlHandler(xmlhttp, callback);};
        xmlhttp.open("GET", this.url, true);
		xmlhttp.send(null);
		return xmlhttp.responseXML;//reponse du serveur transmettant du xml
	};

    /**
         * Renvoie la matrice représentant les données lues.
         */
        ExternalDataSource.prototype.getDataMatrix = function(xmlResponse) {
            var dataMatrix = new DataMatrix();
        	var labels = xmlResponse.getElementsByTagName('labels')[0];
            $.each(labels.childNodes, function(index, childNode) {
                if (childNode.tagName == 'column') {
                    dataMatrix.addColumnLabel(childNode.textContent);
                } else if (childNode.tagName == 'row') {
                    dataMatrix.addRowLabel(childNode.textContent);
                }
            });

            var rows = xmlResponse.getElementsByTagName('rows')[0];
            $.each(rows.children, function(i, childNode) {
                $.each(childNode.children, function(j, grandChildNode) {
                    dataMatrix.setValue(dataMatrix.getRowLabels()[i], dataMatrix.getColumnLabels()[j],
                                        grandChildNode.textContent);
                    alert(grandChildNode.textContent);
                });
            });
            return dataMatrix;
        }
};

// Héritage: chainage des prototypes.
ExternalDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
ExternalDataSource.prototype.constructor = ExternalDataSource;
