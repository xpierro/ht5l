/**
 * Construction du lineDiagram
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception:Abdourahmane Djigo
 */

var LineDiagram = function(canvasRef, direction) {
	alert("dffdfdd");
	IDiagram.call(this, canvasRef);
	
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	if (typeof LineDiagram.initialized == "undefined") {
		LineDiagram.initialized =true;
		//Dessin des lignes.
		LineDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var shift = 5;
			
			var firstShift = 20; // Premier décalage là ou commence le dessin
			
			var absLabels = null;
            var columnLabels = null;
			if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				alert(absLabels);
				columnLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				alert(absLabels);
				columnLabels = this.data.getRowLabels();
			}

            var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse
            var currentX = this.getLeftShift()+firstShift;
            alert(currentX);

            var largeurSegment = ((this.getWidth() - currentX   - globalShift)
                            / (this.data.getColumnNumber() * this.data.getRowNumber()));
            var lineHeight = 0;
            var i = 0;
            var oldValue = 0;
            var value = 0;
			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(columnLabels, $.proxy(function(j, colorlabel) {
                    if (i == 0) {
                        oldValue = 12000;
                        i++;
                    } else {
                        if (i != 1) {
                            oldValue = value;
                        }
                        value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
                        var color = this.getColors()[j];
					//alert(value);

                        context.strokeStyle = color;
                        currentX += largeurSegment;
                        lineHeight = 340 - this.getPixelPerUnit() * value;     // TODO: Chercher à quoi correspond ce "magic number" 340 ?!
                        context.moveTo(currentX, 340 - this.getPixelPerUnit() * oldValue);
                        context.lineTo(currentX + largeurSegment, lineHeight);
                        context.stroke();
                        i++;
                    }
				}, this));
				var xLegendPosition = firstShift + this.getLeftShift() + (i*shift) + (i * largeurSegment * columnLabels.length)
                + ((largeurSegment * columnLabels.length) / 2) - context.measureText(abslabel).width / 2;
				context.fillStyle = 'black'; // TODO: a fixer ailleurs
				context.fillText(abslabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
				currentX += shift;	
			}, this));
			
		};
			
		
	}
};

//Héritage: chainage des prototypes.
LineDiagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
LineDiagram.prototype.constructor = LineDiagram;

