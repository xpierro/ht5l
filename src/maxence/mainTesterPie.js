var m = new DataMatrix();
m.setColumnLabels(new Array("Lundi", "Mardi"));
m.setRowLabels(new Array("Clubic.fr", "Yahoo.fr"));
m.setValue("Clubic.fr", "Lundi", 25);
m.setValue("Clubic.fr", "Mardi", 25);

m.setValue("Yahoo.fr", "Lundi", 25);
m.setValue("Yahoo.fr", "Mardi", 25);

var diag1 = new PieDiagram(document.getElementsByTagName('canvas')[0], 'row');
diag1.setData(m);

var m2 = new DataMatrix();
m2.setColumnLabels(new Array("Lundi", "Mardi"));
m2.setRowLabels(new Array("Clubic.fr", "Yahoo.fr"));
m2.setValue("Clubic.fr", "Lundi", 25);
m2.setValue("Clubic.fr", "Mardi", 25);

m2.setValue("Yahoo.fr", "Lundi", -12);
m2.setValue("Yahoo.fr", "Mardi", -12);

var diag2 = new PieDiagram(document.getElementsByTagName('canvas')[1], 'row');
diag2.setData(m2);

var m3 = new DataMatrix();
m3.setColumnLabels(new Array("Lundi"));
m3.setRowLabels(new Array("Clubic.fr1", "Yahoo.fr1","Clubic.fr2", "Yahoo.fr2","Clubic.fr3", "Yahoo.fr3" ,"Clubic.fr4", "Yahoo.fr4" ,"Clubic.fr5", "Yahoo.fr5", 
"Clubic.fr6", "Yahoo.fr6", "Clubic.fr7", "Yahoo.fr7", "Clubic.fr8", "Yahoo.fr8", "Clubic.fr9", "Yahoo.fr9", "Clubic.fr10", "Yahoo.fr10", "Clubic.fr11", "Yahoo.fr11",
"Clubic.fr12", "Yahoo.fr12", "Clubic.fr13", "Yahoo.fr13", "Clubic.fr14", "Yahoo.fr14", "Clubic.fr15", "Yahoo.fr15", "Clubic.fr16", "Yahoo.fr16", "Clubic.fr17", "Yahoo.fr17",
"Clubic.fr18", "Yahoo.fr18", "Clubic.fr19", "Yahoo.fr19","Clubic.fr20", "Yahoo.fr20","Clubic.fr21", "Yahoo.fr21"));
m3.setValue("Clubic.fr1", "Lundi", 1);
m3.setValue("Yahoo.fr1", "Lundi", 1);
m3.setValue("Clubic.fr2", "Lundi", 1);
m3.setValue("Yahoo.fr2", "Lundi", 1);
m3.setValue("Clubic.fr3", "Lundi", 1);
m3.setValue("Yahoo.fr3", "Lundi", 1);
m3.setValue("Clubic.fr4", "Lundi", 1);
m3.setValue("Yahoo.fr4", "Lundi", 1);
m3.setValue("Clubic.fr5", "Lundi", 1);
m3.setValue("Yahoo.fr5", "Lundi", 1);
m3.setValue("Clubic.fr6", "Lundi", 1);
m3.setValue("Yahoo.fr6", "Lundi", 1);
m3.setValue("Clubic.fr7", "Lundi", 1);
m3.setValue("Yahoo.fr7", "Lundi", 1);
m3.setValue("Clubic.fr8", "Lundi", 1);
m3.setValue("Yahoo.fr8", "Lundi", 1);
m3.setValue("Clubic.fr9", "Lundi", 1);
m3.setValue("Yahoo.fr9", "Lundi", 1);
m3.setValue("Clubic.fr10", "Lundi", 1);
m3.setValue("Yahoo.fr10", "Lundi", 1);
m3.setValue("Clubic.fr11", "Lundi", 1);
m3.setValue("Yahoo.fr11", "Lundi", 1);
m3.setValue("Clubic.fr12", "Lundi", 1);
m3.setValue("Yahoo.fr12", "Lundi", 1);
m3.setValue("Clubic.fr13", "Lundi", 1);
m3.setValue("Yahoo.fr13", "Lundi", 1);
m3.setValue("Clubic.fr14", "Lundi", 1);
m3.setValue("Yahoo.fr14", "Lundi", 1);
m3.setValue("Clubic.fr15", "Lundi", 1);
m3.setValue("Yahoo.fr15", "Lundi", 1);
m3.setValue("Clubic.fr16", "Lundi", 1);
m3.setValue("Yahoo.fr16", "Lundi", 1);
m3.setValue("Clubic.fr17", "Lundi", 1);
m3.setValue("Yahoo.fr17", "Lundi", 1);
m3.setValue("Clubic.fr18", "Lundi", 1);
m3.setValue("Yahoo.fr18", "Lundi", 1);
m3.setValue("Clubic.fr19", "Lundi", 1);
m3.setValue("Yahoo.fr19", "Lundi", 1);
m3.setValue("Clubic.fr20", "Lundi", 1);
m3.setValue("Yahoo.fr20", "Lundi", 1);
m3.setValue("Clubic.fr21", "Lundi", 1);
m3.setValue("Yahoo.fr21", "Lundi", 1);

var diag3 = new PieDiagram(document.getElementsByTagName('canvas')[2], 'row');
diag3.setData(m3);

var m4 = new DataMatrix();
m4.setColumnLabels(new Array("Lundi", "Mardi"));
m4.setRowLabels(new Array("Clubic.fr", "Yahoo.fr"));
m4.setValue("Clubic.fr", "Lundi", -25);
m4.setValue("Clubic.fr", "Mardi", -25);

m4.setValue("Yahoo.fr", "Lundi", -25);
m4.setValue("Yahoo.fr", "Mardi", -25);

var diag4 = new PieDiagram(document.getElementsByTagName('canvas')[3], 'row');
diag4.setData(m4);

var ids = new InternalDataSource('test05p');
ids.loadData(function() {
    var diag5 = new PieDiagram(document.getElementsByTagName('canvas')[4], 'column');
    diag5.setData(ids.getDataMatrix());
});