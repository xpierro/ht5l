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

    if (canvasRef == null) {
        return null;
    }

    // Scaling par défaut
    this.posMouseX = 0;
    this.posMouseY = 0;
    this.mainX = 0;
    this.mainY = 0;
    this.scale = 1;

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
    if (typeof IDiagram.initialized == "undefined") {
        IDiagram.initialized = true;


        /**
         *    Définit la largeur de la fenêtre du diagramme.
         *    @param width Largeur de la fenêtre
         */
        IDiagram.prototype.setWidth = function(width) {
            this.canvas.setAttribute('width', width);
            this.redraw();
        };

        /**
         *    Retourne la largeur de la fenêtre du diagramme.
         */
        IDiagram.prototype.getWidth = function() {
            return this.canvas.getAttribute('width');
        };

        /**
         *    Définit la hauteur de la fenêtre du diagramme
         *    @param height Hauteur de la fenêtre.
         */
        IDiagram.prototype.setHeight = function(height) {
            this.canvas.setAttribute('height', height);
            this.redraw();
        };

        /**
         *    Retourne la hauteur de la fenêtre du diagramme
         */
        IDiagram.prototype.getHeight = function() {
            return this.canvas.getAttribute('height');
        };

        /**
         * Retourne l'ensemble du tableau de couleurs sur lequel "cycler".
         */
        IDiagram.prototype.getColors = function() {
            if (this.styleMatrix) {
                return this.styleMatrix.getColors();
            } else {
                return new Array('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet');
            }
        };


        /**
         * Charge un fichier de style pour le diagramme.
         * @param styleSource Objet de config de style {colors: ["blue", "red], background: "yellox"}
         */
        IDiagram.prototype.setStyle = function(styleSource) {
            this.styleMatrix = styleSource;
            this.redraw();
        };

        /**
         * Charge les données du diagramme.
         * @param dataMatrix Matrice des données
         */
        IDiagram.prototype.setData = function(dataMatrix) {
            if (dataMatrix) {
                this.data = dataMatrix;
                this.redraw();
            } else {
                var context = this.canvas.getContext('2d');
                context.fillStyle = 'black';
                context.fillText(error, 50, 50);
            }

        };

        /**
         * Retourne le texte le plus longs dans le tableau fournit
         * @param texts Tableau de chaines de characteres
         */
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

        /**
         * Retourne le rectangle encadrant la légende.
         */
        IDiagram.prototype.getLegendRectangle = function() {
            if (this.styleMatrix) {
                return this.styleMatrix.getLegendRectangle();
            } else {
                return {x: 40, y: 475, width: 500, height: 120 };
            }
        };

        /**
         *    Dessine la légende du diagramme.
         */
        IDiagram.prototype.drawLegend = function() {
            var context = this.canvas.getContext('2d');
            // Dessin du rectangle encadrant la légende
            var rectangle = this.getLegendRectangle();
            context.strokeStyle = 'black';
            //context.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

            // Choix des labels composant la légende
            var labels = this.dir == 'column' ? this.data.getColumnLabels() : this.data.getRowLabels();

            // Récupération du plus long label
            var widest = this.getWidestText(labels);

            var colors = this.getColors();
            //Dessin des éléments de la légende.
            var pos = {x: parseInt(rectangle.x), y: parseInt(rectangle.y)}; // Position du pinceau
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
            context.strokeStyle = "black";
            context.beginPath();
            if (this.data.getBottomValue() < 0 || this.data.getTopValue() < 0) {
                context.moveTo(this.yAxisConfig.leftShift, (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2);
                context.lineTo(this.getWidth(), (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2);
            } else {
                context.moveTo(this.yAxisConfig.leftShift, this.getHeight() - this.yAxisConfig.bottomShift);
                context.lineTo(this.getWidth(), this.getHeight() - this.yAxisConfig.bottomShift);
            }
            context.closePath();
            context.stroke();
        };

        /**
         * Dessine le label de la légende en Y du diagramme courant
         */
        IDiagram.prototype.drawYLabelLegend = function() {
            var context = this.canvas.getContext('2d');
            context.fillStyle = "black";
            //context.font = "12pt";
            var yHeight = this.getHeight();
            context.save();
            context.translate(-35, yHeight / 2 - this.yAxisConfig.bottomShift / 2 + context.measureText(this.data.getYLegend()).width / 2);
            context.rotate(-Math.PI / 2);
            context.fillText(this.data.getYLegend(), 0, 50);
            context.restore();
        };

        /**
         *    Dessine les ordonnées du diagramme
         */
        IDiagram.prototype.drawYAxis = function() {
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
            var lengthInterval = null;
            var dataInterval = null;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                var maxTop = this.data.getTopValue() < 0 ? -this.data.getTopValue() : this.data.getTopValue();
                var maxBottom = this.data.getBottomValue() < 0 ? -this.data.getBottomValue() : this.data.getBottomValue();
                var max = maxTop > maxBottom ? maxTop : maxBottom;
                currentValue = max;
                dataInterval = Math.round(2 * max / this.yAxisConfig.nbIntervals);
                lengthInterval = Math.floor(((this.getHeight() - this.yAxisConfig.bottomShift - this.yAxisConfig.topShift) / 2) / (this.yAxisConfig.nbIntervals / 2));
            } else {
                dataInterval = Math.round(currentValue / this.yAxisConfig.nbIntervals);
                lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
            }
            var stepWidth = this.yAxisConfig.stepWidth; // Longueur de la graduation
            var textWidth = 0;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                currentValue = 0;
                var y = 0;
                for (y = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2; y >= this.yAxisConfig.topShift; y -= lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);

                    textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();

                    currentValue += dataInterval;
                }
                currentValue = -dataInterval;
                for (y = (this.getHeight() - this.yAxisConfig.bottomShift + this.yAxisConfig.topShift) / 2 + lengthInterval; y <= this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);

                    textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();
                    currentValue -= dataInterval;
                }
            } else {
                for (y = this.yAxisConfig.topShift; y < this.getHeight() - this.yAxisConfig.bottomShift; y += lengthInterval) {
                    context.moveTo(this.yAxisConfig.leftShift - stepWidth / 2, y);
                    context.lineTo(this.yAxisConfig.leftShift + stepWidth / 2, y);

                    textWidth = context.measureText(currentValue).width;
                    context.fillText(currentValue, this.yAxisConfig.leftShift - textWidth - stepWidth / 2 - 2, y + stepWidth / 2, textWidth);
                    context.stroke();
                    currentValue -= dataInterval;
                }
            }
        };

        /**
         * Renvoie le décalage en y
         */
        IDiagram.prototype.getBottomShift = function() {
            return this.yAxisConfig.bottomShift;
        };

        /**
         * Renvoie le décalage en x
         */
        IDiagram.prototype.getLeftShift = function() {
            return this.yAxisConfig.leftShift;
        };

        /**
         * Renvoie le nombre de pixel par unité en y
         */
        IDiagram.prototype.getPixelPerUnit = function() {
            var lengthInterval = null;
            if (this.data.getTopValue() < 0 || this.data.getBottomValue() < 0) {
                var maxTop = this.data.getTopValue() < 0 ? -this.data.getTopValue() : this.data.getTopValue();
                var maxBottom = this.data.getBottomValue() < 0 ? -this.data.getBottomValue() : this.data.getBottomValue();
                var max = maxTop > maxBottom ? maxTop : maxBottom;
                dataInterval = Math.round(2 * max / this.yAxisConfig.nbIntervals);
                lengthInterval = Math.round(((this.getHeight() - this.yAxisConfig.bottomShift - this.yAxisConfig.topShift) / 2) / (this.yAxisConfig.nbIntervals / 2));
                return lengthInterval / dataInterval;
            } else {
                lengthInterval = (this.getHeight() - this.yAxisConfig.topShift - this.yAxisConfig.bottomShift) / this.yAxisConfig.nbIntervals;
                var dataInterval = Math.round(this.data.getTopValue() / this.yAxisConfig.nbIntervals);
                return lengthInterval / dataInterval;
            }
        };

        /**
         *    Dessine le diagramme.
         */
        IDiagram.prototype.drawDiagram = function() {
        };

        /**
         * Dessine les lignes de visée
         */
        IDiagram.prototype.drawYLines = function() {
        };

        IDiagram.prototype.redraw = function() {
            if (!this.canvas) {
                return;
            }
            var context = this.canvas.getContext('2d');
            if (!this.data) {
                context.fillStyle = 'black';
                context.fillText(error, 50, 50);
            } else {
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
            }
        };

        /**
         * Retourne une couleur au format RGB
         * @param name Nom HTML de la couleur
         */
        IDiagram.prototype.getRGBFromName = function(name) {
            var div = document.createElement("div");
            div.style.color = name;
            document.body.appendChild(div);
            var rgb = window.getComputedStyle(div, null).color;
            document.body.removeChild(div);
            return rgb;
        };

        /**
         * Applique une coordonnée alpha à une couleur
         * @param name Nom de la couleur
         * @param alpha Coordonnée alpha
         */
        IDiagram.prototype.applyAlphaToColor = function(name, alpha) {
            var rgb = this.getRGBFromName(name);
            var rgba = rgb.replace('rgb', 'rgba');
            rgba = rgba.replace(')', ', ' + alpha + ')');
            return rgba;
        };

        /**
         * Fonction abstraite de gestion de l'évènement d'illumination
         * @param mouseEvent Evenement de souris
         */
        IDiagram.prototype.handleAnim = function(mouseEvent) {
        };

        IDiagram.prototype.handleZoom = function(wheelEvent) {
            var mousex = wheelEvent.pageX - this.canvas.offsetLeft;
            var mousey = wheelEvent.pageY - this.canvas.offsetTop;

            if (wheelEvent.wheelDelta < 0) { // Le dézoom réinitialise
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.scale = 1;
                this.mainX = 0;
                this.mainY = 0;
                this.redraw();
            } else {
                var wheel = wheelEvent.wheelDelta / 120;

                var zoom = 1 + wheel / 2;

                this.context.translate(this.mainX, this.mainY);
                this.context.scale(zoom, zoom);
                this.context.translate(
                        -( mousex / this.scale + this.mainX - mousex / ( this.scale * zoom ) ),
                        -( mousey / this.scale + this.mainY - mousey / ( this.scale * zoom ) )
                        );

                this.mainX = ( mousex / this.scale + this.mainX - mousex / ( this.scale * zoom ) );
                this.mainY = ( mousey / this.scale + this.mainY - mousey / ( this.scale * zoom ) );
                this.scale *= zoom;

                this.context.fillStyle = 'white';
                this.context.fillRect(this.mainX, this.mainY, this.getWidth() / this.scale, this.getHeight() / this.scale);
                this.redraw();
            }
        };

        IDiagram.prototype.displayToolTip = function(text, value) {
            this.context.fillStyle = "green";

            // On va dessiner à la vraie position de la souris.
            var mousePosX = (this.posMouseX - this.mainX) * this.scale;
            var mousePosY = (this.posMouseY - this.mainY) * this.scale;
            this.context.save();
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            if (this.getWidth() < this.posMouseX + 15 + (this.context.measureText(text + ": " + parseFloat(value)).width) + 10) {
                    this.context.fillRect(mousePosX - 5 - (this.context.measureText(text + ": " + parseFloat(value)).width) - 10, mousePosY + 10, (this.context.measureText(text + ": " + parseFloat(value)).width) + 10, 20);
                    this.context.fillStyle = "white";
                    this.context.fillText(text + ": " + parseFloat(value), mousePosX - (this.context.measureText(text + ": " + parseFloat(value)).width) - 10, mousePosY + 23);
                } else {
                    this.context.fillRect(mousePosX + 15, mousePosY + 10, (this.context.measureText(text + ": " + parseFloat(value)).width) + 10, 20);
                    this.context.fillStyle = "white";
                    this.context.fillText(text + ": " + parseFloat(value), mousePosX + 20, mousePosY + 23);
                }
                this.context.restore();
        };
    }


    //Inscription de l'évènement d'animation
    if (this.canvas) {
        this.canvas.onmousemove = $.proxy(function(event) {
            this.handleAnim(event);
        }, this);
    }

    $(canvasRef).bind('mousewheel', $.proxy(function(event) {
        this.handleZoom(event);
        return false;
    }, this));

};
