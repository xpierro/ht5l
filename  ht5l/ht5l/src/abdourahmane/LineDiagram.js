/**
 * Construction de LineDiagram.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Abdourahmane Djigo
 * 
 */
var LineDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	if (typeof HistoDiagram.initialized == "undefined") {
		HistoDiagram.initialized = true;
		/**
		 * Dessin line Bar.
		 */
		LineDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');

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
			var currentX=null;
			var value = null;
			var longueurSegment=null;
			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(colorLabels, $.proxy(function(j, colorlabel) {
					value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
					var color = this.getColors()[j];
					longueurSegment = this.getPixelPerUnit() * value;
					context.fillStyle = color;
					currentX = this.getLeftShift()+20;
					while (currentX < this.getWidth() || currentX < this.getHeight()) {
	                    context.moveTo(currentX, value);
	                    context.lineTo(currentX + longueurSegment, value);
	                    context.moveTo(currentX+longueurSegment, value);
	                    context.lineTo(currentX+longueurSegment+longueurSegment, value);
	                    currentX += longueurSegment;
	                    longueurSegment+=1;
	                }
					/*test static
					 * 
                    context.moveTo(70, 70); 
            		context.lineTo(90, 123); 
            		context.moveTo(90, 123);
            		context.lineTo(109, 150);
            		context.moveTo(109, 150);
            		context.lineTo(120, 250);
            		context.moveTo(120, 250);
            		context.lineTo(150, 280);
            		*/
					context.stroke();
	                 
					
				}, this));
				var xLegendPosition = firstShift + this.getLeftShift() + (i * 5) + (i * barWidth * colorLabels.length)
                                  + ((barWidth * colorLabels.length) / 2) - context.measureText(abslabel).width / 2;
				context.fillStyle = 'black'; // TODO: a fixer ailleurs
				context.fillText(abslabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
				currentX += shift;
			}, this));
			
		};
	}
};

// Héritage: chainage des prototypes.
LineDiagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
LineDiagram.prototype.constructor = LineDiagram;
