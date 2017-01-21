var Obstacle = function(game, x, y, name) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, x, y, name);
	this.scale.set(0.4, 0.4);

	var initialPos = {x: x, y: y};

	this.anchor.setTo(0.5, 0.5);
}

Obstacle.prototype = Object.create(Phaser.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.update = function() {

}
