var ids = new InternalDataSource('testpre');
ids.loadData(function() {
    var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
    var diag2 = new Histo3DDiagram(document.getElementsByTagName('canvas')[1], 'row');
    var diag3 = new LineDiagram(document.getElementsByTagName('canvas')[2], 'column');
    var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'column');

    var matrix = ids.getDataMatrix();

    diag1.setData(matrix);
    diag2.setData(matrix);
    diag3.setData(matrix);
    diag4.setData(matrix);
});