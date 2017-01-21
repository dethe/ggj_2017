/*var Wave = function(game, x, y) {
	Phaser.Image.call(this, game, x, y, 'wave');
}*/

var Ocean = function(game) {
	Phaser.Group.call(this, game);

	this.waves = [];

	for(var y = 0; y < 10; y++) {
		for(var x = 0; x < 10; x++) {
			var wave = game.add.image(x*100-100, y*75-100, 'wave');
			this.add(wave);

			this.waves.push(wave);
		}
	}
}

Ocean.prototype = Object.create(Phaser.Group.prototype);
Ocean.prototype.constructor = Ocean;

Ocean.prototype.update = function() {

}
