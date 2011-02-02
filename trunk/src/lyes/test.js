var loadXml = function(file) {
	var xmlhttp;
	if (window.XMLHttpRequest)
    { // Mozilla, Safari, IE7 ...
		xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    { // Internet Explorer 6
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

	xmlhttp.open("GET", file, false);
	xmlhttp.send();
	return xmlhttp.responseXML;
};

var xml = loadXml("test.xml");



var xml2DataMatrix = function(xml) {
	var dataMatrix = new DataMatrix();
	var x = xml.getElementsByTagName("x");
	for (i = 0; i < x.length; i++) {
		dataMatrix.addXAxisLabel(x[i].childNodes[0].nodeValue);
	}

	var y = xml.getElementsByTagName("y");
	for (i = 0; i < y.length; i++) {
		dataMatrix.addYAxisLabel(y[i].childNodes[0].nodeValue);
	}
	alert(dataMatrix.getYLabels());
	return dataMatrix;
};

var xxx = xml2DataMatrix(xml);