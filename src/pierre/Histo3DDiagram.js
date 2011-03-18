var Histo3DDiagram = function(canvasRef, direction) {
	HistoDiagram.call(this, canvasRef, direction);

    this.config3D = {
        x: 17,
        y: 17
    };

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide 3D : " + direction;
	}
	this.dir = direction;
	if (typeof Histo3DDiagram.initialized == "undefined") {
		Histo3DDiagram.initialized = true;

        Histo3DDiagram.prototype.drawDiagram = function() {

        };

        Histo3DDiagram.prototype.drawXAxis = function() {
            var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Ligne des abscisses
				context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
				context.lineTo(this.getWidth() - this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift);
                context.moveTo(this.yAxisConfig.leftShift + this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
				context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
                context.moveTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
                context.lineTo(this.getWidth() - this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
        };

        Histo3DDiagram.prototype.drawYAxis = function() {
            var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Lignes des ordonnées
				context.moveTo(this.yAxisConfig.leftShift, this.yAxisConfig.topShift);
				context.lineTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
                context.moveTo(this.yAxisConfig.leftShift + this.config3D.x, this.yAxisConfig.topShift - this.config3D.y);
                context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
            context.closePath();
			context.stroke();



			// Dessin des intervalles en y
			var currentValue = this.data.getTopValue();
			var lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
			var dataInterval = Math.round(currentValue / this.yAxisConfig.nbIntervals);
			var stepWidth = this.yAxisConfig.stepWidth; // Longueur de la graduation
			for (var y = this.yAxisConfig.topShift; y < this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
				context.moveTo(this.yAxisConfig.leftShift, y);
				context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, y - this.config3D.y);
				context.stroke();
				var textWidth = context.measureText(currentValue).width;
				context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
				currentValue -= dataInterval;
			}
            // Dessin de la dernière barre sans 0
            context.moveTo(this.yAxisConfig.leftShift, y);
            context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, y - this.config3D.y);
            context.stroke();
        };

        Histo3DDiagram.prototype.drawDiagram = function() {
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

			var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse

			// Largeur d'une barre
			var barWidth = ((this.getWidth() - currentX   - globalShift)
                            / (this.data.getColumnNumber() * this.data.getRowNumber()));

            alert(barWidth);
			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(colorLabels, $.proxy(function(j, colorlabel) {
					var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
					var color = this.getColors()[j];
					var barHeight = this.getPixelPerUnit() * value;
					context.fillStyle = color;
                    context.strokeStyle = 'black';

                    context.strokeRect(currentX + this.config3D.x,
                                     this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y,
                                     barWidth,
                                     barHeight);
                    context.fillRect(currentX + this.config3D.x,
                                     this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y,
                                     barWidth,
                                     barHeight);
                    context.strokeRect(currentX,
                                     this.getHeight() - this.getBottomShift() - barHeight,
                                     barWidth,
                                     barHeight);
					context.fillRect(currentX,
                                     this.getHeight() - this.getBottomShift() - barHeight,
                                     barWidth,
                                     barHeight);
                    context.beginPath();
                        context.moveTo(currentX, this.getHeight() - this.getBottomShift() - barHeight);
                        context.lineTo(currentX + this.config3D.x, this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y);
                        context.lineTo(currentX + barWidth + this.config3D.x, this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y);
                        context.lineTo(currentX + barWidth, this.getHeight() - this.getBottomShift() - barHeight);
                    context.closePath();
                    context.stroke();
                    context.fill();

                    // Face droite
                    context.beginPath();
                        context.moveTo(currentX + barWidth, this.getHeight() - this.getBottomShift());
                        context.lineTo(currentX + barWidth + this.config3D.x, this.getHeight() - this.getBottomShift() - this.config3D.y);
                        context.lineTo(currentX + barWidth + this.config3D.x, this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y);
                        context.lineTo(currentX + barWidth, this.getHeight() - this.getBottomShift() - barHeight);
                    context.closePath();
                    context.stroke();
                    context.fill();

					currentX += barWidth;
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
Histo3DDiagram.prototype = new IDiagram(null); // TODO: on rép?ète deux fois, trouver mieux
Histo3DDiagram.prototype.constructor = Histo3DDiagram;