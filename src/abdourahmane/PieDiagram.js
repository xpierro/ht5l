/**
 * Constructeur du diagramme camembert.
 * Raffine IDiagram
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 *
 * Conception: Pierre Collignon
 * Commentaires: Maxence Luce
 */
var PieDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);

	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	this.currentSlice = -1;
	this.radius = -1;
	this.parts = new Array();
	this.center = {x: 0, y: 0};
	
	if (typeof PieDiagram.initialized == "undefined") {
		PieDiagram.initialized = true;
		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};

		PieDiagram.prototype.drawAxis = function() {
			// Vide
		};
		
		PieDiagram.prototype.refreshParts = function() {
			var total = this.data.getTotal();
			this.parts = new Array();
			if (this.dir == 'row') { // Pourcentage de chaque ligne
				$.each(this.data.getRowLabels(), $.proxy(function(i, rowLabel) {
					this.parts.push({value: this.data.getRowTotal(rowLabel) / total});
					
				}, this));
			} else {
				$.each(this.data.getColumnLabels(), $.proxy(function(i, columnLabel) {
					this.parts.push({value: this.data.getColumnTotal(columnLabel) / total});
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
		
		PieDiagram.prototype.handleClick = function(clickEvent, that) {
			var mouseX = clickEvent.pageX - this.canvas.offsetLeft;
			var mouseY = clickEvent.pageY - this.canvas.offsetTop;

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
		
		PieDiagram.prototype.getRGBFromName = function(name) {
			var div = document.createElement("div");
			div.style.color = name;
			document.body.appendChild(div);
			var rgb = window.getComputedStyle(div, null).color;
			document.body.removeChild(div);
			return rgb;
		};
		
		PieDiagram.prototype.applyAlphaToColor = function(name, alpha) {
			var rgb = this.getRGBFromName(name);
			var rgba = rgb.replace('rgb', 'rgba');
			rgba = rgba.replace(')', ', ' + alpha + ')');
			return rgba;
		}
		
		/**
		 * Dessin du diagramme en camembert.
		 */
		PieDiagram.prototype.drawDiagram = function() {
			var context = this.canvas.getContext('2d');
			var height = this.getHeight();

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
			$.each(this.parts, $.proxy(function(i, part) {
				if (i == that.currentSlice) {
					context.fillStyle = this.applyAlphaToColor(colors[i < colors.length ? i : i % colors.length], .5);
				} else {
					context.fillStyle = this.applyAlphaToColor(colors[i < colors.length ? i : i % colors.length], 1);
				}
				context.beginPath();
					context.arc(this.center.x, this.center.y, this.radius, part['startArc'], part['endArc'], true);
                    // /!\ Indispensable pour avoir une part complete.
					context.lineTo(this.center.x, this.center.y);
				context.closePath();
				context.fill();

				// On utilise comme angle d'écriture du texte le milieu d'une part
				var textArc = part['startArc'] - (2 * Math.PI) * part['value'] / textConfig.distanceFromStart;
				// La position est celle du cercle trigo multipliée par le zoom (rayon plus grand que 1) puis translatée par le centre (> 0,0)
				var xPos = Math.cos(textArc) * this.radius * textConfig.positionOnRadius + this.center.x;
				// L'axe y est inversé par rapport au cercle trigo classique et l'angle est aussi inversé
				//TODO: trouver la bonne combinaison pour avoir l'angle orienté avec cohérence
				var yPos = height - (Math.sin(-textArc) * this.radius * textConfig.positionOnRadius + this.center.y);
				context.fillStyle = "white"; // TODO: a fixer quelque part
				context.fillText(parseFloat(part['value'] * 100).toFixed(2) + "%", xPos, yPos);

			}, this));
		};
	}
};

// Héritage: chainage des prototypes.
PieDiagram.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver mieux
PieDiagram.prototype.constructor = PieDiagram;
