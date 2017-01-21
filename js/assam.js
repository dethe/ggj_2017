var Tempest = Tempest || {};
Tempest.Assam = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Assam.prototype = {
    create: function create() {
    	// Set game to automatically resize
    	this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    	this.scale.parentIsWindow = true;

    	// Set background color
    	// this.stage.backgroundColor = '#09f';
    	this.stage.backgroundColor = '#fff';

    	// Add stuff to the game
        var ocean = new Ocean(this);
    	var ship = new Ship(this);
        var lemon = new Obstacle(this, 100, 100, 'lemon');
        this.add.existing(ocean);
    	this.add.existing(ship);
        this.add.existing(lemon);
    },
    update: function update() {

    }
}
