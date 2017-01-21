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
    this.game.load.image('wave', './images/wave.png');
	this.game.load.image('ship', './images/ship.png');
    this.game.load.image('lemon', './images/obstacles/lemon.png');
},
create: function(){
    //load game assets
    this.stage.backgroundColor = '#000';

    // initialize stuff
    this.state.start('Intro');
  }
};
