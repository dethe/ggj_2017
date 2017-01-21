var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('wave', './images/wave.png');
}

function create() {
	new Ocean(game);
}

function update() {
}
