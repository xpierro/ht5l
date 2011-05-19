var json = null;
var dataMatrix = new DataMatrix();

var jsonCallback = function(text, usercallback) {
	json = eval('(' + text + ')');

	$.each(json.series, function(i, childNode) {
		if(!dataMatrix.hasRowLabel(childNode.name)){
			if(childNode.name == '' || childNode.name == null){
				throw "nom de la colomne non defini";
			}
			dataMatrix.addRowLabel(childNode.name);
		}
		if(!dataMatrix.hasColumnLabel(childNode.label)){
			if(childNode.label == '' || childNode.label == null){
				throw "nom de la serie non defini";
			}
			dataMatrix.addColumnLabel(childNode.label);
		}
		if(isNaN(parseInt(childNode.value))){
    		throw "valeur non defini";
    	}
        dataMatrix.setValue(childNode.name, childNode.label, parseInt(childNode.value));
	});
    usercallback();
};

var cds = new ConnectorDataSource(
		function(callback, usercallback) {
			this.url = "test.json";
			var xmlHandler = function(XHO, callback){
		        if (XHO.readyState == 4 && XHO.status == 200){
					callback(XHO.responseText, usercallback);
				}
			};

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
			xmlhttp.onreadystatechange = function() {xmlHandler(xmlhttp, callback, usercallback);};
	        xmlhttp.open("GET", this.url, true);
			xmlhttp.send(null);
		},
		function() {
			return dataMatrix;
		}
);


var userCallback = function() {
    var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
    var diag2 = new Histo3DDiagram(document.getElementsByTagName('canvas')[1], 'row');
    var diag3 = new LineDiagram(document.getElementsByTagName('canvas')[2], 'row');
    var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'column');

    var matrix = cds.getDataMatrix();

    diag1.setData(matrix);
    diag2.setData(matrix);
    diag3.setData(matrix);
    diag4.setData(matrix);
};

cds.loadData(jsonCallback, userCallback);