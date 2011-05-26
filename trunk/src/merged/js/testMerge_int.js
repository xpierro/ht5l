var ids = new InternalDataSource('testpre');
var iss = new InternalStyleSource('testpre');

ids.loadData(function() {
    var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');
    var diag2 = new Histo3DDiagram(document.getElementsByTagName('canvas')[1], 'row');
    var diag3 = new LineDiagram(document.getElementsByTagName('canvas')[2], 'column');
    var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'row');

    var matrix = ids.getDataMatrix();

    diag1.setData(matrix);
    diag2.setData(matrix);
    diag3.setData(matrix);
    diag4.setData(matrix);

    iss.loadData(function() {
        diag1.setStyle(iss.getStyleMatrix());
        diag2.setStyle(iss.getStyleMatrix());
        diag3.setStyle(iss.getStyleMatrix());
        diag4.setStyle(iss.getStyleMatrix());
    });
});