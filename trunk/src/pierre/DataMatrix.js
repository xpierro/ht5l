/**
 * Matrice des données représentant un tableau à double entrée, indexé en
 * x et en y par des labels.
 */

var DataMatrix = function() {
	var width = 0;
	var height = 0;
	
	var xLabels = new Array();
	var yLabels = new Array();
	
	var rows = new Array();
	
	/**
	 * Retourne l'index correspondant à la valeur
	 * @param value La valeur à retrouver
	 * @returns L'index de la valeur
	 */
	var findValueInArray = function(array, value) {
		var index = -1;
		$.each(array, function(i, val) {
			if (value == val) {
				index = i;
				return;
			};
		});
		return index;
	};
	
	this.getWidth = function() {
		return width;
	};
	
	this.getHeight = function() {
		return height;
	};
	
	/**
	 * Spécifie le nom de chaque abscisse
	 */
	this.setXAxisLabels = function(labels) {
		$.each(labels, function(index, value) {
			xLabels.push(value);
		});
		width = xLabels.length;
	};
	
	/**
	 * Spécifie le nom de chaque ordonnée
	 */	
	this.setYAxisLabels = function(labels) {
		$.each(labels, function(index, value) {
			yLabels.push(value);
		});
		height = yLabels.length;
	};
	
	/**
	 * Ajoute un label d'abscisse.
	 */
	this.addXAxisLabel = function(label) {
		xLabels.push(label);
		width += 1;
	};
	
	/**
	 * Ajoute un label d'ordonnée.
	 */
	this.addYAxisLabel = function(label) {
		yLabels.push(label);
		height += 1;
	};
	
	/**
	 * Insère la valeur value dans la matrices, aux coordonnées labélisées
	 * fournies.
	 */
	this.setValue = function(xLabel, yLabel, value) {
		var i = findValueInArray(xLabels, xLabel);
		var j = findValueInArray(yLabels, yLabel);
		if (i != -1 && j != -1) {
			if (!rows[yLabel]) {
				rows[yLabel] = new Array();
			}
			rows[yLabel][xLabel] = value;
		} else {
			throw "Label indéfini";
		}
	};
	
	/**
	 * Retoune la valeur entrée dans la matrice selon les labels en x et y.
	 */
	this.getValueByLabel = function(xLabel, yLabel) {
		if (!rows[yLabel] || !rows[yLabel][xLabel]) {
			throw "Label/Valeur indéfinis : [" + xLabel + ";" + yLabel + "]";
		}
		return rows[yLabel][xLabel];
	};
	
	/**
	 * Retourne la valeur entrée dans la matrice selon ses coordonnées
	 * numériques.
	 */
	this.getValue = function(x, y) {
		return this.getValueByLabel(xLabels[x], yLabels[y]);
	};
	
	/**
	 * Retourne la valeur maximale contenu dans la matrice
	 */
	this.getTopValue = function() {
		var top = this.getValue(0, 0);
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				var value = this.getValue(x, y);
				if (value > top) {
					top = value;
				}
			}
		}
		return top;
	};
	
	/**
	 * Retourne la somme des valeurs d'une ligne, indéxée par un label en y.
	 */
	this.getLineTotal = function(yLabel) {
		if (findValueInArray(yLabels, yLabel) == -1) {
			throw "Label inexistant : " + yLabel;
		}
		var sum = 0;
		var ref = this;
		$.each(xLabels, function(i, xLabel) {
			sum += ref.getValueByLabel(xLabel, yLabel);
		});
		return sum;
	};
	
	/**
	 * Retourne la somme des valeurs d'une colonne indéxée par un  label en x.
	 */
	this.getColumnTotal = function(xLabel) {
		if (findValueInArray(xLabels, xLabel) == -1) {
			throw "Label inexistant : " + xLabel;
		}
		var sum = 0;
		var ref = this;
		$.each(yLabels, function(i, yLabel) {
			sum += ref.getValueByLabel(xLabel, yLabel);
		});
		return sum;
	};
	
	/**
	 * Renvoie la somme de tous les éléments du tableau.
	 */
	this.getTotal = function() {
		var total = 0;
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				var value = this.getValue(x, y);
				total += value;
			}
		}
		return total;
	};
};