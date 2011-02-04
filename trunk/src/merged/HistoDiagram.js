/**
 * Constructeur de l'histogramme.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var HistoDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	if (typeof HistoDiagram.initialized == "undefined") {
		HistoDiagram.initialized = true;
		/**
		 * Dessin de l'histogramme.
		 */
		HistoDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var that = this;

			var shift = 5; // Décalage entre deux ensembles en abscisse
            var firstShift = 20; // Premier décalage
			var currentX = this.getLeftShift() + firstShift; // Position en x sur le canvas du pinceau

			// Calcul des ensemble servant d'abscisse et de couleur selon la direction de parcours
			// du tableau de données
            var absLabels = null;
            var colorLabels = null;
			if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				colorLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				colorLabels = this.data.getRowLabels();
			}

			var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse

			// Largeur d'une barre
			var barWidth = ((this.getWidth() - currentX   - globalShift)
                            / (this.data.getColumnNumber() * this.data.getRowNumber()));

			$.each(absLabels, function(i, abslabel){
				$.each(colorLabels, function(j, colorlabel) {
					var value = that.data.getValueByLabelAndDirection(colorlabel, abslabel, that.dir);
					var color = that.getColors()[j];
					var barHeight = that.getPixelPerUnit() * value;
					context.fillStyle = color;
					context.fillRect(currentX,
                                     that.getHeight() - that.getBottomShift() - barHeight,
                                     barWidth,
                                     barHeight);
					currentX += barWidth;
				});
				var xLegendPosition = firstShift + that.getLeftShift() + (i * 5) + (i * barWidth * colorLabels.length)
                                  + ((barWidth * colorLabels.length) / 2) - context.measureText(abslabel).width / 2;
				context.fillStyle = 'black'; // TODO: a fixer ailleurs
				context.fillText(abslabel, xLegendPosition , that.getHeight() - that.getBottomShift() + 10);
				currentX += shift;
			});
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
HistoDiagram.prototype.constructor = HistoDiagram;
