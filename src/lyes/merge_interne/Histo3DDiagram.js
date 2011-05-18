var Histo3DDiagram = function(canvasRef, direction) {
	try {
        if (canvasRef == null) {
            throw "refCanvas null"
        }
        if (direction == null)  {
            throw "dir null"
        }
        if (direction != 'row' && direction != 'column') {
            throw "unknown dir"
        }
    } catch(e) {
        if (e == "refCanvas null") {
            window_alert("Erreur de données", "La référence du canvas ne peut être nulle")
        }
        if (e == "dir null") {
            window_alert("Erreur de données", "La direction du diagramme doit être précisée");
        }
        if (e == "unknown dir") {
            window_alert("Erreur de lecture", "Direction de lecture invalide")
        }
    }
    HistoDiagram.call(this, canvasRef, direction);

    this.config3D = {
        x: 17,
        y: 17
    };

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
            context.fillStyle = "black";
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
					if (value>0) {               
	                    context.beginPath();
	                        context.moveTo(currentX, this.getHeight() - this.getBottomShift() - barHeight);
	                        context.lineTo(currentX + this.config3D.x, this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, this.getHeight() - this.getBottomShift() - barHeight - this.config3D.y);
	                        context.lineTo(currentX + barWidth, this.getHeight() - this.getBottomShift() - barHeight);
	                    context.closePath();
	                } else {                                  
	                    context.beginPath();
	                        context.moveTo(currentX, this.getHeight() - this.getBottomShift());
	                        context.lineTo(currentX + this.config3D.x, this.getHeight() - this.getBottomShift() - this.config3D.y);
	                        context.lineTo(currentX + barWidth + this.config3D.x, this.getHeight() - this.getBottomShift() - this.config3D.y);
	                        context.lineTo(currentX + barWidth, this.getHeight() - this.getBottomShift());
	                    context.closePath();
	                }
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
					if (mouseX >= currentX && mouseX <= currentX + barWidth
                        && mouseY >= yZero - barHeight && mouseY <= yZero) {
                        that.currentSlice = {abs: abslabel, color: colorlabel};
                        that.redraw();
                        found = 1;
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