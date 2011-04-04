var diag3DInt = new Histo3DDiagram(document.getElementsByTagName('canvas')[0], 'row');
//var diag3DExt = new Histo3DDiagram(document.getElementById('test3DExt'), 'column');
var diagPieInt = new PieDiagram(document.getElementsByTagName('canvas')[1], 'row');
//var diagPieExt = new PieDiagram(document.getElementById('testPieExt'), 'column');
var diagHistInt = new HistoDiagram(document.getElementsByTagName('canvas')[2], 'row');
//var diagHistExt = new HistoDiagram(document.getElementById('testHistExt'), 'column');
var diagLineInt = new LineDiagram(document.getElementsByTagName('canvas')[3], 'column');
//var diagLineExt = new LineDiagram(document.getElementById('testLineExt'), 'column');

var internalDiagrams = new Array(diag3DInt, diagPieInt, diagHistInt, diagLineInt);

var ids = new InternalDataSource('testpre');
var iss = new InternalStyleSource('testpre');

ids.loadData(function() {
    iss.loadData(function() {
        $.each(internalDiagrams, function(i, diag) {
            diag.setData(ids.getDataMatrix());
            diag.setStyle(iss);
        });
    });
});