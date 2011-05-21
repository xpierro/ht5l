var m = new DataMatrix();
m.setColumnLabels(new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"));
m.setRowLabels(new Array("Clubic.fr", "Google.fr", "Yahoo.fr"));
m.setValue("Clubic.fr", "Lundi", -12541);
m.setValue("Clubic.fr", "Mardi", 10533);
m.setValue("Clubic.fr", "Mercredi", 11400);
m.setValue("Clubic.fr", "Jeudi", 10058);
m.setValue("Clubic.fr", "Vendredi", 11287);
m.setValue("Clubic.fr", "Samedi", 8254);
m.setValue("Clubic.fr", "Dimanche", 9361);



m.setValue("Google.fr", "Lundi", 9855);
m.setValue("Google.fr", "Mardi", 7525);
m.setValue("Google.fr", "Mercredi", 8731);
m.setValue("Google.fr", "Jeudi", 7488);
m.setValue("Google.fr", "Vendredi", 8159);
m.setValue("Google.fr", "Samedi", 6547);
m.setValue("Google.fr", "Dimanche", 7512);


m.setValue("Yahoo.fr", "Lundi", 1255);
m.setValue("Yahoo.fr", "Mardi", 2544);
m.setValue("Yahoo.fr", "Mercredi", 1694);
m.setValue("Yahoo.fr", "Jeudi", 3108);
m.setValue("Yahoo.fr", "Vendredi", 800);
m.setValue("Yahoo.fr", "Samedi", 2045);
m.setValue("Yahoo.fr", "Dimanche", 950);

// TODO: int�grer au diagramme directement la gestion du mousemove
var diag1 = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'row');
document.getElementsByTagName('canvas')[0].onmousemove = function(event) {
	diag1.handleClick(event, diag1);
};
diag1.setData(m);