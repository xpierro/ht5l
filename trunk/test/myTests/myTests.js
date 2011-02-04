$(document).ready(function() {
    module("Basic Unit Test");
    var aL = new ArrayList();
    aL.addElement('kk');
    test('getElement : ArrayList', function() {
        equals(aL.getElement(0), 'kk', 'kk the right answer ');
    });
});