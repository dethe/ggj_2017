var Wave = function(game, x, y, width, height) {
	this.game = game;
	Phaser.Image.call(this, this.game, x, y, 'wave');

	//this.alpha = 1;

    var scaleX = width / this.width * 1.5;
    var scaleY = height / this.height * 1.5;
    this.scale.setTo(scaleX, scaleY);

	this.initialPos = { x: x, y: y }; // looks ugly, should be es6 already!
	this.animOffset = Math.random() * Math.PI * 2;
}

Wave.prototype = Object.create(Phaser.Image.prototype);
Wave.prototype.constructor = Wave;

Wave.prototype.updateWorld = function(shipMotion){
    var w = this.width;
    var h = this.height;
    var gw = this.game.scale.bounds.width;
    var gh = this.game.scale.bounds.height;
    this.initialPos.x -= shipMotion.x;
    this.initialPos.y -= shipMotion.y;
    if (this.initialPos.x < -w ){
        this.initialPos.x += gw + w * 2;
    }else if (this.initialPos.x > gw + h){
        this.initialPos.x -= gw + w * 2;
    }
    if (this.initialPos.y < -h){
        this.initialPos.y += gh + h * 2;
    }else if(this.initialPos.y > gh + h){
        this.initialPos.y -= gh + h * 2;
    }
};

Wave.prototype.update = function() {
	this.x = this.initialPos.x;
	this.y = this.initialPos.y;
	modulatePosition(this, 2.5, 4, 1, this.animOffset);
}

var Ocean = function(game) {
	this.game = game;
	Phaser.Group.call(this, this.game);
    var display = {
        width: game.scale.bounds.width,
        height: game.scale.bounds.height
    }
    var wavesPerRow = 24;
    var wavesPerColumn = 22;
    var waveSize = {
        width: display.width / (wavesPerRow - 1), // for overlap
        height: display.height / (wavesPerColumn - 1)
    };

	this.waves = [];

	for(var y = -1; y < 23; y++) {
		var offsetX = random(0,120);
		for(var x = -1; x < 25; x++) {
			var wave = new Wave(
                this.game, x * waveSize.width - offsetX,
                y * waveSize.height,
                waveSize.width,
                waveSize.height
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
	//this.children.update();
	// this.sort('zIndex', Phaser.Group.SORT_ASCENDING);
	/*this.children.sort(function(a, b) {
		return b.initialPos.y;
	});*/
}

Ocean.prototype.updateWorld = function(shipMotion){
    this.waves.forEach(function(wave){
        wave.updateWorld(shipMotion);
    });
    this.children.sort(function(a,b){ return a.y - b.y; });
    this.children.forEach(function(child, index){ child.z = child.index; });
};
