var Wave = function(game, x, y) {
	this.game = game;
	Phaser.Image.call(this, this.game, x, y, 'wave');

	this.scale.setTo(0.4, 0.4);

	this.initialPos = { x: x, y: y }; // looks ugly, should be es6 already!
	this.animOffset = Math.random() * Math.PI * 2;
}

Wave.prototype = Object.create(Phaser.Image.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.update = function() {
	var time = this.game.time.time / 1000;
	this.y = this.initialPos.y + Math.sin(time + this.animOffset) * 2.5;
	this.x = this.initialPos.x + Math.cos(time + this.animOffset) * 1.25;
}

var Ocean = function(game) {
	this.game = game;
	Phaser.Group.call(this, this.game);

	for(var y = 0; y < 22; y++) {
		for(var x = 0; x < 22; x++) {
			var wave = new Wave(this.game, x * 60 - 40, y * 35 - 60);
			this.add(wave);
		}
	}
}

Ocean.prototype = Object.create(Phaser.Group.prototype);
Ocean.prototype.constructor = Ocean;

Ocean.prototype.update = function() {
	Phaser.Group.prototype.update.call(this);
	//this.children.update();
}
