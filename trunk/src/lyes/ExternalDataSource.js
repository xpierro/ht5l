var ExternalDataSource = function() {
	
	ExternalDataSource.call(this);
	
	ExternalDataSource.prototype.loadXML = function(arg){

		var url = arg;
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
			errStr = "Cannot create an XMLHTTP instance";
			return null;
		}
		xmlhttp.onreadystatechange = waitForResponse;
		xmlhttp.open("GET", url, true);
		xmlhttp.send(null);
		return xmlhttp.responseXML;
	};
};

// Héritage: chainage des prototypes.
ExternalDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
ExternalDataSource.prototype.constructor = ExternalDataSource;