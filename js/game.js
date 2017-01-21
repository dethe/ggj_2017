
var Tempest = Tempest || {};
var _game = new Phaser.Game(800, 600, Phaser.AUTO, '');
_game.state.add('Boot', Tempest.Boot);
_game.state.add('Preload', Tempest.Preload);
_game.state.add('Intro', Tempest.Intro);
_game.state.add('Assam', Tempest.Assam);
_game.state.start('Boot');
