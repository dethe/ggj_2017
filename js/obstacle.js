var obstacleNames = ['cookie', 'darkchocolate', 'ice', 'lemon', 'milk', 'mint', 'sugarcube'];

var Obstacle = function(game, x, y, name) {
	this.name = name || obstacleNames[random(0, obstacleNames.length - 1)];
	this.game = game;
	Phaser.Sprite.call(this, this.game, x, y, this.name);
	this.scale.set(0.4, 0.4);
    this.anchor.setTo(0.5, 0.5);
    this.inInventory = false;

    this.worldPos = Vector(x,y);
	this.initialPos = worldToLocal(this.worldPos);
    this.velocity = Vector(0,0);

	this.animOffset = Math.random() * Math.PI;

	this.events.onInputDown.add(function() {
		this.game.selectedHazard = this.game.ship.cargo.indexOf(this);
	}, this)
}

Obstacle.prototype = Object.create(Phaser.Sprite.prototype);
Obstacle.prototype.constructor = Obstacle;

Obstacle.prototype.updatePos = function(){

    this.velocity = currentFromWorld(this.worldPos).cap(1.0);
    this.worldPos = this.worldPos.add(this.velocity).cap(MAX_RADIUS);

    this.initialPos = worldToLocal(this.worldPos);
}

Obstacle.prototype.update = function() {
    if (! this.inInventory) {
		this.inputEnabled = false;
		this.tint = 0xffffff;
        this.updatePos();
    } else {
		this.inputEnabled = true;
		var index = this.game.ship.cargo.indexOf(this)
		this.initialPos.x = 90 * index + 90;
		this.initialPos.y = this.game.camera.height - 100;

		if(this.game.selectedHazard == index) {
			this.tint = 0x00ff00;
		}else{
			this.tint = 0xffffff;
		}
	}
	this.x = this.initialPos.x;
	this.y = this.initialPos.y;
	modulatePosition(this, 0, 4, 1.89, this.animOffset);
}

Obstacle.prototype.updateWorld = function(ship) {
    // this.initialPos.x -= ship.velocity.x;
    // this.initialPos.y -= ship.velocity.y;
    // this.worldPos = localToWorld(Vector.fromPoint(this.initialPos));
};
