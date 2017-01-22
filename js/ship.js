var Ship = function(game) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, 0, 0, 'ship');
	this.directionList = ['shipE', 'shipNE','shipN','shipNW','shipW','shipSW','shipS','shipSE'];
	this.scale.set(0.4, 0.4);
	this.cargo = [];
	this.anchor.setTo(0.5, 0.55);
	this.animOffset = Math.random() * Math.PI;
    this.worldPos = Vector(-1500, 0);
    this.velocity = Vector(1, 0);

	setTimeout(function() {
		this.selectedIngredient = this.game.make.sprite(window.innerWidth/2, window.innerHeight/2, 'lemon');
		this.selectedIngredient.scale.set(0.2, 0.2);
		this.selectedIngredient.anchor.setTo(0.5, 1);
		this.game.ocean.add(this.selectedIngredient);
		this.selectedIngredient.worldPos = this.worldPos;
		this.selectedIngredient.updateWorld = function(){};
		this.selectedIngredient.autoCenter = true;
		this.selectedIngredient.inputEnabled = true;
		this.selectedIngredient.input.enableDrag();
		//this.selectedIngredient.game = this.game;
		this.selectedIngredient.events.onInputOver.add(function() {
			//console.log(this.game.game.ca);
			this.game.game.canvas.style.cursor = "move";
		}, this);
		this.selectedIngredient.events.onInputOut.add(function() {
			this.game.game.canvas.style.cursor = "default";
		}, this);

		this.selectedIngredient.events.onDragStart.add(function() {
			console.log('start');
			this.selectedIngredient.autoCenter = false;
		}, this);
		this.selectedIngredient.events.onDragStop.add(function() {
			var vec = Vector(this.selectedIngredient.x - this.game.camera.width/2, this.selectedIngredient.y - this.game.camera.height/2);

			if(vec.magnitude() < 40) {
				this.selectedIngredient.autoCenter = true;
			} else {
				vec = vec.rotate(180);
				vec = vec.setMagnitude(vec.magnitude()/5);
				this.selectedIngredient.shootVelocity = vec;
			}
		}, this);

		this.updatePos();
	}.bind(this), 0);

	//this.add(this.selectedIngredient);
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function() {

	this.updatePos();
	//var dt = this.game.time.

	var texIndex = Math.floor((360-this.velocity.degrees()+22.5) / 45) % 8;
	//console.log(texIndex);
	this.loadTexture(this.directionList[texIndex]);

	/*this.x = game.camera.width / 2;
	this.y = game.camera.height / 2;*/
}

Ship.prototype.turn = function(degrees){
    this.velocity = this.velocity.rotate(degrees);
    this.baseAngle += degrees;
};

Ship.prototype.updateWorldPos = function(){
    this.worldPos = this.worldPos.add(this.velocity);
	if(this.selectedIngredient != undefined) {
		this.selectedIngredient.worldPos = this.worldPos;
	}
};

Ship.prototype.updateWorld = function(){
    // Do Nothing
};

Ship.prototype.updatePos = function() {
	var time = this.game.time.time / 1000;
	this.x = this.game.camera.width / 2;
	this.y = this.game.camera.height / 2;

	if(this.selectedIngredient != undefined) {
		if(this.selectedIngredient.autoCenter) {
			this.selectedIngredient.x = this.x;
			this.selectedIngredient.y = this.y + 5;
		}else if(this.selectedIngredient.shootVelocity == undefined){
			var vec = Vector(this.selectedIngredient.x - this.game.camera.width/2, this.selectedIngredient.y - this.game.camera.height/2);

			vec = vec.setMagnitude(Math.min(vec.magnitude(), 120));
			console.log(vec.magnitude());
			this.selectedIngredient.x = this.x + vec.getX();
			this.selectedIngredient.y = this.y + vec.getY();

		}else{
			this.selectedIngredient.x += this.selectedIngredient.shootVelocity.getX();
			this.selectedIngredient.y += this.selectedIngredient.shootVelocity.getY();
			this.selectedIngredient.shootVelocity = this.selectedIngredient.shootVelocity.setMagnitude(Math.max(this.selectedIngredient.shootVelocity.magnitude() - 0.8, 0))
			if(this.selectedIngredient.shootVelocity.magnitude() == 0) {
				this.selectedIngredient.shootVelocity = undefined;
				this.selectedIngredient.autoCenter = true;
				var lemon = this.game.ocean.add(new Obstacle(this.game, this.worldPos.getX() + this.selectedIngredient.x - this.game.camera.width/2, this.worldPos.getY() + this.selectedIngredient.y - this.game.camera.height/2));
	            this.game.hazards.push(lemon);
			}
		}
	}

	this.zIndex = this.y - 30;
    this.angle = (this.velocity.degrees() + 22.5) % 45 - 22.5;

	modulatePosition(this, 0, 2, 2.34);
	modulateRotation(this, 2, 1.89, this.animOffset);
}
