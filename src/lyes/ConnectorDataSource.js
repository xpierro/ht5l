var ConnectorDataSource = function(loadData, getDataMatrix) {
	IDataSource.call(this);
	ConnectorDataSource.prototype.loadData = loadData;
	ConnectorDataSource.prototype.getDataMatrix = getDataMatrix;
};

// Héritage: chainage des prototypes.
ConnectorDataSource.prototype = new IDataSource(); // TODO: on répète deux
													// fois, trouver mieux
ConnectorDataSource.prototype.constructor = ConnectorDataSource;
