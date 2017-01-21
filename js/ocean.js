var Wave = function(game, x, y) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, x, y, 'wave');

	this.initialPos = { x: x, y: y }; // looks ugly, should be es6 already!
}

Wave.prototype = Object.create(Phaser.Sprite.prototype);
Wave.prototype.constructor = Wave;

Wave.update = function() {
	var time = this.game.time.time / 1000;
	this.y = this.initialPos.y + Math.sin(time) * 100;
}

var Ocean = function(game) {
	this.game = game;
	Phaser.Group.call(this, this.game);

	this.waves = [];

	for(var y = 0; y < 10; y++) {
		for(var x = 0; x < 10; x++) {
			/*var wave = game.add.image(x*100-100, y*75-100, 'wave');
			this.add(wave);

			this.waves.push(wave);*/

			var wave = new Wave(this.game, x * 100 - 100, y * 75 - 100);
			this.add(wave);

			this.waves.push(wave);
		}
	}
}

Ocean.prototype = Object.create(Phaser.Group.prototype);
Ocean.prototype.constructor = Ocean;

Ocean.prototype.update = function() {

}
