var Tempest = Tempest || {};
Tempest.Sea = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Sea.prototype = {
    create: function create() {
        this.stage.backgroundColor = '#FFF';

    	// Add stuff to the game
        this.ocean = new Ocean(this);
    	this.ship = new Ship(this);
        this.lemon = new Obstacle(this, 100, 100, 'lemon');
        this.add.existing(this.ocean);

    	//this.add.existing(ship);
        this.add.existing(this.lemon);
		this.ocean.add(this.ship);
		this.ocean.add(this.lemon);

		//this.island = new Island(this, 100, 100, 'sugarberg');

		//this.add.existing(this.island);

		//this.ocean.add(this.island);

        this.keys = this.input.keyboard.addKeys({
            'forward1': Phaser.KeyCode.W, 'forward2': Phaser.KeyCode.UP,
            'left1': Phaser.KeyCode.A, 'left2': Phaser.KeyCode.LEFT,
            'right1': Phaser.KeyCode.D, 'right2': Phaser.KeyCode.RIGHT
        });

        this.seaText = this.add.text(50, 50, "Assam Sea", {font: '18pt Helvetica', fill: '#000'});
    },
    update: function update() {
        if (this.keys.forward1.isDown || this.keys.forward2.isDown){
            // ship moves forward
        }
        if (this.keys.left1.isDown || this.keys.left2.isDown){
            // ship turns left
            this.ship.turn(-1);
        }else if (this.keys.right1.isDown || this.keys.right2.isDown){
            // ship turns right
            this.ship.turn(1);
        }
        // adjust ship's position in the world (the teapot)
        // move waves and hazards around the ship


        this.ocean.updateWorld(this.ship);
        this.lemon.updateWorld(this.ship);
        this.seaText.setText(getSea(this.ship.worldPos) + ' Sea');
    }
}
