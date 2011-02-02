//var canva = document.getElementById('canva-test');
//
//var tab1 = new Array();
//tab1.push(2);
//tab1.push(5);
//tab1.push(20.53);
//tab1.push(8);
//tab1.push(12);
//tab1.push(4);
//
//var tab2 = new Array();
//tab2.push(2);
//tab2.push(5);
//tab2.push(20.53);
//tab2.push(8);
//tab2.push(12);
//tab2.push(4);
//
//var tab3 = new Array();
//tab3.push(2);
//tab3.push(5);
//tab3.push(20.53);
//tab3.push(8);
//tab3.push(12);
//tab3.push(4);
//
//var tabValeurs = new Array();
//tabValeurs.push(tab1);
//tabValeurs.push(tab2);
//tabValeurs.push(tab3);
//
//var tabNoms = new Array();
//tabNoms.push("Vin");
//tabNoms.push("Beurre");
//tabNoms.push("Jambon");
//tabNoms.push("Pomme");
//tabNoms.push("Soupe");
//tabNoms.push("Haricots");
//
//if (canva.getContext) {
//	var context = canva.getContext('2d');
//	drawHisto2d(context, tabValeurs, tabNoms);
//}

var m = new DataMatrix();
m.setXAxisLabels(new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"));
m.setYAxisLabels(new Array("CatsWhoCode.com", "WpRecipes.com", "Recipes.com", "Rec.com"));
m.setValue("Monday", "CatsWhoCode.com", 12541);
m.setValue("Tuesday", "CatsWhoCode.com", 11204);
m.setValue("Wednesday", "CatsWhoCode.com", 11354);
m.setValue("Thursday", "CatsWhoCode.com", 10058);
m.setValue("Friday", "CatsWhoCode.com", 9871);
m.setValue("Saturday", "CatsWhoCode.com", 8254);
m.setValue("Sunday", "CatsWhoCode.com", 5477);

m.setValue("Monday", "WpRecipes.com", 855);
m.setValue("Tuesday", "WpRecipes.com", 870);
m.setValue("Wednesday", "WpRecipes.com", 731);
m.setValue("Thursday", "WpRecipes.com", 488);
m.setValue("Friday", "WpRecipes.com", 159);
m.setValue("Saturday", "WpRecipes.com", 547);
m.setValue("Sunday", "WpRecipes.com", 512);

m.setValue("Monday", "Recipes.com", 855);
m.setValue("Tuesday", "Recipes.com", 870);
m.setValue("Wednesday", "Recipes.com", 731);
m.setValue("Thursday", "Recipes.com", 488);
m.setValue("Friday", "Recipes.com", 159);
m.setValue("Saturday", "Recipes.com", 547);
m.setValue("Sunday", "Recipes.com", 512);

m.setValue("Monday", "Rec.com", 855);
m.setValue("Tuesday", "Rec.com", 870);
m.setValue("Wednesday", "Rec.com", 731);
m.setValue("Thursday", "Rec.com", 488);
m.setValue("Friday", "Rec.com", 159);
m.setValue("Saturday", "Rec.com", 547);
m.setValue("Sunday", "Rec.com", 512);

var idiag = new HistoDiagramme(document.getElementsByTagName('canvas')[0], 'x');
idiag.setData(m);
idiag.setWidth(500);
idiag.setHeight(500);