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

var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[0], 'column');
diag1.setData(m);

/*
$.each(m.getRowLabels(), function(i, r) {
    $.each(m.getColumnLabels(), function(j, c) {
        alert(r + " | " + c + " | " + m.getValueByLabel(r, c));
    });
});
alert(m.getTopValue());
*/