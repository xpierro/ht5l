var IDiagramme = function() {

	/*
	*	Définit la largeur de la fenêtre du diagramme
	*	Argument : 
			- x : Nombre
	*/
	this.setWindowWidth = function(x){};
	
	/*
	*	Retourne la largeur de la fenêtre du diagramme
	*/
	this.getWindowWidth = function(){};
	
	/*
	*	Définit la hauteur de la fenêtre du diagramme
	*	Argument :
	*		- y : Nombre
	*/
	this.setWindowHeight = function(y){};
	
	/*
	*	Retourne la hauteur de la fenêtre du diagramme
	*/
	this.getWindowHeight = function(){};
	
	/*
	*	Définit la couleur du fond du diagramme (à la limite on peut ajouter un argument pour définir la transparence)
	*	Argument : 
	*		- color : couleur désirée (codé en hexa?)
	*/
	this.setBackgroundColor = function(color){};
	
	/*
	*	Retourne la couleur du fond du diagramme
	*/
	this.getBackgroundColor = function(){};
	
	/*
	*	Dessine la légende du diagramme
	*	Argument :
	*		- Tableau : tableau a deux dimensions avec paires couleur/nom donnée
	*/
	this.drawLegend = function(tableau){};
	
	/*
	*	Dessine les abscisses et ordonnées des diagrammes ligne et histogrammes
	*	Argument :
	*		- Tableau : tableau a deux dimensions, une colonne pour les abscisses, l'autre pour les ordonnées
	*/
	this.drawAxis = function(tableau){};
	
	/*
	*	Dessine le diagramme
	*	Argument :
	*		- Tableau : tableau a deux dimensions contenant nom donnée/valeur donnée/couleur par ligne 
	*	(en gros un tableau de taille[x][3] où x est le nombre de données) 
	*/
	this.drawDiagram = function(tableau){};
}
