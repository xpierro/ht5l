/**
 * Construction du lineDiagram
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception:Abdourahmane Djigo
 */

var LineDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);
	
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	
	if (typeof LineDiagram.initialized == "undefined") {
		LineDiagram.initialized = true;
		//Dessin des lignes.
		LineDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var absLabels = null;
            var columnLabels = null;
            var shift = 5;
			if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				lineLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				lineLabels = this.data.getRowLabels();
			}
			
	
            var currentX = this.getLeftShift()+20;
            var deltaX = (this.getWidth() - this.getLeftShift()) / absLabels.length;
           // alert(deltaX);
            var lineHeight = 0;
            context.strokeStyle = 'blue';
            $.each(lineLabels, $.proxy(function(i, lineLabel){
            	//alert(lineLabel);
				$.each(absLabels, $.proxy(function(j, absLabel) {
					//alert(absLabel);
					var currentHeight = this.getPixelPerUnit() * this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					//alert(currentHeight);
					var currentY = this.getHeight() - this.getBottomShift() - currentHeight;
					if (j == 0) {
						context.lineCap = 'round';
						context.beginPath();
						
						context.moveTo(currentX, currentY);
						//context.stroke();
						//j++;
					} else {
						
						context.lineWidth = 2;
						context.lineCap = 'round';
						context.lineTo(currentX, currentY);
						//context.lineTo(currentX+deltaX, currentY);
						
						context.stroke();
						//context.lineCap = 'square';
						//j++;
						
					}
					
					var xLegendPosition = currentX - context.measureText(absLabel).width / 2;
		            context.fillStyle = 'black'; // TODO: a fixer ailleurs
		            context.fillText(absLabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
		            currentX += deltaX;
				}, this)
								
				);
				currentX = this.getLeftShift()+20;
				context.strokeStyle = 'red';
				//context.lineCap = 'square';
				currentX = this.getLeftShift()+20;
				//context.strokeStyle = 'black';
				context.lineCap = 'round';
				
			}, this));
            
            
			
		};
			
		
	}
};

//Héritage: chainage des prototypes.
LineDiagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
LineDiagram.prototype.constructor = LineDiagram;

