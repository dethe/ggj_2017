var obstacleNames = ['cookie', 'darkchocolate', 'ice', 'lemon', 'milk', 'mint', 'sugarcube'];

var Obstacle = function(game, x, y, name) {
	this.name = name || obstacleNames[random(0, obstacleNames.length - 1)];
	this.game = game;
	Phaser.Sprite.call(this, this.game, x, y, this.name);
	this.scale.set(0.4, 0.4);
    this.anchor.setTo(0.5, 0.5);

	this.initialPos = {x: x, y: y};

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

Obstacle.prototype.updateWorld = function(ship) {
    this.initialPos.x -= ship.velocity.x;
    this.initialPos.y -= ship.velocity.y;
};
