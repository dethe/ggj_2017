var Island = function(game, x, y, name) {
	this.game = game;
	Phaser.Group.call(this, this.game, x, y, name);
	this.scale.set(0.4, 0.4);

	_game.cache.getImage('sugarberg').width;

	//for(var i = 0; i < )

	var initialPos = {x: x, y: y};

	//this.anchor.setTo(0.5, 0.5);
}

Island.prototype = Object.create(Phaser.Group.prototype);
Island.prototype.constructor = Island;

Island.prototype.update = function() {
	Phaser.Group.prototype.update.call(this);

}
