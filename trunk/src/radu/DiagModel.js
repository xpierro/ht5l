/**
 * version 1.0 du modele de la diagramme
 * 
 * @author Radu POPICA
 */

function DiagModel() {
	
	this.observers = new ArrayList();

	/*
	 * On implemente les methodes necessaires afin de rendre le modele
	 * Observable
	 */

	DiagModel.prototype.notifyObservers = function(context) {
		var m_count = this.observers.getLength();
		for ( var i = 0; i < m_count; i++)
			this.observers.getElement(i).update(context);
	};

	DiagModel.prototype.attach = function(observer) {
		if (!observer.update)
			throw 'invalid parameter : observer';

		this.observers.addElement(observer);
	};

	DiagModel.prototype.dettachObserver = function(observer) {
		if (!observer.update)
			throw 'invalid parameter : observer';
		this.observers.removeElement(this.observers.getIndex(observer, 0));
	};
	
	/*
	 * On implemente les methodes liés à la 
	 */
}
