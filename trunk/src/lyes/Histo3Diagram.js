/**
 * Constructeur de l'histogramme en 3D.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var Histo3Diagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	if (typeof Histo3Diagram.initialized == "undefined") {
		Histo3Diagram.initialized = true;
		/**
		 * Dessin de l'histogramme en 3D.
		 */
		Histo3Diagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('3d');

		};
	}
};

// Héritage: chainage des prototypes.
Histo3Diagram.prototype = new IDiagram(null); // TODO: on rÃ©pÃ¨te deux fois, trouver mieux
Histo3Diagram.prototype.constructor = Histo3Diagram;
