var PieDiagramme = function(canvasRef) {
	IDiagramme.call(this, canvasRef);
	if (typeof PieDiagrammeinitialized == "undefined") {
		PieDiagramme.initialized = true;
		PieDiagramme.prototype.drawAxis = function() {
			// Vide
		};
	}
};

PieDiagramme.prototype = new IDiagramme(); // TODO: on répète deux fois, trouver mieux
PieDiagramme.prototype.constructor = PieDiagramme;
