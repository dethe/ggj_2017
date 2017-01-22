var Ship = function(game) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, 0, 0, 'ship');
	this.directionList = ['shipE', 'shipNE','shipN','shipNW','shipW','shipSW','shipS','shipSE'];
	this.scale.set(0.4, 0.4);
	this.cargo = [];
	this.anchor.setTo(0.5, 0.5);
	this.animOffset = Math.random() * Math.PI;
    this.worldPos = Vector(-1500, 0);
    this.velocity = Vector(1, 0);
	this.updatePos();
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function() {

	this.updatePos();
	var texIndex = Math.floor((360-this.velocity.degrees()+22.5) / 45) % 8;
	this.loadTexture(this.directionList[texIndex]);
}

Ship.prototype.turn = function(degrees){
    this.velocity = this.velocity.rotate(degrees);
};

Ship.prototype.updateWorldPos = function(){
    // this.worldPos = this.worldPos.add(this.velocity);
};

Ship.prototype.updateWorld = function(){
    // Do Nothing
};

Ship.prototype.updatePos = function() {
    this.velocity = this.velocity.add(currentFromWorld(this.worldPos)).cap(1.0);
    this.worldPos = this.worldPos.add(this.velocity).cap(MAX_RADIUS);

	this.x = this.game.camera.width / 2;
	this.y = this.game.camera.height / 2;

    this.angle = (this.velocity.degrees() + 22.5) % 45 - 22.5;

	modulatePosition(this, 0, 2, 2.34);
	modulateRotation(this, 2, 1.89, this.animOffset);
}
