/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var HistoDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);

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
			var height = this.getHeight();
			
			var total = this.data.getTotal();
			var tableau = new Array();
			var that = this;
			
			var maxTableau = that.data.getTopValue();
			var nbBar = 0;
			var shift = 5;
			
			var currentX = 70;
			var currentXAxisX = 70;
			
			if (this.dir == 'y') {
				var absDir = this.data.getYLabels();
				var ordDir = this.data.getXLabels();
			} else {
				var absDir = this.data.getXLabels();
				var ordDir = this.data.getYLabels();
			}
			var globalShift = (absDir.length - 1) * shift;
			var barWidth = ((this.getWidth() - 70 - globalShift) / (this.data.getWidth() * this.data.getHeight()));

			$.each(absDir, function(i, ylabel){
				$.each(ordDir, function(j, xlabel) {
					var value = that.data.getValueByLabelAndDirection(xlabel, ylabel, that.dir);
					var color = that.getColors()[j];
					context.fillStyle = color;
					context.fillRect(currentX, 450 - value/maxTableau * 450, barWidth, value/maxTableau * 450);
					currentX += barWidth;
				});
				currentXAxisX = 70 + (i * 5) + (i * barWidth * ordDir.length) + ((barWidth * ordDir.length) / 2) - context.measureText(ylabel).width / 2;
				context.fillStyle = 'black';
				context.fillText(ylabel, currentXAxisX , 470);
				currentX += shift;
			});
		};
	}
};

// HÃ©ritage: chainage des prototypes.
HistoDiagramme.prototype = new IDiagramme(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
HistoDiagramme.prototype.constructor = HistoDiagramme;
