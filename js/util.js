function random(a, b) {
	return Math.floor(Math.random() * (b - a + 1) + a);
}

function modulatePosition(object, x, y, speed, animOffset) {
	var time = object.game.time.time / 1000 * (speed || 1);
	object.y += Math.sin(time + (animOffset || 0)) * (y || 0);
	object.x += Math.cos(time + (animOffset || 0)) * (x || 0);
}

function modulateRotation(object, magnitude, speed, animOffset) {
	var time = object.game.time.time / 1000 * (speed || 1);
	object.angle += Math.sin(time * 1.89 + (animOffset || 0)) * (magnitude || 0);
}

// properly delete from a list
function deleteItem(list, item) {
    var idx = list.indexOf(item);
    if (idx > -1) {
        list.splice(idx, 1);
    }
    return item;
}

function worldToLocal(vec){
    var localCentre = Vector(_game.camera.width / 2, _game.camera.height / 2);
    return localCentre.add(vec.subtract(ship.worldPos));
}

function localToWorld(vec){
    var localCentre = Vector(_game.camera.width / 2, _game.camera.height / 2);
    return ship.worldPos.add(vec.subtract(localCentre));
}

function currentFromWorld(vec){
    return Vector.fromPolar(vec.degrees() - 90, vec.magnitude() / MAX_RADIUS);
}
