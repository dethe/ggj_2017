function randomVector(){
    return Vector.fromPolar(random(0,360), random(TEMPEST_RADIUS + 50, MAX_RADIUS - 100));
}

var Tempest = Tempest || {};
Tempest.Sea = function(){};
//setting game configuration and loading the assets for the loading screen
Tempest.Sea.prototype = {
    getGoal: function(){
        return [1,2,3,4,5].map(function(){
            return _.sample(obstacleNames);
        }).sort();
    },
    create: function create() {
        var state = this;
        this.stage.backgroundColor = '#FFF';

    	// Add stuff to the game
        window.ship = this.ship = new Ship(this);
        this.ocean = new Ocean(this);
        this.add.existing(this.ocean);

        this.hazards = [];
		this.selectedHazard = 0;
        this.goal = this.getGoal();

		this.ocean.add(this.ship);
        this.goal.forEach(function(goal){
            var loc = randomVector();
            var lemon = state.ocean.add(new Obstacle(state, loc.x, loc.y, goal));
        });
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
        this.goalText = this.add.text(this.game.camera.width / 2, 50, 'Goal: ' + this.goal.join(', '), {font: '14pt Helvetica', fill: '#FFF', stroke: '#000', strokeThickness: 2})
        this.placedIngredientsText = this.add.text(this.game.camera.width / 2, 80, "", {font: '14pt Helvetica', fill: '#FFF', stroke: '#000', strokeThickness: 2});
    },
    getIngredientsInTempest: function(){
        return _.pluck(this.hazards.filter(function(hazard){ return hazard.worldPos.magnitude() < TEMPEST_RADIUS; }), 'key').sort();
    },
    update: function update() {
        if (this.keys.forward1.isDown || this.keys.forward2.isDown){
            // ship moves forward
        }
        if (this.keys.left1.isDown || this.keys.left2.isDown){
            // ship turns left
            this.ship.turn(-2);
        }else if (this.keys.right1.isDown || this.keys.right2.isDown){
            // ship turns right
            this.ship.turn(2);
        }
        // adjust ship's position in the world (the teapot)
        // move waves and hazards around the ship
        this.ship.updateWorldPos();
        this.ocean.updateWorld(this.ship);
        this.seaText.setText(getSea(this.ship.worldPos) + ' Sea');
        var goalProgress = this.getIngredientsInTempest();
        this.placedIngredientsText.setText('Progress: ' + goalProgress.join(', '));
        var obs = this.hazards[0];
        // this.locationText.setText('x: ' + Math.round(ship.worldPos.x) + ', y: ' + Math.round(ship.worldPos.y) + ', angle: ' + Math.round(ship.worldPos.degrees()) + ', magnitude: ' + Math.round(ship.worldPos.magnitude()));

        var sea = this;
        this.hazards.forEach(function(hazard){
            var dist = Vector.distance(sea.ship.x, sea.ship.y, hazard.x, hazard.y);
            if (dist < 80){
                if (sea.ship.cargo.length < 3){
                    sea.ship.cargo.push(hazard);
                    sea.ocean.remove(hazard);
                    sea.add.existing(hazard);
                    hazard.inInventory = true;
                    deleteItem(sea.hazards, hazard);
                }
            }
        });
        if (this.goal.join('') === goalProgress.join('')){
            this.state.start('Win');
        }
    }
}
