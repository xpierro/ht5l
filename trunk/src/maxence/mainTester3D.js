var ids = new InternalDataSource('test01h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[0], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test02h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[1], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test03h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[2], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test04h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[3], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test05h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[4], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test06h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[5], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test07h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[6], 'row');
    diag1.setData(ids.getDataMatrix());
});
var ids = new InternalDataSource('test08h3');
ids.loadData(function() {
    var diag1 = new Histo3DDiagram(document.getElementsByTagName('canvas')[7], 'row');
    diag1.setData(ids.getDataMatrix());
});