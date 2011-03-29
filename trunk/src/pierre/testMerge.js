var m = new DataMatrix();
m.setColumnLabels(new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"));
m.setRowLabels(new Array("Clubic.fr", "Google.fr", "Yahoo.fr"));
m.setValue("Clubic.fr", "Lundi", 9855);
m.setValue("Clubic.fr", "Mardi", 9455);
m.setValue("Clubic.fr", "Mercredi", 11344);
m.setValue("Clubic.fr", "Jeudi", 10105);
m.setValue("Clubic.fr", "Vendredi", 7562);
m.setValue("Clubic.fr", "Samedi", 7364);
m.setValue("Clubic.fr", "Dimanche", 2477);

m.setValue("Google.fr", "Lundi", 12542);
m.setValue("Google.fr", "Mardi", 7745);
m.setValue("Google.fr", "Mercredi", 5731);
m.setValue("Google.fr", "Jeudi", 7591);
m.setValue("Google.fr", "Vendredi", 8245);
m.setValue("Google.fr", "Samedi", 5674);
m.setValue("Google.fr", "Dimanche", 4413);

m.setValue("Yahoo.fr", "Lundi", 2314);
m.setValue("Yahoo.fr", "Mardi", 2555);
m.setValue("Yahoo.fr", "Mercredi", 3684);
m.setValue("Yahoo.fr", "Jeudi", 1235);
m.setValue("Yahoo.fr", "Vendredi", 4568);
m.setValue("Yahoo.fr", "Samedi", 3214);
m.setValue("Yahoo.fr", "Dimanche", 874);

var diag3DInt = new Histo3DDiagram(document.getElementsByTagName('canvas')[0], 'row');
//var diag3DExt = new Histo3DDiagram(document.getElementById('test3DExt'), 'column');
var diagPieInt = new PieDiagram(document.getElementsByTagName('canvas')[2], 'row');
//var diagPieExt = new PieDiagram(document.getElementById('testPieExt'), 'column');
var diagHistInt = new HistoDiagram(document.getElementsByTagName('canvas')[4], 'row');
//var diagHistExt = new HistoDiagram(document.getElementById('testHistExt'), 'column');
var diagLineInt = new LineDiagram(document.getElementsByTagName('canvas')[6], 'column');
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