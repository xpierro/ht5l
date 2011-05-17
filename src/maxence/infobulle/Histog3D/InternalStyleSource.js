/**
 * Source de style interne
 * Conception: Lyes Kimouche
 */
var InternalStyleSource = function(preId) {
	IStyleSource.call(this);
    this.pre = preId;

    this.xml = null;
    if (typeof InternalStyleSource.initialized == "undefined" ) {
    	InternalStyleSource.initialized = true;

    	InternalStyleSource.prototype.loadData = function(callback) {
            if (window.DOMParser) {
                var parser = new DOMParser();
                // Utiliser /g remplace TOUTES les occurences.
                this.xml = parser.parseFromString(
                            document.getElementById(this.pre).innerHTML.trim().replace(/\n/g, ''),
                            "text/xml"
                        );
                callback(this.xml);
            } else {
                throw "Impossible de transformer la chaine fournie";
            }
        };

        InternalStyleSource.prototype.getStyleMatrix = function() {
            var styleMat = new StyleMatrix();

        	var colors = this.xml.getElementsByTagName('colors')[0];
            $.each(colors.childNodes, function(index, childNode) {
            	if (childNode.tagName == 'color') {
            		styleMat.addColor(childNode.textContent);
            	}
            });

            var legend = this.xml.getElementsByTagName('legend')[0];
            $.each(legend.childNodes, function(index, childNode) {
            	if (childNode.tagName == 'x') {
            		styleMat.setLegendX(parseInt(childNode.textContent));
                } else if (childNode.tagName == 'y') {
                	styleMat.setLegendY(childNode.textContent);
                } else if (childNode.tagName == 'w'){
                	styleMat.setLegendW(childNode.textContent);
                } else if (childNode.tagName == 'h'){
                	styleMat.setLegendH(childNode.textContent);
                }
            });
            
            return styleMat;
        }
    }
};

// Héritage: chainage des prototypes.
InternalStyleSource.prototype = new IStyleSource(); // TODO: on répète deux fois, trouver mieux
InternalStyleSource.prototype.constructor = InternalStyleSource;