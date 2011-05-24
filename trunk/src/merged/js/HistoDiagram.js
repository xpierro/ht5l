/**
 * Constructeur de l'histogramme.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var HistoDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

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
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
    this.currentSlice = null;
    	
	this.posMouseX = 0;
	this.posMouseY = 0;
    
	if (typeof HistoDiagram.initialized == "undefined") {
		HistoDiagram.initialized = true;
		/**
		 * Dessin de l'histogramme.
		 */
		HistoDiagram.prototype.drawDiagram = function() {
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
						var color = this.getColors()[j < this.getColors().length ? j : j % this.getColors().length];
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
						context.fillRect(currentX,
	                                     yZero - barHeight,
	                                     barWidth,
	                                     barHeight);
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


        HistoDiagram.prototype.getRGBFromName = function(name) {
            var div = document.createElement("div");
            div.style.color = name;
            document.body.appendChild(div);
            var rgb = window.getComputedStyle(div, null).color;
            document.body.removeChild(div);
                    return rgb;
        };

        HistoDiagram.prototype.applyAlphaToColor = function(name, alpha) {
            var rgb = this.getRGBFromName(name);
            var rgba = rgb.replace('rgb', 'rgba');
            rgba = rgba.replace(')', ', ' + alpha + ')');
            return rgba;
        };

        HistoDiagram.prototype.handleClick = function(clickEvent, that) {
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
						if (mouseX >= currentX && mouseX <= currentX + barWidth
	                        && mouseY >= yZero - barHeight && mouseY <= yZero) {
	                        that.currentSlice = {abs: abslabel, color: colorlabel};
	                        that.redraw();
	                        found = 1;
	                    }
	                } else {
	                	if (mouseX >= currentX && mouseX <= currentX + barWidth
	                        && mouseY >= yZero && mouseY <= yZero - barHeight) {
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
    }
    var that = this;
    canvasRef.onmousemove = function(event) {
	    that.handleClick(event, that);
    };
};

// Héritage: chainage des prototypes.
HistoDiagram.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver mieux
HistoDiagram.prototype.constructor = HistoDiagram;