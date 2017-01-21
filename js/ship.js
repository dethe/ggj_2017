var Ship = function(game) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, 0, 0, 'ship');
	this.scale.set(0.4, 0.4);
	this.anchor.setTo(0.5, 0.5);

	this.animOffset = Math.random() * Math.PI;

	this.updatePos();
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function() {

	this.updatePos();
	//var dt = this.game.time.

	/*this.x = game.camera.width / 2;
	this.y = game.camera.height / 2;*/
}

Ship.prototype.updatePos = function() {
	var time = this.game.time.time / 1000;
	this.x = this.game.camera.width / 2;
	this.y = this.game.camera.height / 2;

	this.y += Math.sin(time * 2.34) * 2;
	this.angle = Math.sin(time * 1.89 + this.animOffset) * 2;
}
