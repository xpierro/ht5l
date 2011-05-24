/**
 * Classe représentant un diagramme en ligne
 * Conception: Abdourahmane Djigo
 */

/**
 * Constructeur du diagramme en ligne
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var LineDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);
	
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	
	if (typeof LineDiagram.initialized == "undefined") {
		LineDiagram.initialized = true;

        /**
         * Dessin du diagramme
         */
		LineDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var absLabels = null;
            var lineLabels = null;
            if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				lineLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				lineLabels = this.data.getRowLabels();
			}
			if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
					var yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
			} else {
					var yZero = this.getHeight() - this.getBottomShift();
			}
			var currentX = this.getLeftShift() + 20;
			var deltaX = (this.getWidth() - this.getLeftShift()) / (absLabels.length - 1);
			var colors = this.getColors();
			$.each(lineLabels, $.proxy(function(i, lineLabel){
					context.strokeStyle = colors[i];
				$.each(absLabels, $.proxy(function(j, absLabel) {
					var currentHeight = this.getPixelPerUnit() * this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					var currentY = yZero - currentHeight;
					if (j == 0) {
						context.lineCap = 'round';
						context.beginPath();
						context.moveTo(currentX, currentY);
					} else {
						context.lineWidth = 2;
						context.lineCap = 'round';
						context.lineTo(currentX, currentY);
						context.stroke();
					}
					var xLegendPosition = 0;
                    if (j < absLabels.length - 1) {
					    xLegendPosition = currentX - context.measureText(absLabel).width / 2;
                    } else {
                        xLegendPosition = this.getWidth() - context.measureText(absLabel).width - 1;
                    }
                    if (i = 1) { //TODO: etre sur
                        context.fillStyle = 'black'; // TODO: a fixer ailleurs
                        context.fillText(absLabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
                    }
		            currentX += deltaX;
				}, this)
								
				);
				currentX = this.getLeftShift() + 20;
				context.strokeStyle = 'red';
				currentX = this.getLeftShift() + 20;
				context.lineCap = 'round';
			}, this));
		};
			
		
	}
};

// Implémente IDiagram
LineDiagram.prototype = new IDiagram(null);
LineDiagram.prototype.constructor = LineDiagram;