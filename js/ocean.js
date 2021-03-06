var wavesPerRow = 24;
var wavesPerColumn = 22;

var TEMPEST_RADIUS = 866;
var MAX_RADIUS = 2000;

var waveSize = {
    dx: 80,
    dy: 35,
    width: 90,
    height: 71
};

function getSea(vec){
    // x,y in world coordinates, where 0,0 is the center of the Matcha Sea
    if (vec.magnitude() < TEMPEST_RADIUS) return 'Matcha';
    if (vec.magnitude() > MAX_RADIUS) return 'None';
    if (vec.degrees() < 30) return 'Gunpowder';
    if (vec.degrees() < 90) return 'Rooibos';
    if (vec.degrees() < 150) return 'Pekoe';
    if (vec.degrees() < 210) return 'Assam';
    if (vec.degrees() < 270) return 'Green';
    if (vec.degrees() < 330) return 'Oolong';
    return 'Gunpowder';
}
var seaColours = {
    Pekoe: 0x670400,
    Rooibos: 0xb40905,
    Assam: 0xc35918,
    Oolong: 0xf6d47a,
    Green: 0xbdb840,
    Matcha: 0x959f3c,
    Gunpowder: 0xd2cec3,
    None: 0xff69b4
};

var Wave = function(game, x, y) {

	this.game = game;
	Phaser.Image.call(this, this.game, x, y, 'wave');

	//this.alpha = 1;

    this.scale.setTo(0.4, 0.4);
    this.anchor.setTo(0.5, 0.2);
	this.initialPos = { x: x, y: y }; // looks ugly, should be es6 already!
    this.worldPos = localToWorld(Vector.fromPoint(this.initialPos));
    this.velocity = Vector(0,0);
	this.tint = 0xc35918; // ASSAM color

	this.animOffset = Math.random() * Math.PI * 2;
}

Wave.prototype = Object.create(Phaser.Image.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.updateWorld = function(ship){
    // move the ship
    this.initialPos.x -= ship.velocity.x;
    this.initialPos.y -= ship.velocity.y;

    // just to make the tests below shorter
    var w = waveSize.width;
    var h = waveSize.height;
    var dx = waveSize.dx; // wave offset per column
    var dy = waveSize.dy; // wave offset per row
    var gw = dx * wavesPerRow;
    var gh = dy * wavesPerColumn;

    // test going out of bounds and move to the other side of the screen
    // do this just slightly off-screen for a smooth experience
    if (this.initialPos.x < -w ){
        this.initialPos.x += gw;
    }else if (this.initialPos.x > (gw - w)){
        this.initialPos.x -= gw;
    }
    if (this.initialPos.y < -h){
        this.initialPos.y += gh;
    }else if(this.initialPos.y > (gh - h)){
        this.initialPos.y -= gh;
    }

    var worldPos = this.worldPos = localToWorld(Vector.fromPoint(this.initialPos));
    var sea = getSea(worldPos);
    if (sea === 'None'){
        this.visible = false;
    }else{
        this.visible = true;
    }
    this.tint = seaColours[getSea(worldPos)];
};

Wave.prototype.update = function() {
	this.x = this.initialPos.x;
	this.y = this.initialPos.y;
	modulatePosition(this, 2.5, 4, 1, this.animOffset);
}

var Ocean = function(game) {
	this.game = game;
	Phaser.Group.call(this, this.game);

	this.waves = [];

	for(var y = -1; y < wavesPerColumn-1; y++) {
		var offsetX = random(0,120);
		for(var x = -1; x < wavesPerRow-1; x++) {
			var wave = new Wave(
                this.game, x * waveSize.dx - offsetX,
                y * waveSize.dy
            );
			this.add(wave);
			this.waves.push(wave);
		}
	}
}

Ocean.prototype = Object.create(Phaser.Group.prototype);
Ocean.prototype.constructor = Ocean;

Ocean.prototype.update = function() {
	Phaser.Group.prototype.update.call(this);
}

function getY(obj){
    if (obj.initialPos !== undefined){
        return obj.initialPos.y;
    }
    return obj.y;
}

Ocean.prototype.updateWorld = function(ship){
    this.children.forEach(function(child){
        child.updateWorld(ship);
    });
    this.children = _.sortBy(this.children, getY);
    this.children.forEach(function(child, index){ child.z = index; });
};
