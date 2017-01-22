function randomVector(){
    return Vector.fromPolar(random(0,360), random(TEMPEST_RADIUS + 50, MAX_RADIUS - 100));
}

var Tempest = Tempest || {};
Tempest.Sea = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Sea.prototype = {
    create: function create() {
        this.stage.backgroundColor = '#FFF';

    	// Add stuff to the game
        this.ocean = new Ocean(this);
    	this.ship = new Ship(this);
        this.add.existing(this.ocean);

        this.hazards = [];

		this.ocean.add(this.ship);
        for (var i = 0; i < 40; i++){
            var loc = randomVector();
            var lemon = this.ocean.add(new Obstacle(this, loc.x, loc.y));
            this.hazards.push(lemon);
        }

		//this.island = new Island(this, 100, 100, 'sugarberg');
		//this.add.existing(this.island);
		//this.ocean.add(this.island);

        this.keys = this.input.keyboard.addKeys({
            'forward1': Phaser.KeyCode.W, 'forward2': Phaser.KeyCode.UP,
            'left1': Phaser.KeyCode.A, 'left2': Phaser.KeyCode.LEFT,
            'right1': Phaser.KeyCode.D, 'right2': Phaser.KeyCode.RIGHT
        });

        this.seaText = this.add.text(50, 50, "Assam Sea", {font: '18pt Helvetica', fill: '#FFF', stroke: '#000', strokeThickness: 2});
        this.locationText = this.add.text(50, 80, "", {font: '14pt Helvetica', fill: '#FFF', stroke: '#000', strokeThickness: 2});
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
        this.ship.updateWorldPos();
        this.ocean.updateWorld(this.ship);
        this.seaText.setText(getSea(this.ship.worldPos) + ' Sea');
        this.locationText.setText('x: ' + Math.round(this.ship.worldPos.x) + ', y: ' + Math.round(this.ship.worldPos.y) + ', angle: ' + Math.round(this.ship.worldPos.degrees()) + ', magnitude: ' + Math.round(this.ship.worldPos.magnitude()));

        var sea = this;
        this.hazards.forEach(function(hazard){
            var dist = Vector.distance(sea.ship.x, sea.ship.y, hazard.x, hazard.y);
            if (dist < 80){
                console.log('COLLISION');
                if (sea.ship.cargo.length < 3){
                    sea.ship.cargo.push(hazard);
                    sea.ocean.remove(hazard);
                    sea.add.existing(hazard);
                    hazard.initialPos.x = 90 * sea.ship.cargo.length;
                    hazard.initialPos.y = sea.game.camera.height - 100;
                    deleteItem(sea.hazards, hazard);
                }
            }
        });
    }
}
