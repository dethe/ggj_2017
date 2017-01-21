var _game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

////////////////////
// GAME SETTINGS
////////////////////

////////////////////
// Basic Phaser functions
////////////////////

function preload() {
	// Preload images
	_game.load.image('wave', './images/wave.png');
	_game.load.image('ship', './images/ship.png');
}

function create() {
	// Set game to automatically resize
	_game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	_game.scale.parentIsWindow = true;

	// Set background color to pink so that it is easy to see where the color bleeds through
	// This will need to be changed once we make the waves slightly transparent
	_game.stage.backgroundColor = '#f09';

	// Initialize stuff and add them to the game
	var ocean = new Ocean(_game);
	var ship = new Ship(_game);

	_game.add.existing(ocean);
	_game.add.existing(ship);
}

function update() {

}
