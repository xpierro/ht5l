var InternalDataSource = function() {

	InternalDataSource.call(this);

	InternalDataSource.prototype.loadXML = function(arg) {
		var nameFile = arg;
		var xmlhttp;
		if (window.XMLHttpRequest) {
			xmlhttp = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.open("GET", nameFile, false);
		xmlhttp.send();
		return xmlhttp.responseXML;
	};

};

// Héritage: chainage des prototypes.
InternalDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
InternalDataSource.prototype.constructor = InternalDataSource;