var Wave = function(game, x, y) {
	this.game = game;
	Phaser.Image.call(this, this.game, x, y, 'wave');

	//this.alpha = 1;

	this.scale.setTo(0.4, 0.4);

	this.initialPos = { x: x, y: y }; // looks ugly, should be es6 already!
	this.zIndex = this.initialPos.y;

	this.animOffset = Math.random() * Math.PI * 2;
}

Wave.prototype = Object.create(Phaser.Image.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.update = function() {
	this.x = this.initialPos.x;
	this.y = this.initialPos.y;
	modulatePosition(this, 2.5, 4, 1, this.animOffset);
}

var Ocean = function(game) {
	this.game = game;
	Phaser.Group.call(this, this.game);

	this.waves = [];

	for(var y = 0; y < 22; y++) {
		var offsetX = random(0,120);
		//offsetX = 0; // FOR NOW, until we fix the wave graphic
		for(var x = 0; x < 24; x++) {
			var wave = new Wave(this.game, x * 60 - 40 - offsetX, y * 35 - 60);
			this.add(wave);

			this.waves.push(wave);
		}
	}
}

Ocean.prototype = Object.create(Phaser.Group.prototype);
Ocean.prototype.constructor = Ocean;

Ocean.prototype.update = function() {
	Phaser.Group.prototype.update.call(this);
	//this.children.update();

	this.sort('zIndex', Phaser.Group.SORT_ASCENDING);
	/*this.children.sort(function(a, b) {
		return b.initialPos.y;
	});*/
}
