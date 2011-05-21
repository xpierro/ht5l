var eds = new ExternalDataSource('data.xml');
var ess = new ExternalStyleSource('styleSource.xml');
eds.loadData(function(xmlResponse) {
    var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
    var diag2 = new Histo3DDiagram(document.getElementsByTagName('canvas')[1], 'row');
    var diag3 = new LineDiagram(document.getElementsByTagName('canvas')[2], 'column');
    var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'column');

    var matrix = eds.getDataMatrix(xmlResponse);

    diag1.setData(matrix);
    diag2.setData(matrix);
    diag3.setData(matrix);
    diag4.setData(matrix);
    
    ess.loadData(function(xml){
    	diag1.setStyle(ess.getStyleMatrix(xml));
    	diag2.setStyle(ess.getStyleMatrix(xml));
    	diag3.setStyle(ess.getStyleMatrix(xml));
    	diag4.setStyle(ess.getStyleMatrix(xml));
    });
});