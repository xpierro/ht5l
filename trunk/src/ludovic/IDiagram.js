/**
 *  Classe abstraite représentant la vue d'un diagramme générique.
 *  Au moins drawDiagram doit être implémentée par les clients.
 *
 *  Conception: Pierre Collignon
 *  Corrections: Ludovic Thueux et Abdourahmane Djigo
 *  Commentaires: Maxence Luce
 */

var IDiagram = function(canvasRef) {
	this.canvas = canvasRef;
	this.data = null;
    this.style = null;

    // Objet de configuration du dessin TODO: rendre modifiable aisément.
    this.yAxisConfig = {
		leftShift: 50,
		topShift: 20,
		bottomShift: 50,
		nbIntervals: 10,
		stepWidth: 6
	};
	
	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof IDiagram.initialized == "undefined" ) {
        IDiagram.initialized = true;
        
        
		/**
		 *	Définit la largeur de la fenêtre du diagramme.
		 *	@param width Largeur de la fenêtre
		 */
		IDiagram.prototype.setWidth = function(width){
            try {
                if (width == null) {
                    throw "width null";
                }
                this.canvas.setAttribute('width', width);
			    this.redraw();
            } catch(e) {
                if (e == "width null") {
                    window_alert("Erreur de donnée", "width doit être précisé");
                }
            }
		};
	
		/**
		 *	Retourne la largeur de la fenêtre du diagramme.
		 */
		IDiagram.prototype.getWidth = function(){
			return this.canvas.getAttribute('width');
		};
	
		/**
		 *	Définit la hauteur de la fenêtre du diagramme
		 *	@param height Hauteur de la fenêtre.
		 */
		IDiagram.prototype.setHeight = function(height){
            try {
                if (height == null) {
                    throw "height null";
                }
                this.canvas.setAttribute('height', height);
			    this.redraw();
            } catch(e) {
                if (e == "height null") {
                    window_alert("Erreur de donnée", "height doit être précisé");
                }
            }
		};
	
		/**
		 *	Retourne la hauteur de la fenêtre du diagramme
		 */
		IDiagram.prototype.getHeight = function(){
			return this.canvas.getAttribute('height');
		};

        /**
         * Retourne l'ensemble du tableau de couleurs sur lequel "cycler".
         */
        IDiagram.prototype.getColors = function() {
        	if (this.styleMatrix) {
        		return this.styleMatrix.getColors();
        	} else {
        		return new Array('blue', 'white', 'red', 'green', 'yellow');
        	}
         };

		
		/**
		 * Charge un fichier de style pour le diagramme.
		 * @param styleConfig Objet de config de style {colors: ["blue", "red], background: "yellox"}
		 */
		IDiagram.prototype.setStyle = function(styleSource) {
            try {
                if (styleSource == null) {
                    throw "styleSource null";
                }
                this.styleMatrix = styleSource.getStyleMatrix();
                this.redraw();
            } catch(e) {
                if (e == "styleSource null") {
                    window_alert("Erreur de donnée", "styleSource doit être précisé");
                }
            }
        };
	
		/**
		 * Charge les données du diagramme.
		 * @param dataMatrix Matrice des données
		 */
		IDiagram.prototype.setData = function(dataMatrix) {
            try {
                if (dataMatrix == null) {
                    throw "dataMatrix null";
                }
			    this.data = dataMatrix;
                this.redraw();
            } catch(e) {
                if (e == "dataMatrix null") {
                    window_alert("Erreur de donnée", "dataMatrix doit être précisé");
                }
            }
		};

        IDiagram.prototype.getWidestText = function(texts) {
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
		
        IDiagram.prototype.getLegendRectangle = function() {
        	if (this.styleMatrix) {
        		return this.styleMatrix.getLegendRectangle();
        	} else {
        		return {x: 10, y: 10, width: 500, height: 120 };
        	}
        };
        
		/**
		 *	Dessine la légende du diagramme.
         *  TODO: ne plus dessiner le contour du rectangle et le rendre modifiable.
		 */
		IDiagram.prototype.drawLegend = function(){
            var context = this.canvas.getContext('2d');
			var height = this.getHeight();
            // Dessin du rectangle encadrant la légende TODO: spécifier ce rectangle autrement
            var rectangle = this.getLegendRectangle();
			context.strokeStyle = 'black';
            //context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

            // Choix des labels composant la légende
			var labels = this.dir == 'column' ? this.data.getColumnLabels() : this.data.getRowLabels();

            // Récupération du plus long label
            var widest = this.getWidestText(labels);

            var colors = this.getColors();
            //Dessin des éléments de la légende. TODO: faire un objet de config
			var pos = {x: rectangle.x, y: rectangle.y}; // Position du pinceau
            var squareSide = 10; //Taille du carré coloré
            var shift = 5; // Décalage du texte en x par rapport au rectangle coloré
            var xStep = widest.length + squareSide + 2 * shift; // Pas de déplacement en x
            var yStep = rectangle.height / labels.length; // Pas de déplacement en y

            $.each(labels, function(i, label) {
                // Dessin du carré
				context.fillStyle = colors[i < colors.length ? i : i % colors.length];
                context.strokeStyle = 'black';
                context.strokeRect(pos.x, pos.y, squareSide, squareSide);
				context.fillRect(pos.x, pos.y, squareSide, squareSide);

                // Dessin du texte
				context.fillStyle = 'black';
				context.fillText(label, pos.x + squareSide + shift, pos.y + squareSide);

                // Translation du pinceau
				if (pos.x + 2 * widest.length + squareSide + shift < rectangle.x + rectangle.width) {
                    pos.x += xStep;
                } else {
				    pos.x = rectangle.x;
				    pos.y += yStep;
				}
			});
        };
		
		/**
		 * Dessine l'axe du diagramme
		 */
		IDiagram.prototype.drawAxis = function() {
			this.drawXAxis();
			this.drawYAxis();
            this.drawYLines();
		};

        /**
		 * Dessine les abscisses du diagramme
		 */
		IDiagram.prototype.drawXAxis = function() {
			var context = this.canvas.getContext('2d');
			context.fillStyle = "black";
			context.beginPath();
				// Ligne des abscisses
				context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
				context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift);
			context.closePath();
			context.stroke();
		};

        /**
         * Dessine le label de la légende en Y du diagramme courant
         */
        IDiagram.prototype.drawYLabelLegend = function() {
            var context = this.canvas.getContext('2d');
			context.fillStyle = "black";
            context.translate(200,200);
            context.rotate(-Math.PI/2);
            context.fillText(this.data.getYLegend(), 50, 50);
        };
		
		/**
		 *	Dessine les ordonnées du diagramme
		 */
		IDiagram.prototype.drawYAxis = function(){
			// TODO: Récupérer la couleur dynamiquement à partir du css.
			var context = this.canvas.getContext('2d');
			context.strokeStyle = "black";
            context.fillStyle = "black";
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
				context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);

				var textWidth = context.measureText(currentValue).width;
				context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
				context.stroke();
                currentValue -= dataInterval;
			}
		};

        // TODO: methode de récupération de parametre par nom
		IDiagram.prototype.getBottomShift = function() {
			return this.yAxisConfig.bottomShift;
		};

        IDiagram.prototype.getLeftShift = function() {
			return this.yAxisConfig.leftShift;
		};

		IDiagram.prototype.getPixelPerUnit = function() {
			var lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
			var dataInterval = Math.round(this.data.getTopValue() / this.yAxisConfig.nbIntervals);
			return lengthInterval / dataInterval;
		};
		
		/**
		 *	Dessine le diagramme. 
		 */
		IDiagram.prototype.drawDiagram = function(){};
		
		/**
		 * Dessine les lignes de visée
		 */
		IDiagram.prototype.drawYLines = function() { };
		
		IDiagram.prototype.redraw = function() {
			var context = this.canvas.getContext('2d');
			context.fillStyle = 'white';
			context.fillRect(0, 0, this.getWidth(), this.getHeight());
            if (this.data) {
                this.drawAxis();
                this.drawDiagram();
                this.drawLegend();
                this.drawYLabelLegend();
                // TODO: juste pour le test: supprimer
                context.strokeStyle = 'black';
                context.strokeRect(0, 0, this.getWidth(), this.getHeight());
            }
		};
    }
};
