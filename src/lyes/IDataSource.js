
var IDataSource = function() {
	if (typeof IDiagramme.initialized == "undefined" ) {
        IDiagramme.initialized = true;	
        
        IDataSource.prototype.loadXML = function(arg){ };
        
        IDataSource.prototype.parseXML = function(){
        	
        	var dataMatrix = new DataMatrix();
        	
        	var x = xml.getElementsByTagName("x");
        	for (i = 0; i < x.length; i++) {
        		dataMatrix.addXAxisLabel(x[i].childNodes[0].nodeValue);
        	}

        	var y = xml.getElementsByTagName("y");
        	for (i = 0; i < y.length; i++) {
        		dataMatrix.addYAxisLabel(y[i].childNodes[0].nodeValue);
        	}
        	
        	var rows = xml.getElementsByTagName("row");
        	$.each(rows, function(i, row) {
        		var values = row.children;
        		$.each(values, function(j, value) {
        			dataMatrix.setValue(dataMatrix.getXLabels()[i], dataMatrix.getYLabels()[j], value.firstChild.wholeText);
        		});
        	});
        	
        	return dataMatrix;
        };
	}
};