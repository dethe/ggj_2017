var Ship = function(game) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, 0, 0, 'ship');
	this.scale.set(0.4, 0.4);
	this.anchor.setTo(0.5, 0.5);
    this.baseAngle = 0;
	this.animOffset = Math.random() * Math.PI;
    this.worldPos = Vector(-1500, 0);
    this.direction = Vector(1, 0);
	this.updatePos();
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function() {

    this.updateWorldPos();
	this.updatePos();
	//var dt = this.game.time.

	/*this.x = game.camera.width / 2;
	this.y = game.camera.height / 2;*/
}

Ship.prototype.turn = function(degrees){
    this.direction = this.direction.rotate(degrees);
    this.baseAngle += degrees;
};

Ship.prototype.updateWorldPos = function(){
    this.worldPos = this.worldPos.add(this.direction);
};

Ship.prototype.updatePos = function() {
	var time = this.game.time.time / 1000;
	this.x = this.game.camera.width / 2;
	this.y = this.game.camera.height / 2;

	this.zIndex = this.y - 30;

	modulatePosition(this, 0, 2, 2.34);
	modulateRotation(this, 2, 1.89, this.animOffset);
}
