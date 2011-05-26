/**
 * Charge tous les scripts nécessaire au fonctionnement de la biblioth?que
 * Conception: Pierre Collignon.
 */

// On définit les fichiers:
var jsFiles = new Array("js/DataMatrix.js", "js/IStyleSource.js", "js/InternalStyleSource.js", "js/ExternalStyleSource.js",
        "js/StyleMatrix.js", "js/IDataSource.js", "js/InternalDataSource.js", "js/ExternalDataSource.js", "js/ConnectorDataSource.js",
        "js/IDiagram.js", "js/PieDiagram.js", "js/HistoDiagram.js", "js/LineDiagram.js", "js/Histo3DDiagram.js",
        "js/testMerge.js");

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