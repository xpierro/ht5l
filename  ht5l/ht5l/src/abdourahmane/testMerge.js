var m = new DataMatrix();
m.setColumnLabels(new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"));
m.setRowLabels(new Array("Clubic.fr", "Google.fr", "Yahoo.fr"));
m.setValue("Clubic.fr", "Lundi", 254);
m.setValue("Clubic.fr", "Mardi", 204);
m.setValue("Clubic.fr", "Mercredi", 354);
m.setValue("Clubic.fr", "Jeudi", 158);
m.setValue("Clubic.fr", "Vendredi", 871);
m.setValue("Clubic.fr", "Samedi", 824);
m.setValue("Clubic.fr", "Dimanche", 477);

m.setValue("Google.fr", "Lundi", 555);
m.setValue("Google.fr", "Mardi", 670);
m.setValue("Google.fr", "Mercredi", 731);
m.setValue("Google.fr", "Jeudi", 488);
m.setValue("Google.fr", "Vendredi", 159);
m.setValue("Google.fr", "Samedi", 547);
m.setValue("Google.fr", "Dimanche", 512);

m.setValue("Yahoo.fr", "Lundi", 241);
m.setValue("Yahoo.fr", "Mardi", 544);
m.setValue("Yahoo.fr", "Mercredi", 297);
m.setValue("Yahoo.fr", "Jeudi", 308);
m.setValue("Yahoo.fr", "Vendredi", 214);
m.setValue("Yahoo.fr", "Samedi", 745);
m.setValue("Yahoo.fr", "Dimanche", 750);
var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[0], 'column');
diag1.setData(m);
/*
var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
diag1.setData(m);
var diag2 = new HistoDiagram(document.getElementsByTagName('canvas')[1], 'row');
diag2.setData(m);
var diag3 = new PieDiagram(document.getElementsByTagName('canvas')[2], 'column');
diag3.setData(m);
var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'row');
diag4.setData(m);

var ids = new InternalDataSource('testpre');
ids.loadData(function() {
    var diag5 = new HistoDiagram(document.getElementsByTagName('canvas')[4], 'row');
    diag5.setData(ids.getDataMatrix());
});
*/
/*
$.each(m.getRowLabels(), function(i, r) {
    $.each(m.getColumnLabels(), function(j, c) {
        alert(r + " | " + c + " | " + m.getValueByLabel(r, c));
    });
});
alert(m.getTopValue());
*/