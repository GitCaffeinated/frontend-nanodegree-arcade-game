let colomn = 101;
let row = 83;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables for what enemy looks, speed and positions are here.
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.step = 50;
};

var Player = function() {
    this.sprite = 'image/char-princess-girl';
}
// Update the enemy's position
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // moving the enemy across the screen and start over when enemy is fully across
    if (this.x <= colomn * 5){
            this.x += this.speed * dt;
   }
    else {
        this.x = -50;
    } 
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.render = function() {
    ctx
} 

 class Hero { 
    constructor() {
         // Variables for what hero looks, speed and positions are here.
        this.x = colomn * 2;
        this.y = (row * 5) - 20;
        this.horizontal = 101;
        this.vertical = 83;
        this.sprite = 'images/char-princess-girl.png';}
    update(){ 
         for (let enemy of allEnemies){ 
             //if enemy and hero are in the same space player goes to beginning
            if (this.y === enemy.y && (enemy.x + enemy.step) > this.x && enemy.x < this.x){
                this.x = colomn * 2;
                this.y = (row * 5) - 20;
                }
            }
           if (this.y === row * 0 - 20 ) {
              alert ("You Won!")
              this.x = colomn * 2;
              this.y = (row * 5) - 20;
             }
    }
    render(){ //draw the hero
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(input) {
        if (this.x > 0 && input == 'left'){
            this.x -= this.horizontal;
        }
        else if (this.y > 0 && input == 'up'){
            this.y -= this.vertical;
        }
        else if (this.x < colomn * 4  && input == 'right'){
            this.x += this.horizontal; 
        }
        else if (this.y < row * 4 && input == 'down'){
            this.y += this.vertical;
        }
        };
 };
  const player = new Hero();
  let enemy1 = new Enemy(-50, (row * 1)- 20, Math.floor(Math.random() * 350) +50);
  let enemy2 = new Enemy(-50, (row * 2)- 20, Math.floor(Math.random() * 350) +50);
  let enemy3 = new Enemy(-50, (row * 3)- 20, Math.floor(Math.random() * 350) +50);
  let allEnemies = [];
  allEnemies.push(enemy1);
  allEnemies.push(enemy2);
  allEnemies.push(enemy3);

// This listens for key presses sends keys to Player.handleInput() method
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
