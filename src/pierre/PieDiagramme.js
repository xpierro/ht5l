/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * @returns
 */
var PieDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);
	if (direction != 'x' && direction != 'y') {
		throw "Direction de lecture invalide";
	}
	this.dir = direction;
	if (typeof PieDiagrammeinitialized == "undefined") {
		PieDiagramme.initialized = true;
		PieDiagramme.prototype.drawAxis = function() {
			// Vide
		};
		
		/**
		 * Dessin du diagramme en camembert.
		 */
		PieDiagramme.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var width = this.getWidth();
			var height = this.getHeight();
			// Création des parts
			var parts = new Array();
			var total = this.data.getTotal();
			var that = this;
			if (this.dir = 'x') { // Pourcentage de chaque ligne
				$.each(this.data.getYLabels(), function(i, yLabel) {
					parts.push(that.data.getLineTotal(yLabel) / total);
				});
			}
			var colors = new Array("blue", "red", "black");
			var startArc = - Math.PI / 2;
			var endArc;
			var center = {x: this.getWidth() / 2, y: this.getHeight() / 2};
			$.each(parts, function(i, part) {
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
				context.beginPath();
					alert(part);
					endArc = startArc - (2 * Math.PI) * part;
					// /!\ Indispensable pour avoir une part complete.
					context.moveTo(center.x, center.y);
					context.arc(center.x, center.y, that.getHeight() / 2 - 10,
								startArc, endArc, true);
					context.lineTo(center.x, center.y);
					startArc = endArc;
				context.closePath();
				context.fill();
			});
		};
	}
};

// Héritage: chainage des prototypes.
PieDiagramme.prototype = new IDiagramme(); // TODO: on répète deux fois, trouver mieux
PieDiagramme.prototype.constructor = PieDiagramme;
