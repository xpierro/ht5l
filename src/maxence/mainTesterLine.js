var ids = new InternalDataSource('test01l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[0], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test02l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[1], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test03l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[2], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test04l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[3], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test05l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[4], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test06l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[5], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test07l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[6], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test08l');
ids.loadData(function() {
    var diag1 = new LineDiagram(document.getElementsByTagName('canvas')[7], 'row');
    diag1.setData(ids.getDataMatrix());
});
