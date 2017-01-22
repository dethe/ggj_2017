var Tempest = Tempest || {};
//loading the game assets
Tempest.Preload = function(){};
Tempest.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5, 0.5);
    // this.preloadBar.scale.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);
    this.game.load.image('wave', './images/wave2.png');
    this.game.load.image('lemon', './images/obstacles/lemon.png');

	// ship
	this.game.load.image('shipW', './images/ship/W.png');
	this.game.load.image('shipE', './images/ship/E.png');
	this.game.load.image('shipNW', './images/ship/NW.png');
	this.game.load.image('shipNE', './images/ship/NE.png');
	this.game.load.image('shipN', './images/ship/N.png');
	this.game.load.image('shipS', './images/ship/S.png');
	this.game.load.image('shipSW', './images/ship/SW.png');
	this.game.load.image('shipSE', './images/ship/SE.png');

	// islands
	this.game.load.image('sugarberg', './images/sugarberg.png');
},
create: function(){
    //load game assets
    this.stage.backgroundColor = '#000';

    // initialize stuff
    this.state.start('Sea');
  }
};
