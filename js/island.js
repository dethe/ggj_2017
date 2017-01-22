var Island = function(game, x, y, name) {
	this.game = game;
	Phaser.Image.call(this, this.game, x, y, name);
	this.scale.set(0.4, 0.4);

	this.zIndex = y + this.height-210;

	/*var cutsize = 35;

	var height = Infinity;
	var i = 0;
	while(i < height) {
		var slice = this.game.add.image(name, x, y);
		height = slice
		var cropRect = new Phaser.Rectangle(0, i, slice.width, cutsize);
		slice.crop();
		ocean.add(slice);
		i+=cutsize;
	}

	var initialPos = {x: x, y: y};*/

	//this.anchor.setTo(0.5, 0.5);
}

Island.prototype = Object.create(Phaser.Image.prototype);
Island.prototype.constructor = Island;

Island.prototype.update = function() {
	//Phaser.Sprite.prototype.update.call(this);
}
