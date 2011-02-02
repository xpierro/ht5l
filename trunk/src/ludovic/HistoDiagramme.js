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
					//tableau.push(that.data.getLineTotal(yLabel) / total);
				});
			} else {
				$.each(this.data.getXLabels(), function(i, xLabel) {
					//tableau.push(that.data.getColumnTotal(xLabel) / total);
				});
			}
			
			$.each(that.data.getXLabels(), function(i, xlabel) { 
				$.each(that.data.getYLabels(), function(j, ylabel) { 
					var val = that.data.getValueByLabel(xlabel, ylabel);
					if (val != "undefined") {
						tableau.push(val);	
					}
				});
			});

			
			var colors = new Array("blue", "red", "black", "green", "pink", "orange", "darkgreen");

			var maxTableau = that.data.getTopValue();
			var nbBar = 0;
			var i = 0;
			while(tableau.length > 0) {
				var element = tableau.pop();
				context.fillStyle = colors[0];
				context.fillRect(70 + 20 * nbBar * 2, 450 - element/maxTableau * 450, 20, element/maxTableau * 450);
				context.fillStyle = "black";
				nbBar++;
				i++;
			}
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagramme.prototype = new IDiagramme(null); // TODO: on répète deux fois, trouver mieux
HistoDiagramme.prototype.constructor = HistoDiagramme;
