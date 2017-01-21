var Tempest = Tempest || {};
Tempest.Boot = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    var loadingbar = this.load.image('preloadbar', 'images/loadingbar.png');
  },
  create: function() {
    //loading screen will have a white background
    this.stage.backgroundColor = '#fff';
    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    //screen size will be set automatically
    // this.scale.setScreenSize(true); // This function no longer exists in Phaser
    //physics system
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    this.state.start('Preload');
  }
};
