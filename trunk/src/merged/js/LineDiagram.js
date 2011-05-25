/**
 * Classe représentant un diagramme en ligne
 * Conception: Abdourahmane Djigo
 */

/**
 * Constructeur du diagramme en ligne
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 */
var LineDiagram = function(canvasRef, direction) {
	IDiagram.call(this, canvasRef);
	
	if (direction != 'row' && direction != 'column') {
		throw "Direction de lecture invalide : " + direction;
	}
	this.dir = direction;
	this.currentSlice = null;

    this.posMouseX = 0;
	this.posMouseY = 0;

    this.scale = 1;
	this.mainX = 0;
	this.mainY = 0;

	this.circleWidth = 7;

    this.context = this.canvas.getContext('2d');

	if (typeof LineDiagram.initialized == "undefined") {
		LineDiagram.initialized = true;

        /**
         * Dessin du diagramme
         */
		LineDiagram.prototype.drawDiagram = function() {

			var absLabels = null;
            var lineLabels = null;
            if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				lineLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				lineLabels = this.data.getRowLabels();
			}
			if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
				var yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
			} else {
				var yZero = this.getHeight() - this.getBottomShift();
			}
			var currentX = this.getLeftShift() + 20;
			var deltaX = (this.getWidth() - this.getLeftShift()) / (absLabels.length - 1);
			var colors = this.getColors();
			
			var infoNeeded = false;
			var infoBulleLabel;
			var infoBulleValeur;
			
			$.each(lineLabels, $.proxy(function(i, lineLabel){
					this.context.strokeStyle = colors[i];
					var fillColor = colors[i];
				$.each(absLabels, $.proxy(function(j, absLabel) {
					var currentHeight = this.getPixelPerUnit() * this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					var currentY = yZero - currentHeight;
					if (j == 0) {
						this.context.lineCap = 'round';
						this.context.beginPath();
						this.context.moveTo(currentX, currentY);
					} else {
						this.context.lineWidth = 2;
						this.context.lineCap = 'round';
						this.context.lineTo(currentX, currentY);
						this.context.stroke();
					}
					var xLegendPosition = 0;
                    if (j < absLabels.length - 1) {
					    xLegendPosition = currentX - this.context.measureText(absLabel).width / 2;
                    } else {
                        xLegendPosition = this.getWidth() - this.context.measureText(absLabel).width - 1;
                    }
                    if (i = 1) { //TODO: etre sur
                        this.context.fillStyle = 'black'; // TODO: a fixer ailleurs
                        this.context.fillText(absLabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
                    }
		            currentX += deltaX;
				}, this));
				
				currentX = this.getLeftShift() + 20;
				deltaX = (this.getWidth() - this.getLeftShift()) / (absLabels.length - 1);
				colors = this.getColors();	
				
				$.each(absLabels, $.proxy(function(j, absLabel) {
					currentHeight = this.getPixelPerUnit() * this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					currentY = yZero - currentHeight;
					
					var value = this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					
					if (this.currentSlice != null) {
	                	if(this.currentSlice.abs == absLabel && this.currentSlice.color == lineLabel) {
	                    	this.context.fillStyle = fillColor;
	                    	this.context.beginPath();
							this.context.arc(currentX, currentY, this.circleWidth, 0, Math.PI*2, true);
							this.context.closePath();
							this.context.fill();
							this.context.stroke();
	                        infoNeeded = true;
	                        infoBulleLabel = lineLabel;
	                        infoBulleValeur = value;
	                    } 
	                }

					var xLegendPosition = 0;
                    if (j < absLabels.length - 1) {
					    xLegendPosition = currentX - this.context.measureText(absLabel).width / 2;
                    } else {
                        xLegendPosition = this.getWidth() - this.context.measureText(absLabel).width - 1;
                    }
                    if (i = 1) { //TODO: etre sur
                        this.context.fillStyle = 'black'; // TODO: a fixer ailleurs
                        this.context.fillText(absLabel, xLegendPosition , this.getHeight() - this.getBottomShift() + 10);
                    }
		            currentX += deltaX;
				}, this));
				
				currentX = this.getLeftShift() + 20;
				this.context.strokeStyle = 'red';
				currentX = this.getLeftShift() + 20;
				this.context.lineCap = 'round';
			}, this));
			
			if (infoNeeded == true) {
				if (this.getWidth()<this.posMouseX+15+(this.context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10) {
					this.context.fillStyle = "green";
					this.context.fillRect(this.posMouseX-5-(this.context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)-10, this.posMouseY+10, (context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10, 20);
					this.context.fillStyle = "white";
					this.context.fillText(infoBulleLabel+": "+parseFloat(infoBulleValeur), this.posMouseX-(this.context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)-10, this.posMouseY+23);
				} else {
					this.context.fillStyle = "green";
					this.context.fillRect(this.posMouseX+15, this.posMouseY+10, (this.context.measureText(infoBulleLabel+": "+parseFloat(infoBulleValeur)).width)+10, 20);
					this.context.fillStyle = "white";
					this.context.fillText(infoBulleLabel+": "+parseFloat(infoBulleValeur), this.posMouseX+20, this.posMouseY+23);
				}
			} 
		};
		
        LineDiagram.prototype.getRGBFromName = function(name) {
            var div = document.createElement("div");
            div.style.color = name;
            document.body.appendChild(div);
            var rgb = window.getComputedStyle(div, null).color;
            document.body.removeChild(div);
                    return rgb;
        };
		
		LineDiagram.prototype.applyAlphaToColor = function(name, alpha) {
            var rgb = this.getRGBFromName(name);
            var rgba = rgb.replace('rgb', 'rgba');
            rgba = rgba.replace(')', ', ' + alpha + ')');
            return rgba;
        };
		
		LineDiagram.prototype.handleClick = function(clickEvent, that) {
			var mouseX = (clickEvent.pageX - this.canvas.offsetLeft) / that.scale + this.mainX;
            var mouseY = (clickEvent.pageY - this.canvas.offsetTop) / that.scale + this.mainY;
    
			this.posMouseX = mouseX;
			this.posMouseY = mouseY;

			var absLabels = null;
            var lineLabels = null;
            if (this.dir == 'column') {
				absLabels = this.data.getRowLabels();
				lineLabels = this.data.getColumnLabels();
			} else {
				absLabels = this.data.getColumnLabels();
				lineLabels = this.data.getRowLabels();
			}
			if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
				var yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
			} else {
				var yZero = this.getHeight() - this.getBottomShift();
			}
			var currentX = this.getLeftShift() + 20;
			var deltaX = (this.getWidth() - this.getLeftShift()) / (absLabels.length - 1);
			var colors = this.getColors();

            var found = 0;
			$.each(lineLabels, $.proxy(function(i, lineLabel){
					this.context.strokeStyle = colors[i];
					currentX = this.getLeftShift() + 20;
				$.each(absLabels, $.proxy(function(j, absLabel) {
					var currentHeight = this.getPixelPerUnit() * this.data.getValueByLabelAndDirection(lineLabel, absLabel, this.dir);
					var currentY = yZero - currentHeight;
					if (mouseX >= currentX - this.circleWidth && mouseX <= currentX + this.circleWidth
                        && mouseY >= currentY - this.circleWidth && mouseY <= currentY + this.circleWidth) {
                        that.currentSlice = {abs: absLabel, color: lineLabel};
                        that.redraw();
                        found = 1;
                    }
					currentX += deltaX;
				}, this));
			}, this));

            if (that.currentSlice != null && found == 0) {
                that.currentSlice = null;
                that.redraw();
            }
		};

        LineDiagram.prototype.zoom = function(clickEvent, that) {
        	var mousex = clickEvent.pageX  - this.canvas.offsetLeft;
    	    var mousey = clickEvent.pageY  - this.canvas.offsetTop;

    	    if (clickEvent.wheelDelta < 0) {
    	    	this.context.setTransform(1, 0, 0, 1, 0, 0);
    	    	this.scale = 1;
    	    	this.mainX = 0;
    	    	this.mainY = 0;
    	    	this.redraw();
    	    } else {

	    	    var wheel = clickEvent.wheelDelta/120;

	    	    var zoomer = 1 + wheel / 2;

	    	    this.context.translate(this.mainX, this.mainY);
	    	    this.context.scale(zoomer,zoomer);
	    	    this.context.translate(
	    	        -( mousex / this.scale + this.mainX - mousex / ( this.scale * zoomer ) ),
	    	        -( mousey / this.scale + this.mainY - mousey / ( this.scale * zoomer ) )
	    	    );

	    	    this.mainX = ( mousex / this.scale + this.mainX - mousex / ( this.scale * zoomer ) );
	    	    this.mainY = ( mousey / this.scale + this.mainY - mousey / ( this.scale * zoomer ) );
	    	    this.scale *= zoomer;

	    	    this.context.fillStyle = 'white';
				this.context.fillRect(this.mainX, this.mainY, this.getWidth() / this.scale, this.getHeight() / this.scale );
	    	    this.redraw();
    	    }
        };
	}

	var that = this;
    canvasRef.onmousemove = function(event) {
	    that.handleClick(event, that);
    };

    $(canvasRef).bind('mousewheel', function(event) {
    	that.zoom(event, that);
    	return false;
    });
};

// Implémente IDiagram
LineDiagram.prototype = new IDiagram(null);
LineDiagram.prototype.constructor = LineDiagram;