/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var HistoDiagramme = function(canvasRef, direction) {
	IDiagramme.call(this, canvasRef);

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
		var top = this.data.getTopValue();
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

        function array_search(what, where){
            var index_du_tableau=-1
            for(elt in where){
                index_du_tableau++;
			    if (where[elt]==what){
                    return index_du_tableau
                }
	    	 }
	        index_du_tableau=-1;
	        return index_du_tableau
        }

		/**
		 * Dessin de l'histogramme.
		 */
		HistoDiagramme.prototype.drawDiagram = function() {
			this.drawAxis();

			var context = this.canvas.getContext('2d');
			//var width = this.getWidth();
			var height = this.getHeight();

			var total = this.data.getTotal();
			var tableauXLabels = new Array();
            var tableauYLabels = new Array();
            var tableau = new Array();
			var that = this;
                //Remplissage d'un tableau contenant les YLabels
				$.each(this.data.getYLabels(), function(i, yLabel) {
					var i = 0;
                    for (i = 0; i < that.data.getYLabels().length; i++) {
                        var val = that.data.getYLabels()[i];
                        if (val != "undefined") {
                            tableauXLabels.push(val);
                        }
                    }
                    tableauXLabels.reverse();
				});

                var sumXLabels = 0;
                for (var i = 0; i < tableauXLabels.length; i++) {
                    sumYLabels++;
                }
                // alert("sumXLabels" + sumXLabels);

                //Remplissage d'un tableau contenant les XLabels
				$.each(this.data.getXLabels(), function(i, xLabel) {
					var i = 0;
                    for (i = 0; i < that.data.getXLabels().length; i++) {
                        var val = that.data.getXLabels()[i];
                        if (val != "undefined") {
                            tableauYLabels.push(val);
                        }
                    }
                    tableauYLabels.reverse();
				});

                var sumYLabels = 0;
                for (var i = 0; i < tableauYLabels.length; i++) {
                    sumYLabels++;
                }
               // alert("sumYLabels" + sumYLabels);

            //Remplissage du tableau contenant les valeurs correspondants à chaque XLabels et YLabels
            for (var i = 0; i < tableauXLabels.length; i++) {
                for (var j = 0; j < tableauYLabels.length; j++) {
                    tableau.push(that.data.getValueByLabel(tableauYLabels[j], tableauXLabels[i]));
                }
            }

			tableau = tableau.reverse();

            // Dessin du diagramme
            var maxTableau = that.data.getTopValue();
			var nbBar = 0;
			var i = 0;
            var sqrtTableau = Math.sqrt(tableau.length);
			while(i < sqrtTableau) {
                alert(tableau.length + "   " + Math.sqrt(tableau.length));
				var element = tableau.pop();
				context.fillStyle = that.getColors()[0];
               // alert(element);
				context.fillRect(70 + 20 * nbBar * 2, 450 - element/maxTableau * 450, 20, element/maxTableau * 450);
				nbBar++;
				i++;
			}
		};
	}
};

// Héritage: chainage des prototypes.
HistoDiagramme.prototype = new IDiagramme(null); // TODO: on répète deux fois, trouver mieux
HistoDiagramme.prototype.constructor = HistoDiagramme;
