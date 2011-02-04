/**
 * Matrice des données représentant un tableau à double entrée indexé par les labels de lignes et colonne
 *             |LabelColonne1|LabelColonne2|
 * ____________|_____________|______________
 * LabelLigne1 |Valeur1......|Valeur2......|
 * ____________|_____________|______________
 * LabelLigne2 |Valeur3......|Valeur4......|
 *
 * Le sens de parcour se fait "en ligne" ou en "colonne". Parcourir en ligne signifie qu'on considère une valeur
 * comme le resultat d'une fonction d'acces de [LabelLigne][LabelColonne] tandis que parcourir en colonne est inverse:
 * [LabelColonne][LabelLigne].
 */

var DataMatrix = function() {
    // Attributs privés
	var rowLabels = new Array();
	var columnLabels = new Array();

	var rows = new Array();

	/**
	 * Prototypage, toutes les methodes définies ici ne seront pas dupliquées
	 * à l'instanciation.
	 */
    if (typeof DataMatrix.initialized == "undefined" ) {
        DataMatrix.initialized = true;

    	/**
    	 * Retourne la largeur de la matrice.
    	 */
    	DataMatrix.prototype.getColumnNumber = function() {
    		return columnLabels.length;
    	};

    	/**
    	 * Retourne la hauteur de la matrice.
    	 */
    	DataMatrix.prototype.getRowNumber = function() {
    		return rowLabels.length;
    	};

    	/**
    	 * Retourne les labels de colonne.
    	 */
    	DataMatrix.prototype.getColumnLabels = function() {
    		return columnLabels;
    	};

    	/**
    	 * Retourne les labels en line.
    	 */
    	DataMatrix.prototype.getRowLabels = function() {
    		return rowLabels;
    	};

    	/**
    	 * Renvoie la somme de tous les éléments du tableau à double entrée.
    	 */
        DataMatrix.prototype.getTotal = function() {
    		var total = 0;
            var that = this;
    		$.each(rowLabels, function(rowIndex, rowLabel) {
                $.each(columnLabels, function(columnIndex, columnLabel) {
                    total += that.getValueByLabel(rowLabel, columnLabel);
                });
            });
    		return total;
    	};

    	/**
    	 * Spécifie le nom de chaque colonne
    	 */
    	DataMatrix.prototype.setColumnLabels = function(labels) {
    		$.each(labels, function(index, value) {
    			columnLabels.push(value);
    		});
    	};

    	/**
    	 * Spécifie le nom de chaque ligne
    	 */
    	DataMatrix.prototype.setRowLabels = function(labels) {
    		$.each(labels, function(index, value) {
    			rowLabels.push(value);
    		});
    	};

    	/**
    	 * Ajoute un label de colonne.
    	 */
    	DataMatrix.prototype.addColumnLabel = function(label) {
    		columnLabels.push(label);
    	};

    	/**
    	 * Ajoute un label de ligne.
    	 */
    	DataMatrix.prototype.addRowLabel = function(label) {
    		rowLabels.push(label);
    	};

    	/**
    	 * Insère la valeur value dans la matrice, aux coordonnées labélisées
    	 * fournies.
    	 */
    	DataMatrix.prototype.setValue = function(rowLabel, columnLabel, value) {
    		if (!rowLabels[rowLabels] || !columnLabels[columnLabel]) {
    			if (!rows[rowLabel]) {
    				rows[rowLabel] = new Array();
    			}
    			rows[rowLabel][columnLabel] = value;
    		} else {
    			throw "Labels indéfinis : " + rowLabel + "," + columnLabel;
    		}
    	};

    	/**
    	 * Retoune la valeur entrée dans la matrice selon les labels.
    	 */
    	DataMatrix.prototype.getValueByLabel = function(rowLabel, columnLabel) {
    		if (!rows[rowLabel] || !rows[rowLabel][columnLabel]) {
    			throw "Label/Valeur indéfinis : " + rowLabel + "," + columnLabel;
    		}
    		return rows[rowLabel][columnLabel];
    	};

        /**
    	 * Retoune la valeur entrée dans la matrice selon les labels de ligne et colonne, selon
    	 * la direction.
         * @param firstLabel Label de ligne si dir == 'line' | Label de colonne si dir == 'column'
         * @param secondLabel Label de colonne si dir == 'line' | Label de ligne si dir == 'line'
    	 */
    	DataMatrix.prototype.getValueByLabelAndDirection = function(firstLabel, secondLabel, dir) {
    		if (!rows[firstLabel] && !rows[secondLabel]) {
    			throw "Label/Valeur indéfinis : " + firstLabel + ";" + secondLabel;
    		}
    		if (dir == 'line') {
    			return rows[firstLabel][secondLabel];
    		} else {
    			return rows[secondLabel][firstLabel];
    		}
    	};

    	/**
    	 * Retourne la valeur entrée dans la matrice selon ses coordonnées
    	 * numériques.
    	 */
    	DataMatrix.prototype.getValue = function(x, y) {
    		return this.getValueByLabel(rowLabels[x], columnLabels[y]);
    	};

    	/**
    	 * Retourne la valeur maximale contenu dans la matrice
    	 */
    	DataMatrix.prototype.getTopValue = function() {
    		var top = this.getValue(0, 0);
    		var that = this;
            $.each(rowLabels, function(rowIndex, rowLabel) {
                $.each(columnLabels, function(columnIndex, columnLabel) {
                    var currentValue = that.getValueByLabel(rowLabel, columnLabel);
                    if (currentValue > top) {
                        top = currentValue;
                    }
                });
            });
    		return top;
    	};

    	/**
    	 * Retourne la somme des valeurs d'une ligne.
    	 */
    	DataMatrix.prototype.getRowTotal = function(rowLabel) {
    		if (!rowLabels[rowLabel]) {
                throw "Label inexistant : " + rowLabel;
            }
    		var sum = 0;
    		var that = this;
    		$.each(columnLabels, function(i, columnLabel) {
    			sum += that.getValueByLabel(rowLabel, columnLabel);
    		});
    		return sum;
    	};

    	/**
    	 * Retourne la somme des valeurs d'une colonne.
    	 */
    	DataMatrix.prototype.getColumnTotal = function(columnLabel) {
    		if (columnLabels[columnLabel]) {
                throw "Label inexistant : " + columnLabel;
            }
    		var sum = 0;
    		var that = this;
    		$.each(rowLabels, function(i, rowLabel) {
    			sum += that.getValueByLabel(rowLabel, columnLabel);
    		});
    		return sum;
    	};
    }
};