var Histo3DDiagram = function(canvasRef, direction) {
	HistoDiagram.call(this, canvasRef, direction);

    this.config3D = {
        x: 50,
        y: 50
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
    }
};

// Héritage: chainage des prototypes.
Histo3DDiagram.prototype = new IDiagram(null); // TODO: on rép?ète deux fois, trouver mieux
Histo3DDiagram.prototype.constructor = Histo3DDiagram;