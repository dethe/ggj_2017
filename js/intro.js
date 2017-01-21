'use strict';

var text_x = 50;
var header_font = {font: '18pt Helvetica', fill: '#FFF'}
var body_font = {font: '14px Helvetica', fill: '#FFF'}

var header_text = 'Tempest in a Teapot';
var body_text = [
    'Your ship has escaped from the bottle you were imprisoned in by',
    'the witch Sycorax, unfortunately you have fallen into her teapot.',
    'In the teapot are several seas, islands, and a huge storm called',
    'the Tempest. Find your way to the spout to escape, while avoiding',
    'the hazards of sailing the Seven Teas, buying and selling trade',
    'goods to maximize your treasure when you are finally free.'
];

var Tempest = Tempest || {};
Tempest.Intro = function(){};
Tempest.Intro.prototype = {
    create: function(){
        var game = this;
        game.add.text(text_x, 50, header_text, header_font);
        body_text.forEach(function(text, index){
            game.add.text(text_x, 150 + 30 * index, text, body_font);
        });
        this.input.keyboard.enabled = true;
        this.input.keyboard.addCallbacks({}, null, null, function(){
            game.state.start('Assam');
        });
    }
};
