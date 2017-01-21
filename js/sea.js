var Tempest = Tempest || {};
Tempest.Sea = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Sea.prototype = {
    create: function create() {
        this.stage.backgroundColor = '#FFF';

    	// Add stuff to the game
        var ocean = new Ocean(this);
    	var ship = new Ship(this);
        var lemon = new Obstacle(this, 100, 100, 'lemon');
        this.add.existing(ocean);
    	//this.add.existing(ship);
        this.add.existing(lemon);

		ocean.add(ship);
    },
    update: function update() {

    }
}
