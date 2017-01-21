var _game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	_game.load.image('wave', './images/wave.png');
	_game.load.image('ship', './images/ship.png');
}

function create() {
	_game.stage.backgroundColor = '#f09';

	// initialize stuff
	var ocean = new Ocean(_game);
	var ship = new Ship(_game);

	_game.add.existing(ocean);
	_game.add.existing(ship);
}

function update() {

}
