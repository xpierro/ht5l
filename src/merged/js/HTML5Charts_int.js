/**
 * Charge tous les scripts n�cessaire au fonctionnement de la biblioth?que
 * Conception: Pierre Collignon.
 */

// On d�finit les fichiers:
var jsFiles = new Array("js/DataMatrix.js", "js/IStyleSource.js", "js/InternalStyleSource.js", "js/ExternalStyleSource.js",
		"js/StyleMatrix.js", "js/IDataSource.js", "js/InternalDataSource.js","js/ExternalDataSource.js","js/ConnectorDataSource.js",
		"js/IDiagram.js", "js/PieDiagram.js", "js/HistoDiagram.js", "js/LineDiagram.js","js/Histo3DDiagram.js", "js/window_alert.js",
		"js/testMerge_int.js");

var error = new String();
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

// On charge tout (sans utiliser JQuery qu'on ins?re nous meme)
for (var i = 0; i < jsFiles.length; i++) {
	loadScript(jsFiles[i]);
}