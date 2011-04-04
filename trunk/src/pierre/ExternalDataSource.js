/**
 * Décrit l'objet servant à récupérer les données à l'exterieur du domaine courant.
 * Conception: Lyes Kimouche
 */
var ExternalDataSource = function(url) {
	this.url = url;
	IDataSource.call(this);

    // Fonction appelée au chargement du XML
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
     * @param xmlResponse Référence vers le document XML à parser
     */
    ExternalDataSource.prototype.getDataMatrix = function(xmlResponse) {
        var dataMatrix = new DataMatrix();

        var series =  xmlResponse.getElementsByTagName('series')[0];
        $.each(series.childNodes, function(i, childNode) {
            if (childNode.tagName == 'serie') {
                dataMatrix.addColumnLabel(childNode.attributes[0].value);
                $.each(childNode.childNodes, function(j, grandChildNode) {
                    if (grandChildNode.tagName == 'value') {
                        dataMatrix.addRowLabel(grandChildNode.attributes[0].value);
                        dataMatrix.setValue(dataMatrix.getRowLabels()[(j - 1) / 2],
                                            dataMatrix.getColumnLabels()[(i - 1) / 2],
                                            parseInt(grandChildNode.textContent));
                    }
                });
            }
        });

        return dataMatrix;
    }
};

ExternalDataSource.prototype = new IDataSource();
ExternalDataSource.prototype.constructor = ExternalDataSource;