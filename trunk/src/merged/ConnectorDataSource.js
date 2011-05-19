/**
 * Classe qui crée un connecteur de source de données.
 * Conception: Lyes Kimouche
 */

/**
 * Constructeur d'un connecteur
 * @param loadData Fonction servant à charger les données.
 * @param getDataMatrix Fonction retournant une dataMatrix correspondant aux données chargées.
 */
var ConnectorDataSource = function(loadData, getDataMatrix) {
	IDataSource.call(this);
	ConnectorDataSource.prototype.loadData = loadData;
	ConnectorDataSource.prototype.getDataMatrix = getDataMatrix;
};

/**
 * Implémente IDataSource
 */
ConnectorDataSource.prototype = new IDataSource();
ConnectorDataSource.prototype.constructor = ConnectorDataSource;
