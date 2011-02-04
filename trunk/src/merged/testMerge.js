var m = new DataMatrix();
m.setColumnLabels(new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));
m.setRowLabels(new Array("CatsWhoCode.com", "WpRecipes.com", "CatsWhoBlog.com"));
m.setValue("CatsWhoCode.com", "Monday", 12541);
m.setValue("CatsWhoCode.com", "Tuesday", 11204);
m.setValue("CatsWhoCode.com", "Wednesday", 11354);
m.setValue("CatsWhoCode.com", "Thursday", 10058);
m.setValue("CatsWhoCode.com", "Friday", 9871);
m.setValue("CatsWhoCode.com", "Saturday", 8254);
m.setValue("CatsWhoCode.com", "Sunday", 5477);

m.setValue("WpRecipes.com", "Monday", 9855);
m.setValue("WpRecipes.com", "Tuesday", 8870);
m.setValue("WpRecipes.com", "Wednesday", 8731);
m.setValue("WpRecipes.com", "Thursday", 7488);
m.setValue("WpRecipes.com", "Friday", 8159);
m.setValue("WpRecipes.com", "Saturday", 6547);
m.setValue("WpRecipes.com", "Sunday", 4512);

m.setValue("CatsWhoBlog.com", "Monday", 3241);
m.setValue("CatsWhoBlog.com", "Tuesday", 2544);
m.setValue("CatsWhoBlog.com", "Wednesday", 2597);
m.setValue("CatsWhoBlog.com", "Thursday", 3108);
m.setValue("CatsWhoBlog.com", "Friday", 2114);
m.setValue("CatsWhoBlog.com", "Saturday", 2045);
m.setValue("CatsWhoBlog.com", "Sunday", 950);

var diag = new HistoDiagram(document.getElementsByTagName('canvas')[0], 'column');
diag.setData(m);

/*
$.each(m.getRowLabels(), function(i, r) {
    $.each(m.getColumnLabels(), function(j, c) {
        alert(r + " | " + c + " | " + m.getValueByLabel(r, c));
    });
});
alert(m.getTopValue());
*/