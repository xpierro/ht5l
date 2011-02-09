/**
 * Constructeur du diagramme en ligne.
 * Raffine IDiagram
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 *
 * Conception: Pierre Collignon
 * Commentaires: Maxence Luce
 */
var LineDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;

	if (typeof LineDiagram.initialized == "undefined") {
		LineDiagram.initialized = true;
		LineDiagram.prototype.drawAxis = function() {
			//Vide
		};

		LineDiagram.prototype.drawAxis = function() {
			//Vide
		};

		/**
		 * Dessin du diagramme en ligne.
		 */
		LineDiagram.prototype.drawDiagram = function() {
			
		};
	}
};

// Héritage: chainage des prototypes.
LineDiagram.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver mieux
LineDiagram.prototype.constructor = LineDiagram;
