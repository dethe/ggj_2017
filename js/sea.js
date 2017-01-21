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
        this.keys = this.input.keyboard.addKeys({
            'forward1': Phaser.KeyCode.W, 'forward2': Phaser.KeyCode.UP,
            'left1': Phaser.KeyCode.A, 'left2': Phaser.KeyCode.LEFT,
            'right1': Phaser.KeyCode.D, 'right2': Phaser.KeyCode.RIGHT
        });
    },
    update: function update() {
        if (this.keys.forward1.isDown || this.keys.forward2.isDown){
            // ship moves forward
        }
        if (this.keys.left1.isDown || this.keys.left2.isDown){
            // ship turns left
        }else if (this.keys.right1.isDown || this.keys.right2.isDown){
            // ship turns right
        }
        // adjust ship's position in the world (the teapot)
        // move waves and hazards around the ship

    }
}
