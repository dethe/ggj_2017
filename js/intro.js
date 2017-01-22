'use strict';

var text_x = 50;
var header_font = {font: '18pt Helvetica', fill: '#FFF'}
var body_font = {font: '14px Helvetica', fill: '#FFF'}

var header_text = 'Tempest in a Teapot';
var body_text = [
    'Your ship has escaped from the bottle you were imprisoned in by',
    'the witch Sycorax, unfortunately you have fallen into her teapot.',
    'In the teapot you can sail the Seven Teas, with a tempest at the centre',
    'over the Matcha Tea, where Sycorax is perpetually stirring her tea.',
    'Gather the right ingredients to satisfy Sycorax',
    'into the Matcha sea and she will finally pour the tea, allowing you to escape.',
    '',
    'You need to gather ingredients by sailing over them, but your cargo is limited',
    'to only 3 items at a time. Steer (difficult due to strong currents) with the',
    'arrow keys and drag items from your ship to catapult them.',
    '',
    'To please Sycorax you will need:'
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
            game.state.start('Sea');
            game.input.keyboard.stop();
        });
    }
};
