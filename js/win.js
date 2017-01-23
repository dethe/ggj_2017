'use strict';
(function(){
var text_x = 50;
var header_font = {font: '18pt Helvetica', fill: '#FFF'}
var body_font = {font: '14px Helvetica', fill: '#FFF'}

var header_text = 'You Win!';
var body_text = [
    'Congratulations! You have escaped the teapot!'
];

var Tempest = Tempest || {};
Tempest.Win = function(){};
Tempest.Win.prototype = {
    create: function(){
        var game = this;
        game.add.text(text_x, 50, header_text, header_font);
        body_text.forEach(function(text, index){
            game.add.text(text_x, 150 + 30 * index, text, body_font);
        });
        this.input.keyboard.enabled = true;
        this.input.keyboard.addCallbacks({}, null, null, function(){
            game.input.keyboard.onPressCallback = null;
            game.state.start('Intro');
        });
    }
};
})();
