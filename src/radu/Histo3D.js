/**
 * Created by Radu POPICA & Pierre COLLIGNON.
 * Date: 11/03/11
 * Time: 11:06
 */

/**
 * Dessine un cube 3D a partir de :
 *      -   un point de repere (x,y)
 *      -   une largeur de la "face" : w
 *      -   une hauteur "de la bare" : h
 *      -   les decalages sur Ox et Oy du deuxieme plan par
 *          rapport au premier : dx et dy (respectivement)
 * @param x le point d'abscisse du repere
 * @param y le point d'ordonnee du repere
 * @param w la largeur du cube
 * @param h la hauteur du cube
 * @param dx decalage de la deuxieme axe sur Ox
 * @param dy decalage de la deuxieme axe sur Oy
 */

function drawPlanesLink(x, y){
    var context = canvas.getContext('2d');
    context.strokeStyle = "black";
    context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + dx, y + dy);
    context.closePath();
    context.stroke();
}

function draw3DCube(x, y, w, h, dx, dy) {
    var context = canvas.getContext('2d');
    context.strokeStyle = "black";
    context.beginPath();
        context.moveTo(x, y);
        context.rect(x, y, w, h);
        context.moveTo(x + dx, y + dy);
        context.rect(x + dx, y + dy, w, h);
    context.closePath();
    context.stroke();
    drawPlanesLink(x , y);
    drawPlanesLink(x , y + h);
    drawPlanesLink(x + w , y);
    drawPlanesLink(x + w , y + h);
}