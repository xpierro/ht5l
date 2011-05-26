/**
 * Constructeur de l'histogramme.
 * @param canvasRef Reference vers le canvas
 * @param direction Direction de lecture 2D de la matrice
 * Conception: Ludovic Thueux
 * Corrections: Pierre Collignon et Abdourahmane Djigo
 */
var HistoDiagram = function(canvasRef, direction) {

    if (direction != 'row' && direction != 'column') {
        return;
    }

    IDiagram.call(this, canvasRef);

    this.dir = direction;
    this.currentSlice = null;

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
            if (infoNeeded) {
                this.context.save();
                this.context.setTransform(1, 0, 0, 1, 0, 0);
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
                this.context.restore();
            }
        };

        HistoDiagram.prototype.handleAnim = function(clickEvent) {
            if (this.data) {
                var mouseX = (clickEvent.pageX - this.canvas.offsetLeft) / this.scale + this.mainX;
                var mouseY = (clickEvent.pageY - this.canvas.offsetTop) / this.scale + this.mainY;

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
                                this.currentSlice = {abs: abslabel, color: colorlabel};
                                this.redraw();
                                found = 1;
                            }
                        } else {
                            if (mouseX >= currentX && mouseX <= currentX + barWidth
                                    && mouseY >= yZero && mouseY <= yZero - barHeight) {
                                this.currentSlice = {abs: abslabel, color: colorlabel};
                                this.redraw();
                                found = 1;
                            }
                        }
                        currentX += barWidth;
                    }, this));
                    currentX += shift;
                }, this));

                if (this.currentSlice != null && found == 0) {
                    this.currentSlice = null;
                    this.redraw();
                }
            }
        };
    }
};

// Héritage: chainage des prototypes.
HistoDiagram.prototype = new IDiagram(null);
HistoDiagram.prototype.constructor = HistoDiagram;