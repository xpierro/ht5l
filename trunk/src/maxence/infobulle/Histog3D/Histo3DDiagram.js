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
    this.currentSlice = null;
        	
	this.posMouseX = 0;
	this.posMouseY = 0;
    
	if (typeof Histo3DDiagram.initialized == "undefined") {
		Histo3DDiagram.initialized = true;

        Histo3DDiagram.prototype.drawDiagram = function() {

        };

        Histo3DDiagram.prototype.drawXAxis = function() {
            var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
                
            if (this.data.getBottomValue() < 0 || this.data.getTopValue() < 0) {
				context.moveTo(this.yAxisConfig.leftShift, (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2);
				context.lineTo(this.getWidth() - this.config3D.x, (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2);
                context.moveTo(this.yAxisConfig.leftShift + this.config3D.x, (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2 - this.config3D.y);
				context.lineTo(this.getWidth(), (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2 - this.config3D.y);
                context.moveTo(this.getWidth(), (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2 - this.config3D.y);
                context.lineTo(this.getWidth() - this.config3D.x, (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2);
            } else {
				context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
				context.lineTo(this.getWidth() - this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift);
                context.moveTo(this.yAxisConfig.leftShift + this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
				context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
                context.moveTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
                context.lineTo(this.getWidth() - this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift);
            }
                
			context.closePath();
			context.stroke();
        };

        Histo3DDiagram.prototype.drawYAxis = function(){
			// TODO: Récupérer la couleur dynamiquement à partir du css.
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
            context.fillStyle = "black";
			context.beginPath();
				// Ligne des ordonnées
				context.moveTo(this.yAxisConfig.leftShift, this.yAxisConfig.topShift);
				context.lineTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
                context.moveTo(this.yAxisConfig.leftShift + this.config3D.x, this.yAxisConfig.topShift - this.config3D.y);
                context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, this.getHeight() - this.yAxisConfig.bottomShift - this.config3D.y);
			context.closePath();
			context.stroke();

			// Dessin des intervalles en y
			var currentValue = this.data.getTopValue();
			var lengthInterval = null;
			var dataInterval = null;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                var maxTop = this.data.getTopValue() < 0 ? -this.data.getTopValue() : this.data.getTopValue();
                var maxBottom = this.data.getBottomValue() < 0 ? -this.data.getBottomValue() : this.data.getBottomValue();
                var max = maxTop > maxBottom ? maxTop : maxBottom;
                currentValue = max;
                dataInterval = Math.round(2 * max / this.yAxisConfig.nbIntervals);
                lengthInterval = Math.floor(((this.getHeight() - this.yAxisConfig.bottomShift - this.yAxisConfig.topShift) / 2) / (this.yAxisConfig.nbIntervals / 2));
            } else {
                dataInterval = Math.round(currentValue / this.yAxisConfig.nbIntervals);
                lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
            }
			var stepWidth = this.yAxisConfig.stepWidth; // Longueur de la graduation
            if (this.data.getTopValue() < 0|| this.data.getBottomValue() < 0) {
                currentValue = 0;
                for (var y = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2; y >= this.yAxisConfig.topShift; y -= lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);
                    context.moveTo(this.yAxisConfig.leftShift, y);
					context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, y - this.config3D.y);

                    var textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();

                    currentValue += dataInterval;
                }
                currentValue = -dataInterval;
                for (var y = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2 + lengthInterval; y <= this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);
                    context.moveTo(this.yAxisConfig.leftShift, y);
					context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, y - this.config3D.y);

                    var textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();
                    currentValue -= dataInterval;
                }
            }  else {
                for (var y = this.yAxisConfig.topShift; y < this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);
                    context.moveTo(this.yAxisConfig.leftShift, y);
					context.lineTo(this.yAxisConfig.leftShift + this.config3D.x, y - this.config3D.y);

                    var textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();
                    currentValue -= dataInterval;
                }
            }
		};


        Histo3DDiagram.prototype.drawDiagram = function() {
            var context = this.canvas.getContext('2d');

			var shift = 5; // Décalage entre deux ensembles en abscisse
            var firstShift = 5; // Premier décalage
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
			var barWidth = ((this.getWidth() - currentX - globalShift - this.config3D.x)
                            / (this.data.getColumnNumber() * this.data.getRowNumber()));

            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                var yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
            } else {
                var yZero = this.getHeight() - this.getBottomShift();
            }

            var infoBulleValeur;
			var infoBulleLabel;
			var infoNeeded = false;

			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(colorLabels, $.proxy(function(j, colorlabel) {
					var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
					var color = this.getColors()[j];

                    if (this.currentSlice != null) {
                        if(this.currentSlice.abs == abslabel && this.currentSlice.color == colorlabel) {
                            color = this.applyAlphaToColor(this.getColors()[j < this.getColors().length ? j : j % this.getColors().length], .5);
                            infoNeeded = true;
                            infoBulleLabel = colorlabel;
                            infoBulleValeur = value;
                        } else {
                            color = this.applyAlphaToColor(this.getColors()[j < this.getColors().length ? j : j % this.getColors().length], 1);
                        }
                    }


					var barHeight = this.getPixelPerUnit() * value;
					context.fillStyle = color;
                    context.strokeStyle = 'black';
                    
                    if (barHeight<0) {
	                    context.beginPath();
	                        context.moveTo(currentX, yZero - barHeight);
	                        context.lineTo(currentX + this.config3D.x, yZero - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth, yZero - barHeight);
	                    context.closePath();
	                } else {
	                	context.beginPath();
	                        context.moveTo(currentX, yZero);
	                        context.lineTo(currentX + this.config3D.x, yZero - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - this.config3D.y);
	                        context.lineTo(currentX + barWidth, yZero);
	                    context.closePath();
	                }
	                context.stroke();
                    context.fill();
                    
                    //Face gauche
                    context.beginPath();
                        context.moveTo(currentX, yZero);
                        context.lineTo(currentX + this.config3D.x, yZero - this.config3D.y);
                        context.lineTo(currentX + this.config3D.x, yZero - barHeight - this.config3D.y);
                        context.lineTo(currentX, yZero - barHeight);
                    context.closePath();
                    context.stroke();
                    context.fill();


                    context.strokeRect(currentX + this.config3D.x,
                                     yZero - barHeight - this.config3D.y,
                                     barWidth,
                                     barHeight);
                    context.fillRect(currentX + this.config3D.x,
                                     yZero - barHeight - this.config3D.y,
                                     barWidth,
                                     barHeight);
                    context.strokeRect(currentX,
                                     yZero - barHeight,
                                     barWidth,
                                     barHeight);
					context.fillRect(currentX,
                                     yZero - barHeight,
                                     barWidth,
                                     barHeight);
                    if (barHeight>0) {
	                    context.beginPath();
	                        context.moveTo(currentX, yZero - barHeight);
	                        context.lineTo(currentX + this.config3D.x, yZero - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth, yZero - barHeight);
	                    context.closePath();
	                } else {
	                	context.beginPath();
	                        context.moveTo(currentX, yZero);
	                        context.lineTo(currentX + this.config3D.x, yZero - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - this.config3D.y);
	                        context.lineTo(currentX + barWidth, yZero);
	                    context.closePath();
	                }
                    context.stroke();
                    context.fill();

                    // Face droite
                    context.beginPath();
                        context.moveTo(currentX + barWidth, yZero);
                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - this.config3D.y);
                        context.lineTo(currentX + barWidth + this.config3D.x, yZero - barHeight - this.config3D.y);
                        context.lineTo(currentX + barWidth, yZero - barHeight);
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
			
			if (infoNeeded == true) {
				if (this.getWidth()<this.posMouseX+15+(context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10) {
					context.fillStyle = "green";
					context.fillRect(this.posMouseX-5-(context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)-10, this.posMouseY+10, (context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10, 20);
					context.fillStyle = "white";
					context.fillText(infoBulleLabel+": "+parseFloat(infoBulleValeur), this.posMouseX-(context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)-10, this.posMouseY+23);
				} else {
					context.fillStyle = "green";
					context.fillRect(this.posMouseX+15, this.posMouseY+10, (context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10, 20);
					context.fillStyle = "white";
					context.fillText(infoBulleLabel+": "+parseFloat(infoBulleValeur), this.posMouseX+20, this.posMouseY+23);
				}
			} 
        };

        Histo3DDiagram.prototype.handleClick = function(clickEvent, that) {
            var mouseX = clickEvent.pageX - this.canvas.offsetLeft;
            var mouseY = clickEvent.pageY - this.canvas.offsetTop;
            
            this.posMouseX = mouseX;
			this.posMouseY = mouseY;

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
            var yZero = 0;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
            } else {
                yZero = this.getHeight() - this.getBottomShift();
            }

            var found = 0;
			$.each(absLabels, $.proxy(function(i, abslabel){
				$.each(colorLabels, $.proxy(function(j, colorlabel) {
					var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
					var barHeight = this.getPixelPerUnit() * value;
					if (barHeight > 0) {
						if (mouseX >= currentX - this.config3D.x && mouseX <= currentX + barWidth
	                        && mouseY >= yZero - barHeight - this.config3D.y && mouseY <= yZero) {
	                        that.currentSlice = {abs: abslabel, color: colorlabel};
	                        that.redraw();
	                        found = 1;
	                    }
	                } else {
	                	if (mouseX >= currentX - this.config3D.x && mouseX <= currentX + barWidth
	                        && mouseY >= yZero - this.config3D.y && mouseY <= yZero - barHeight) {
	                        that.currentSlice = {abs: abslabel, color: colorlabel};
	                        that.redraw();
	                        found = 1;
	                    }
	                }
					currentX += barWidth;
				}, this));
				currentX += shift;
			}, this));

            if (that.currentSlice != null && found == 0) {
                that.currentSlice = null;
                that.redraw();
            }
        };

        Histo3DDiagram.prototype.getRGBFromName = function(name) {
            var div = document.createElement("div");
            div.style.color = name;
            document.body.appendChild(div);
            var rgb = window.getComputedStyle(div, null).color;
            document.body.removeChild(div);
                    return rgb;
        };

        Histo3DDiagram.prototype.applyAlphaToColor = function(name, alpha) {
            var rgb = this.getRGBFromName(name);
            var rgba = rgb.replace('rgb', 'rgba');
            rgba = rgba.replace(')', ', ' + alpha + ')');
            return rgba;
        };
    }
};

// Héritage: chainage des prototypes.
Histo3DDiagram.prototype = new IDiagram(null); // TODO: on rép?ète deux fois, trouver mieux
Histo3DDiagram.prototype.constructor = Histo3DDiagram;