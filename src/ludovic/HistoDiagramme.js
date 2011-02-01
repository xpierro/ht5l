/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var HistoDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);

    this.getWidestText = function(texts) {
        var context = this.canvas.getContext('2d');
        var widest = {text: texts[0], length: context.measureText(texts[0]).width};
        $.each(texts, function(i, text) {
            var length = context.measureText(text).width;
            if (widest.length < length) {
                widest.length = length;
                widest.text = text;
            }
        });
        return widest;
    };

	if (direction != 'x' && direction != 'y') {
		throw "Direction de lecture invalide";
	}
	this.dir = direction;
	if (typeof HistoDiagramme.initialized == "undefined") {
		HistoDiagramme.initialized = true;
		HistoDiagramme.prototype.drawAxis = function() {
			// Vide
		};

		HistoDiagramme.prototype.drawAxis = function() {
			// Vide
		};

		/**
		 * Dessin de l'histogramme.
		 */
		HistoDiagramme.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			//var width = this.getWidth();
			var height = this.getHeight();
			
			var total = this.data.getTotal();
			var tableau = new Array();
			var that = this;
			if (this.dir == 'x') { 
				$.each(this.data.getYLabels(), function(i, yLabel) {
					tableau.push(that.data.getLineTotal(yLabel) / total);
				});
			} else {
				$.each(this.data.getXLabels(), function(i, xLabel) {
					tableau.push(that.data.getColumnTotal(xLabel) / total);
				});
			}
			
			var colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen");

			while(tableau.length > 0) {
				var element = tableau[i];
				var name = tabN[tabN.length - 1];
				context.fillStyle = "green";
				pinceau.fillRect(70 + 20 * nbBar * 2, 270 - element/maxTableau * 250, 20, element/maxTableau * 250);
				context.fillStyle = "black";
				pinceau.fillText(name, 50 + 45 * nbBar, 290);
				nbBar++;
				tableau.pop();
				tabN.pop();
			}
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagramme.prototype = new IDiagramme(null); // TODO: on répète deux fois, trouver mieux
HistoDiagramme.prototype.constructor = HistoDiagramme;
