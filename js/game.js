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
	_game.load.image('lemon', './images/obstacles/lemon.png');
}

function create() {
	// Set game to automatically resize
	_game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
	_game.scale.parentIsWindow = true;

	// Set background color
	_game.stage.backgroundColor = '#09f';
	_game.stage.backgroundColor = '#fff';

	// Initialize stuff and add them to the game
	var ocean = new Ocean(_game);
	var ship = new Ship(_game);

	_game.add.existing(ocean);
	_game.add.existing(ship);

	var lemon = new Obstacle(_game, 100, 100, 'lemon');

	_game.add.existing(lemon);
}

function update() {

}
