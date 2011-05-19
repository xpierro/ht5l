var ExternalStyleSource = function(url) {
	this.url = url;
	IStyleSource.call(this);

	var xmlHandler = function(XHO, callback){
        if (XHO.readyState == 4 && XHO.status == 200){
			callback(XHO.responseXML);
		}
	};
	
	/**
	 * Chargement des données externe à partir d'un fichier xml externe vers un
	 *  modèle StyleMatrix
	 * @param url
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
		return xmlhttp.responseXML;//reponse du serveur transmettant du xml
	};

    /**
         * Renvoie la matrice représentant les données lues.
         */
	ExternalStyleSource.prototype.getStyleMatrix = function(xmlResponse) {
            var styleMat = new StyleMatrix();
            
        	var colors = xmlResponse.getElementsByTagName('colors')[0];
        	 $.each(colors.childNodes, function(index, childNode) {
             	if (childNode.tagName == 'color') {
             		styleMat.addColor(childNode.textContent);
             	}
             });

        	 var legend =  xmlResponse.getElementsByTagName('legend')[0];
             $.each(legend.childNodes, function(index, childNode) {
             	if (childNode.tagName == 'x') {
             		styleMat.setLegendX(parseInt(childNode.textContent));
                 } else if (childNode.tagName == 'y') {
                 	styleMat.setLegendY(childNode.textContent);
                 } else if (childNode.tagName == 'w'){
                 	styleMat.setLegendW(childNode.textContent);
                 } else if (childNode.tagName == 'h'){
                 	styleMat.setLegendH(childNode.textContent);
                 }
             });
            return styleMat;
        }
};

// Héritage: chainage des prototypes.
ExternalStyleSource.prototype = new IStyleSource(); // TODO: on répète deux
													// fois, trouver mieux
ExternalStyleSource.prototype.constructor = ExternalStyleSource;
