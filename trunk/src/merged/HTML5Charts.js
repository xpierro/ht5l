/**
 * Charge tous les scripts nécessaire au fonctionnement de la biblioth?que
 * Conception: Pierre Collignon.
 */

// On définit les fichiers:
var jsFiles = new Array("DataMatrix.js", "IStyleSource.js", "InternalStyleSource.js", "ExternalStyleSource.js",
		"StyleMatrix.js", "IDataSource.js", "InternalDataSource.js","ExternalDataSource.js","ConnectorDataSource.js",
		"IDiagram.js", "PieDiagram.js", "HistoDiagram.js", "LineDiagram.js","Histo3DDiagram.js", "window_alert.js",
		"testMerge.js");

/**
 * Charge un script
 * @param url Url du script
 */
var loadScript = function(url) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
};

// On charge tout (sans utiliser JQuery qu'on insère nous meme)
for (var i = 0; i < jsFiles.length; i++) {
	loadScript(jsFiles[i]);
}