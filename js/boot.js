var Tempest = Tempest || {};
Tempest.Boot = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen
    var loadingbar = this.load.image('preloadbar', 'images/loadingbar.png');
  },
  create: function() {
    // Set game to automatically resize
    this.scaleMode = Phaser.ScaleManager.RESIZE;
    this.scale.parentIsWindow = true;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    // Set background color
    // this.stage.backgroundColor = '#09f';
    this.stage.backgroundColor = '#000';
    //scaling options
    //have the game centered horizontally
    //screen size will be set automatically
    // this.scale.setScreenSize(true); // This function no longer exists in Phaser
    //physics system
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    this.state.start('Preload');
  }
};
