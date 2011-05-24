/**
 * Classe représentant un diagramme camembert.
 * Raffine IDiagram
 * Conception: Pierre Collignon
 * Commentaires: Maxence Luce
 */

/**
 * Constructeur du diagramme camembert.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var PieDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

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
	
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	this.currentSlice = -1;
	this.radius = -1;
	this.parts = new Array();
	this.center = {x: 0, y: 0};
	
	this.posMouseX = 0;
	this.posMouseY = 0;
	
	if (typeof PieDiagram.initialized == "undefined") {
		PieDiagram.initialized = true;
		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};

		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};

		PieDiagram.prototype.drawYLabelLegend = function() {
			// Vide
		};
		
		PieDiagram.prototype.refreshParts = function() {
			var total = this.data.getTotal();
			this.parts = new Array();
			if (this.dir == 'row') { // Pourcentage de chaque ligne		
				$.each(this.data.getRowLabels(), $.proxy(function(i, rowLabel) {
					this.parts.push({value: this.data.getRowTotal(rowLabel) / total, label: rowLabel}); // value=Pourcentage, label=Sujet (par exemple Google.com, etc)
				}, this));
			} else {
				$.each(this.data.getColumnLabels(), $.proxy(function(i, columnLabel) {
					this.parts.push({value: this.data.getColumnTotal(columnLabel) / total, label: columnLabel}); // value=Pourcentage, label=Sujet (par exemple Google.com, etc)
				},this));
			}
			var startArc = -Math.PI / 2;
			var endArc;
            // TODO: faire un test de tous les cas possible + légende a tailler selon width/height pas que rect
			this.radius = (this.getHeight() > this.getWidth() ? this.getWidth() : this.getHeight()) / 2.5 - 10;
            this.radius = this.radius > 0 ? this.radius : 0;
			this.center = {x: this.getWidth() / 2, y: this.getHeight() / 2};
			$.each(this.parts, function(i, part) {
				part['startArc'] = startArc;
				part['endArc'] = startArc - (2 * Math.PI) * part['value'];
				startArc = part['endArc'];
			});
		};

        /**
         * Gère les évènements souris
         * @param clickEvent Evenement de souris
         * @param that Diagramme camembert en court de surlignage.
         */
		PieDiagram.prototype.handleClick = function(clickEvent, that) {
			var mouseX = clickEvent.pageX - this.canvas.offsetLeft;
			var mouseY = clickEvent.pageY - this.canvas.offsetTop;

			this.posMouseX = mouseX;
			this.posMouseY = mouseY;

			var xFromCenter = mouseX - that.center.x;
			var yFromCenter = mouseY - that.center.y;
			var distanceFromCenter = 
				Math.sqrt(Math.pow(Math.abs(xFromCenter), 2)
					    + Math.pow(Math.abs(yFromCenter), 2));

			if (distanceFromCenter <= that.radius) {
				var clickAngle = -Math.atan2(yFromCenter, xFromCenter);
				if (clickAngle < 0) {
					clickAngle += 2 * Math.PI;
				}
				clickAngle *= -1;
				if (clickAngle <= 0 && clickAngle > -Math.PI / 2) {
					clickAngle -= 2 * Math.PI;
				} 
				
				for ( var slice in that.parts) {
					//alert('start : ' + that.parts[slice]['startArc'] + '- end : '
						//	+ that.parts[slice]['endArc'] + ' - current: ' + clickAngle);
					if (clickAngle <= that.parts[slice]['startArc']
							&& clickAngle >= that.parts[slice]['endArc']) {
						that.currentSlice = slice;
						
						that.redraw();
						return;
					}
				}
			}
			if (that.currentSlice != -1) {
				that.currentSlice = -1;
				that.redraw();
			}
		};

        /**
         * Retourne une couleur RGB à partir d'un nom HTML
         * @param name Nom HTML d'une couleur.
         */
		PieDiagram.prototype.getRGBFromName = function(name) {
			var div = document.createElement("div");
			div.style.color = name;
			document.body.appendChild(div);
			var rgb = window.getComputedStyle(div, null).color;
			document.body.removeChild(div);
			return rgb;
		};

        /**
         * Applique une coordonnée alpha à une couleur RGB
         * @param name  Nom HTML
         * @param alpha Coordonnée alpha
         */
		PieDiagram.prototype.applyAlphaToColor = function(name, alpha) {
			var rgb = this.getRGBFromName(name);
			var rgba = rgb.replace('rgb', 'rgba');
			rgba = rgba.replace(')', ', ' + alpha + ')');
			return rgba;
		};
		
		/**
		 * Dessin du diagramme en camembert.
		 */
			PieDiagram.prototype.drawDiagram = function() {
				var context = this.canvas.getContext('2d');
				var height = this.getHeight();
		if (!(this.data.getTopValue() > 0 && this.data.getBottomValue() < 0)) {

				var total = this.data.getTotal();

				//TODO: gérer les couleurs
				var colors = this.getColors();
				// TODO: faire un test de tous les cas possible + légende a tailler selon width/height pas que rect
				this.radius = (this.getHeight() > this.getWidth() ? this.getWidth() : this.getHeight()) / 2.5 - 10;
	            this.radius = this.radius > 0 ? this.radius : 0;
				this.center = {x: this.getWidth() / 2, y: this.getHeight() / 2};
				var textConfig = { // TODO: faire mieux
					positionOnRadius: 0.75,
					distanceFromStart: 2
				};
				this.refreshParts();
				var that = this;
				var infoBullePercent;
				var infoBulleLabel;
				var infoNeeded = false;
				
				$.each(this.parts, $.proxy(function(i, part) {
					if (i == that.currentSlice) {
						context.fillStyle = this.applyAlphaToColor(colors[i < colors.length ? i : i % colors.length], .5);
						infoBullePercent = part['value'];
						infoBulleLabel = part['label'];
						infoNeeded = true;
					} else {
						context.fillStyle = this.applyAlphaToColor(colors[i < colors.length ? i : i % colors.length], 1);
					}
					context.beginPath();
						context.arc(this.center.x, this.center.y, this.radius, part['startArc'], part['endArc'], true);
	                    // /!\ Indispensable pour avoir une part complete.
						context.lineTo(this.center.x, this.center.y);
					context.closePath();
					context.fill();
				}, this));
				
				$.each(this.parts, $.proxy(function(i, part) {

					// On utilise comme angle d'écriture du texte le milieu d'une part
					var textArc = part['startArc'] - (2 * Math.PI) * part['value'] / textConfig.distanceFromStart;
					// La position est celle du cercle trigo multipliée par le zoom (rayon plus grand que 1) puis translatée par le centre (> 0,0)
					var xPos = Math.cos(textArc) * this.radius * textConfig.positionOnRadius + this.center.x;
					// L'axe y est inversé par rapport au cercle trigo classique et l'angle est aussi inversé
					//TODO: trouver la bonne combinaison pour avoir l'angle orienté avec cohérence
					var yPos = height - (Math.sin(-textArc) * this.radius * textConfig.positionOnRadius + this.center.y);
					context.fillStyle = "white"; // TODO: a fixer quelque part
					context.fillText(parseFloat(part['value'] * 100).toFixed(2) + "%", xPos-(context.measureText(parseFloat(part['value'] * 100).toFixed(2) + "%").width)/2, yPos);

				}, this));
				if (infoNeeded == true) {
					context.fillStyle = "green";
					context.fillRect(this.posMouseX + 15, this.posMouseY + 10, (context.measureText(infoBulleLabel + ": " + parseFloat(infoBullePercent * 100).toFixed(2) + "%").width) + 10, 20);
					context.fillStyle = "white";
					context.fillText(infoBulleLabel + ": " + parseFloat(infoBullePercent * 100).toFixed(2) + "%", this.posMouseX + 20, this.posMouseY + 23);
				} 
			} else {
				context.fillStyle = "black";
				context.fillText("Impossible de dessiner ce diagramme s'il y a des valeurs négatives et positives", 50, 50);
			}
	}
    var that = this;
    canvasRef.onmousemove = function(event) {
	    that.handleClick(event, that);
    };
	}
};

// Implémente IDiagram
PieDiagram.prototype = new IDiagram(null);
PieDiagram.prototype.constructor = PieDiagram;