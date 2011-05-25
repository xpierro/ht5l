/**
 * Constructeur de l'histogramme.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var HistoDiagram = function(canvasRef, direction) {
    IDiagram.call(this, canvasRef);

    try {
        if (canvasRef == null) {
            throw "refCanvas null"
        }
        if (direction == null) {
            throw "dir null"
        }
        if (direction != 'row' && direction != 'column') {
            throw "unknown dir"
        }
    } catch(e) {
        if (e == "refCanvas null") {
            window_alert("Erreur de données", "La référence du canvas ne peut être nulle")
        }
        if (e == "dir null") {
            window_alert("Erreur de données", "La direction du diagramme doit être précisée");
        }
        if (e == "unknown dir") {
            window_alert("Erreur de lecture", "Direction de lecture invalide")
        }
    }
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
    this.context = this.canvas.getContext('2d');

    if (typeof HistoDiagram.initialized == "undefined") {
        HistoDiagram.initialized = true;
        /**
         * Dessin de l'histogramme.
         */
        HistoDiagram.prototype.drawDiagram = function() {


            var shift = 5; // Décalage entre deux ensembles en abscisse
            var firstShift = 20; // Premier décalage
            var currentX = this.getLeftShift() + firstShift; // Position en x sur le canvas du pinceau

            // Calcul des ensemble servant d'abscisse et de couleur selon la direction de parcours
            // du tableau de données
            var absLabels = null;
            var colorLabels = null;
            if (this.dir == 'column') {
                absLabels = this.data.getRowLabels();
                colorLabels = this.data.getColumnLabels();
            } else {
                absLabels = this.data.getColumnLabels();
                colorLabels = this.data.getRowLabels();
            }

            var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse

            // Largeur d'une barre
            var barWidth = ((this.getWidth() - currentX - globalShift)
                    / (this.data.getColumnNumber() * this.data.getRowNumber()));

            var yZero = null;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
            } else {
                yZero = this.getHeight() - this.getBottomShift();
            }

            var infoBulleValeur;
            var infoBulleLabel;
            var infoNeeded = false;

            $.each(absLabels, $.proxy(function(i, abslabel) {
                $.each(colorLabels, $.proxy(function(j, colorlabel) {
                    var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
                    var color = this.getColors()[j < this.getColors().length ? j : j % this.getColors().length];
                    if (this.currentSlice != null) {
                        if (this.currentSlice.abs == abslabel && this.currentSlice.color == colorlabel) {
                            color = this.applyAlphaToColor(this.getColors()[j < this.getColors().length ? j : j % this.getColors().length], .5);
                            infoNeeded = true;
                            infoBulleLabel = colorlabel;
                            infoBulleValeur = value;
                        } else {
                            color = this.applyAlphaToColor(this.getColors()[j < this.getColors().length ? j : j % this.getColors().length], 1);
                        }
                    }

                    var barHeight = this.getPixelPerUnit() * value;
                    this.context.fillStyle = color;
                    this.context.fillRect(currentX,
                            yZero - barHeight,
                            barWidth,
                            barHeight);
                    currentX += barWidth;
                }, this));
                var xLegendPosition = firstShift + this.getLeftShift() + (i * 5) + (i * barWidth * colorLabels.length)
                        + ((barWidth * colorLabels.length) / 2) - this.context.measureText(abslabel).width / 2;
                this.context.fillStyle = 'black'; // TODO: a fixer ailleurs
                this.context.fillText(abslabel, xLegendPosition, this.getHeight() - this.getBottomShift() + 10);
                currentX += shift;
            }, this));
            if (infoNeeded == true) {
                if (this.getWidth() < this.posMouseX + 15 + (this.context.measureText(infoBulleLabel + ": " + parseFloat(infoBulleValeur)).width) + 10) {
                    this.context.fillStyle = "green";
                    this.context.fillRect(this.posMouseX - 5 - (this.context.measureText(infoBulleLabel + ": " + parseFloat(infoBulleValeur)).width) - 10, this.posMouseY + 10, (this.context.measureText(infoBulleLabel + ": " + parseFloat(infoBulleValeur)).width) + 10, 20);
                    this.context.fillStyle = "white";
                    this.context.fillText(infoBulleLabel + ": " + parseFloat(infoBulleValeur), this.posMouseX - (this.context.measureText(infoBulleLabel + ": " + parseFloat(infoBulleValeur)).width) - 10, this.posMouseY + 23);
                } else {
                    this.context.fillStyle = "green";
                    this.context.fillRect(this.posMouseX + 15, this.posMouseY + 10, (this.context.measureText(infoBulleLabel + ": " + parseFloat(infoBulleValeur)).width) + 10, 20);
                    this.context.fillStyle = "white";
                    this.context.fillText(infoBulleLabel + ": " + parseFloat(infoBulleValeur), this.posMouseX + 20, this.posMouseY + 23);
                }
            }
        };


        HistoDiagram.prototype.getRGBFromName = function(name) {
            var div = document.createElement("div");
            div.style.color = name;
            document.body.appendChild(div);
            var rgb = window.getComputedStyle(div, null).color;
            document.body.removeChild(div);
            return rgb;
        };

        HistoDiagram.prototype.applyAlphaToColor = function(name, alpha) {
            var rgb = this.getRGBFromName(name);
            var rgba = rgb.replace('rgb', 'rgba');
            rgba = rgba.replace(')', ', ' + alpha + ')');
            return rgba;
        };

        HistoDiagram.prototype.handleClick = function(clickEvent, that) {
            if (that.data) {
                var mouseX = (clickEvent.pageX - this.canvas.offsetLeft) / that.scale + this.mainX;
                var mouseY = (clickEvent.pageY - this.canvas.offsetTop) / that.scale + this.mainY;

                this.posMouseX = mouseX;
                this.posMouseY = mouseY;

                var shift = 5; // Décalage entre deux ensembles en abscisse
                var firstShift = 20; // Premier décalage
                var currentX = this.getLeftShift() + firstShift; // Position en x sur le canvas du pinceau

                // Calcul des ensemble servant d'abscisse et de couleur selon la direction de parcours
                // du tableau de données
                var absLabels = null;
                var colorLabels = null;
                if (this.dir == 'column') {
                    absLabels = this.data.getRowLabels();
                    colorLabels = this.data.getColumnLabels();
                } else {
                    absLabels = this.data.getColumnLabels();
                    colorLabels = this.data.getRowLabels();
                }

                var globalShift = (absLabels.length - 1) * shift; // Somme des décalages entre deux ensembles en abscisse

                // Largeur d'une barre
                var barWidth = ((this.getWidth() - currentX - globalShift)
                        / (this.data.getColumnNumber() * this.data.getRowNumber()));
                var yZero = 0;
                if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                    yZero = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2;
                } else {
                    yZero = this.getHeight() - this.getBottomShift();
                }

                var found = 0;
                $.each(absLabels, $.proxy(function(i, abslabel) {
                    $.each(colorLabels, $.proxy(function(j, colorlabel) {
                        var value = this.data.getValueByLabelAndDirection(colorlabel, abslabel, this.dir);
                        var barHeight = this.getPixelPerUnit() * value;
                        if (barHeight > 0) {
                            if (mouseX >= currentX && mouseX <= currentX + barWidth
                                    && mouseY >= yZero - barHeight && mouseY <= yZero) {
                                that.currentSlice = {abs: abslabel, color: colorlabel};
                                that.redraw();
                                found = 1;
                            }
                        } else {
                            if (mouseX >= currentX && mouseX <= currentX + barWidth
                                    && mouseY >= yZero && mouseY <= yZero - barHeight) {
                                that.currentSlice = {abs: abslabel, color: colorlabel};
                                that.redraw();
                                found = 1;
                            }
                        }
                        currentX += barWidth;
                    }, this));
                    currentX += shift;
                }, this));

                if (that.currentSlice != null && found == 0) {
                    that.currentSlice = null;
                    that.redraw();
                }
            }
        };

        HistoDiagram.prototype.zoom = function(clickEvent, that) {
            var mousex = clickEvent.pageX - this.canvas.offsetLeft;
            var mousey = clickEvent.pageY - this.canvas.offsetTop;

            if (clickEvent.wheelDelta < 0) {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.scale = 1;
                this.mainX = 0;
                this.mainY = 0;
                this.redraw();
            } else {

                var wheel = clickEvent.wheelDelta / 120;

                var zoomer = 1 + wheel / 2;

                this.context.translate(this.mainX, this.mainY);
                this.context.scale(zoomer, zoomer);
                this.context.translate(
                        -( mousex / this.scale + this.mainX - mousex / ( this.scale * zoomer ) ),
                        -( mousey / this.scale + this.mainY - mousey / ( this.scale * zoomer ) )
                        );

                this.mainX = ( mousex / this.scale + this.mainX - mousex / ( this.scale * zoomer ) );
                this.mainY = ( mousey / this.scale + this.mainY - mousey / ( this.scale * zoomer ) );
                this.scale *= zoomer;

                this.context.fillStyle = 'white';
                this.context.fillRect(this.mainX, this.mainY, this.getWidth() / this.scale, this.getHeight() / this.scale);
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

// Héritage: chainage des prototypes.
HistoDiagram.prototype = new IDiagram(null); // TODO: on répète deux fois, trouver mieux
HistoDiagram.prototype.constructor = HistoDiagram;