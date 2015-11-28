var Camera = require('./camera.js'),
    Key = require('./input.js'),
    UI = require('./ui.js')
    Resources = require('./resources.js'),
    PIXI = require('../lib/pixi.dev.js'),
    Config = require('./config.js');

var Player = function (x, y, map) {
    this.position.x = x;
    this.position.y = y;
    this.map = map;
}

Player.prototype = new Camera(0, 0); 
Player.prototype.constructor = Player;

Player.prototype.update = function (frameTime) {
    this.moveSpeed = frameTime * 5;
    this.rotSpeed = frameTime * 3;
    if (Key.isDown(Key.UP)) {
      if (this.map.wallGrid[Math.floor(this.position.x + this.direction.x * this.moveSpeed * 4)]
                      [Math.floor(this.position.y)] == false) {
        this.position.x += this.direction.x * this.moveSpeed;
      }
      if (this.map.wallGrid[Math.floor(this.position.x)]
                      [Math.floor(this.position.y + this.direction.y * this.moveSpeed * 4)] == false) {
        this.position.y += this.direction.y * this.moveSpeed;
      }
    }

    if (Key.isDown(Key.DOWN)) {
      if (this.map.wallGrid[Math.floor(this.position.x - this.direction.x * this.moveSpeed * 4)]
                      [Math.floor(this.position.y)] == false) {
        this.position.x -= this.direction.x * this.moveSpeed;
      }
      if (this.map.wallGrid[Math.floor(this.position.x)]
                      [Math.floor(this.position.y - this.direction.y * this.moveSpeed * 4)] == false) {
        this.position.y -= this.direction.y * this.moveSpeed;
      }
    }

    if (Key.isDown(Key.RIGHT)) {
      this.map.skybox.tilePosition.x -= 1000 * frameTime;
      this.oldDirX = this.direction.x;
      this.direction.x = this.direction.x * Math.cos(-this.rotSpeed) - this.direction.y * Math.sin(-this.rotSpeed);
      this.direction.y = this.oldDirX * Math.sin(-this.rotSpeed) + this.direction.y * Math.cos(-this.rotSpeed);
      this.oldPlaneX = this.plane.x;
      this.plane.x = this.plane.x * Math.cos(-this.rotSpeed) - this.plane.y * Math.sin(-this.rotSpeed);
      this.plane.y = this.oldPlaneX * Math.sin(-this.rotSpeed) + this.plane.y * Math.cos(-this.rotSpeed);
    }

    if (Key.isDown(Key.LEFT)) {
      this.map.skybox.tilePosition.x += 1000 * frameTime;
      this.oldDirX = this.direction.x;
      this.direction.x = this.direction.x * Math.cos(this.rotSpeed) - this.direction.y * Math.sin(this.rotSpeed);
      this.direction.y = this.oldDirX * Math.sin(this.rotSpeed) + this.direction.y * Math.cos(this.rotSpeed);
      this.oldPlaneX = this.plane.x;
      this.plane.x = this.plane.x * Math.cos(this.rotSpeed) - this.plane.y * Math.sin(this.rotSpeed);
      this.plane.y = this.oldPlaneX * Math.sin(this.rotSpeed) + this.plane.y * Math.cos(this.rotSpeed);
    }
};

module.exports = Player;
