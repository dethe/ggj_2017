
var Tempest = Tempest || {};
var _game = new Phaser.Game('100', '100', Phaser.AUTO, '');
_game.state.add('Boot', Tempest.Boot);
_game.state.add('Preload', Tempest.Preload);
_game.state.add('Intro', Tempest.Intro);
_game.state.add('Sea', Tempest.Sea);
_game.state.add('Win', Tempest.Win);
_game.state.start('Boot');
