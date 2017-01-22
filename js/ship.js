var Ship = function(game) {
	this.game = game;
	Phaser.Sprite.call(this, this.game, 0, 0, 'ship');
	this.directionList = ['shipE', 'shipNE','shipN','shipNW','shipW','shipSW','shipS','shipSE'];
	this.scale.set(0.4, 0.4);
    this.cargo = [];
	this.anchor.setTo(0.5, 0.5);
	this.animOffset = Math.random() * Math.PI;
    this.worldPos = Vector(-1500, 0);
    this.velocity = Vector(1, 0);
	this.updatePos();
}

Ship.prototype = Object.create(Phaser.Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.update = function() {

	this.updatePos();

	var texIndex = Math.floor((360-this.velocity.degrees()+22.5) / 45) % 8;
	this.loadTexture(this.directionList[texIndex]);

}

Ship.prototype.turn = function(degrees){
    this.velocity = this.velocity.rotate(degrees);
};

Ship.prototype.updateWorldPos = function(){
    var oldWorldPos = this.worldPos;
    this.worldPos = this.worldPos.add(this.velocity);
    if (this.worldPos.magnitude() > MAX_RADIUS){
        this.worldPos = this.worldPos.setMagnitude(MAX_RADIUS);
        this.velocity = this.velocity.setMagnitude(oldWorldPos.subtract(this.worldPos).magnitude());
    }else{
        if (this.velocity.magnitude() !== 1){
            this.velocity = this.velocity.setMagnitude(1);
        }
    }
};

Ship.prototype.updateWorld = function(){
    // Do Nothing, just need this for iterating through all children of the ocean
};

Ship.prototype.updatePos = function() {
	var time = this.game.time.time / 1000;
	this.x = this.game.camera.width / 2;
	this.y = this.game.camera.height / 2;

    this.angle = (this.velocity.degrees() + 22.5) % 45 - 22.5;

	modulatePosition(this, 0, 2, 2.34);
	modulateRotation(this, 2, 1.89, this.animOffset);
}
