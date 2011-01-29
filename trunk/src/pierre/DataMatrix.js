/**
 * Matrice des données représentant un tableau à double entrée, indexé en
 * x et en y par des labels.
 */

var DataMatrix = function(w, h) {
	var width = width;
	var height = height;
	
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
	
	/**
	 * Spécifie le nom de chaque abscisse
	 */
	this.setXAxisLabels = function(labels) {
		$.each(labels, function(index, value) {
			xLabels.push(value);
		});
	};
	
	/**
	 * Spécifie le nom de chaque ordonnée
	 */	
	this.setYAxisLabels = function(labels) {
		$.each(labels, function(index, value) {
			yLabels.push(value);
		});
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
			throw "UndefinedLabel";
		}
	};
	
	/**
	 * Retoune la valeur entrée dans la matrice selon les labels en x et y.
	 */
	this.getValueByLabel = function(xLabel, yLabel) {
		if (!rows[yLabel] || !rows[yLabel][xLabel]) {
			throw "UndefinedLabel";
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
};