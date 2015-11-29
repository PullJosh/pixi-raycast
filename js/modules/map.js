var Config = require('./config.js'),
    PIXI = require('../lib/pixi.dev.js'),
    UI = require('./ui.js');
function Map() {
    this.wallGrid = [
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,0,0,0,0,0,0,2,0,0,0,0,0,0,2],
      [2,0,0,0,0,0,0,2,0,0,0,0,0,0,2],
      [2,0,0,2,2,0,0,2,0,0,2,2,0,0,2],
      [2,0,0,2,2,0,0,2,0,0,2,2,0,0,2],
      [2,0,0,0,0,0,0,2,0,0,2,2,0,0,2],
      [2,0,0,0,0,0,0,2,0,0,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,0,0,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    ];
    this.sprites = [
      //{x:20.5, y:11.5, tex:10}
    ];
    this.skyTexture = new PIXI.Texture.fromImage('assets/img/skybox.png');
    this.skybox = new PIXI.TilingSprite(this.skyTexture, Config.screenWidth, Config.screenHeight / 2);
    this.skybox.generateTilingTexture(false);
    this.skybox.alpha = 0.6;
    this.skybox.tileScale = {x: 0.5, y: 0.4};
    UI.getLayer('skybox').addChild(this.skybox);
}

module.exports = Map;
