function window_alert(title, msg) {
	var tit = title;
	var ms = msg;
	var body = document.body;
	var me = document.getElementById('first');
	var chaine ="<div id='first' onmousedown='start_drag(document.getElementById(first), event);' style='border-style:solid; border-width: 2px; background-color: rgb(0,0,0); width: 300px; height: 150px; left: 500px; top: 100px; position: relative;'>";
	chaine += "<button style='float: right; color: white; background-color: #666666;' onclick='hidden_div();'>X</button>";
	chaine += "<p style='text-align: center; color:white; font-weight:bold;'>" + title + "</p>";
	chaine += "<div id='secund' style='background-color: rgb(204,204,204); width: 300px; height: 100px; left: 0px; top: 50px; position: absolute;'>";
	chaine += "<p style='text-align: center;'>" + msg + "</p>";
	chaine += "</div>";
	chaine += "</div>";
	body.innerHTML = chaine;
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