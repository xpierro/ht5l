//var ids = new InternalDataSource('testpre');
//var eds = new ExternalDataSource('test.xml');

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

var iss = new InternalStyleSource('testpre');
//var ess = new ExternalStyleSource('styleSource.xml');
//ids.loadData(function() {
  //  var diag5 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');
    //diag5.setData(ids.getDataMatrix());
    //iss.loadData(function() {
    	//diag5.setStyle(iss.getStyleMatrix());
    //});
    //ess.loadData(function(xml){
    	//diag5.setStyle(ess.getStyleMatrix(xml));
    //});
//});

/*eds.loadData(function(xml) {
    var diag5 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');
    diag5.setData(eds.getDataMatrix(xml));
    iss.loadData(function() {
    	diag5.setStyle(iss.getStyleMatrix());
    });
    ess.loadData(function(xml){
    	diag5.setStyle(ess.getStyleMatrix(xml));
    });
});*/

var diag5 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');

var userCallback = function() {
    diag5.setData(cds.getDataMatrix());
};

cds.loadData(jsonCallback, userCallback);

iss.loadData(function() {
	diag5.setStyle(iss.getStyleMatrix());
});
    /*ess.loadData(function(xml){
    	diag5.setStyle(ess.getStyleMatrix(xml));
    });*/