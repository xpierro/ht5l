/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var HistoDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);

    /*
    Style des lignes de visée
    Trois possibilités :
        0 pour aucune
        1 pour une ligne simple
        2 pour une ligne en pointillés
     */
	var ligneDeVisee = 2;
	
			/**
		 * Dessine les abscisses et ordonnées du diagramme
		 */
		IDiagramme.prototype.drawAxis = function() {
			this.drawXAxis();
			this.drawYAxis();
		};
		
		/**
		 * Dessine les abscisses du diagramme
		 */
		IDiagramme.prototype.drawXAxis = function() {
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Ligne des abscisses
				context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
				context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
		};
		
		/**
		 *	Dessine les ordonnées du diagramme
		 */
		IDiagramme.prototype.drawYAxis = function(){
			// TODO: Récupérer la couleur dynamiquement à partir du css.
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
			context.beginPath();
				// Ligne des ordonnées
				context.moveTo(this.yAxisConfig.leftShift, this.yAxisConfig.topShift);
				context.lineTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
			
			// Dessin des intervalles en y
			var currentValue = this.data.getTopValue();
			var lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
			var dataInterval = Math.round(currentValue / this.yAxisConfig.nbIntervals);
			var stepWidth = this.yAxisConfig.stepWidth; // Longueur de la graduation
			for (var y = this.yAxisConfig.topShift; y < this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
				context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
				if (ligneDeVisee == 0) {
					context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);
				} else {
					if (ligneDeVisee == 1) {
						context.lineTo(500, y);
					} else {
						if (ligneDeVisee == 2) {
							var i = this.yAxisConfig.leftShift;
							while (i < 500) {
								context.moveTo(i, y);
									context.lineTo(i+10, y);
									trace = 0;
								i+= 20;
							}
						}
					}
				}
				context.stroke();
				var textWidth = context.measureText(currentValue).width;
				context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
				currentValue -= dataInterval;
			}
		};
	
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
			// Hauteur du canvas
			var height = this.getHeight();
			
			var that = this;
			
			// Valeur max du tableau des données
			var topValue = that.data.getTopValue();
			// Comptage du nombre de barres de l'histogramme
			var nbBar = 0;
			// Décalage entre deux ensembles en abscisse
			var shift = 5;
			
			// Position en x sur le canvas du pinceau
			var currentX = 70;
			// Contient le décalage lors du dessin de la légende en abscisse
			var xLegendPosition;
			
			// Calcul des ensemble servant d'abscisse et de couleur selon la direction de parcours
			// du tableau de données
			if (this.dir == 'y') {
				var absLabels = this.data.getYLabels();
				var colorLabels = this.data.getXLabels();
			} else {
				var absLabels = this.data.getXLabels();
				var colorLabels = this.data.getYLabels();
			}
			// Somme des décalages entre deux ensembles en abscisse
			var globalShift = (absLabels.length - 1) * shift;
			// Largeur d'une barre
			var barWidth = ((this.getWidth() - currentX   - globalShift) / (this.data.getWidth() * this.data.getHeight()));

			$.each(absLabels, function(i, abslabel){
				$.each(colorLabels, function(j, colorlabel) {
					var value = that.data.getValueByLabelAndDirection(colorlabel, abslabel, that.dir);
					var color = that.getColors()[j];
					var barHeight = that.getPixelPerUnit() * value;
					context.fillStyle = color;
					context.fillRect(currentX, that.getWidth() - that.getBottomShift() - barHeight, barWidth, barHeight);
					currentX += barWidth;
				});
				xLegendPosition = 70 + (i * 5) + (i * barWidth * colorLabels.length) + ((barWidth * colorLabels.length) / 2) - context.measureText(abslabel).width / 2;
				context.fillStyle = 'black'; 
				context.fillText(abslabel, xLegendPosition , 470);
				currentX += shift;
			});
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagramme.prototype = new IDiagramme(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
HistoDiagramme.prototype.constructor = HistoDiagramme;
