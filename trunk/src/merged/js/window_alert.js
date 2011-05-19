function window_alert(title, msg) {
	var tit = title;
	var ms = msg;
	var body = document.body;
	var me = document.getElementById('first');
	var chaine ="<div id='first' onmousedown='start_drag(document.getElementById(first), event);' style='background-color: rgb(14, 120, 199); width: 300px; height: 150px; left: 500px; top: 200px; position: absolute;'>";
	chaine += "<button style='float: right; color: white; background-color: red;' onclick='hidden_div();'>X</button>";
	chaine += "<p>" + title + "</p>";
	chaine += "<div id='secund' style='background-color: rgb(231, 235, 150); width: 300px; height: 100px; left: 0px; top: 50px; position: absolute;'>";
	chaine += "<p style='text-align: center;'>" + msg + "</p>";
	chaine += "</div>";
	chaine += "</div>";
    if (body != null) {
	    body.innerHTML = chaine;
    }
}

function hidden_div() {
	document.getElementById('first').setAttribute('style', 'visibility: hidden');
}

var dragged = null;


function start_drag(objet,event) {
  dragged = document.getElementById('first'); 
}

function drag_onmousemove(event) {
  if (dragged) {
    var x = event.clientX;
    var y = event.clientY;
    dragged.style.position = 'absolute';
    dragged.style.left = x + 'px';
    dragged.style.top = y + 'px';
  }
}

function drag_onmouseup(event) {
  dragged = null;
}

function addEvent(obj,event,fct) {
  if( obj.attachEvent) {
     obj.attachEvent('on' + event,fct);
  } else {
     obj.addEventListener(event,fct,true);
	}
}

addEvent(document,'mousemove',drag_onmousemove);
addEvent(document,'mouseup',drag_onmouseup);