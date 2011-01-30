var IDiagramme = function(canvasRef) {
	this.canvas = canvasRef;
	this.data = null;
	
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof IDiagramme.initialized == "undefined" ) {
        IDiagramme.initialized = true;
        
		/**
		 *	Définit la largeur de la fenêtre du diagramme.
		 *	@param width Largeur de la fenêtre
		 */
		IDiagramme.prototype.setWidth = function(width){
			this.canvas.setAttribute('width', width);
			this.redraw();
		};
	
		/**
		 *	Retourne la largeur de la fenêtre du diagramme.
		 */
		IDiagramme.prototype.getWidth = function(){
			return this.canvas.getAttribute('width');
		};
	
		/**
		 *	Définit la hauteur de la fenêtre du diagramme
		 *	@param height Hauteur de la fenêtre.
		 */
		IDiagramme.prototype.setHeight = function(height){
			this.canvas.setAttribute('height', height);
			this.redraw();
		};
	
		/**
		 *	Retourne la hauteur de la fenêtre du diagramme
		 */
		IDiagramme.prototype.getHeight = function(){
			return this.canvas.getAttribute('height');
		};
		
		/**
		 * Charge un fichier de style pour le diagramme.
		 * @param css Url d'un fichier css.
		 */
		IDiagramme.prototype.setStyle = function(css) {};
	
		/**
		 * Charge les données du diagramme.
		 * @param dataMatrix Matrice des données
		 */
		IDiagramme.prototype.setData = function(dataMatrix) {
			this.data = dataMatrix;
		};
		
		/**
		 *	Dessine la légende du diagramme
		 */
		IDiagramme.prototype.drawLegend = function(){};
		
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
				context.moveTo(50, this.getHeight() - 50);
				context.lineTo(this.getWidth() - 50, this.getHeight() - 50);
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
				context.moveTo(50, 20);
				context.lineTo(50, this.getHeight() - 50);
			context.closePath();
			context.stroke();
			
			// Dessin des intervalles en y
			var top = data.getTopValue();
			var nbIntervals = 10; // TODO: a fixer plus tard
			var lengthInterval = (this.getHeight() - 50 - 20) / nbIntervals;
			var dataInterval = Math.round(top / nbIntervals);
			context.beginPath();
				for (var y = 20; y < this.getHeight() - 2 * lengthInterval; y += lengthInterval) {
					context.moveTo(50 - 3, y);
					context.lineTo(50 + 3, y);
					var textWidth = context.measureText(top).width;
					context.fillText(top, 50 - textWidth - 5, y + 3, textWidth);
					top -= dataInterval;
				}
			context.closePath();
			context.stroke();
		};
		
		/**
		 *	Dessine le diagramme. 
		 */
		IDiagramme.prototype.drawDiagram = function(){};
		
		/**
		 * Dessine les lignes de visée
		 */
		IDiagramme.prototype.drawYLines = function() {
			
		};
		
		IDiagramme.prototype.redraw = function() {
			this.drawAxis();
			this.drawYLines();
			this.drawLegend();
			this.drawDiagram();
		};
    }
};
