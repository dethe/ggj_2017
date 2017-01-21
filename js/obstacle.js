var Obstacle = function(game, x, y, name) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, x, y, name);
	this.scale.set(0.4, 0.4);

	this.initialPos = {x: x, y: y};
	this.zIndex = this.initialPos.y - 35;

	this.animOffset = Math.random() * Math.PI;

	this.anchor.setTo(0.5, 0.5);
}

Obstacle.prototype = Object.create(Phaser.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.update = function() {
	this.x = this.initialPos.x;
	this.y = this.initialPos.y;
	modulatePosition(this, 0, 4, 1.89, this.animOffset);
}

Obstacle.prototype.updateWorld = function(shipMotion) {
    this.x -= shipMotion.x;
    this.y -= shipMotion.y;
};
