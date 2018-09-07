let colomn = 101;
let row = 83;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
        
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

var Player = function() {
    this.sprite = 'image/char-princess-girl';
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt `parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //automated movement

    if (this.x <= colomn * 5){
            this.x += this.speed * dt;
   }
    else {
        this.x = 0;
    } 
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



Player.prototype.render = function() {
    ctx
} 

 class Hero {  // 10.14 may help
    constructor() {
        this.x = colomn * 2;
        this.y = (row * 5) - 20;
        this.horizontal = 101;
        this.vertical = 83;
        this.sprite = 'images/char-princess-girl.png';}
    update(){ //not working
        function checkCollisions(){
                if (this.x === Enemy.x && this.y === Enemy.y){
                console.log ("collision");
            }
               // else if (this.y = row * 1) {
                 //   this.x = colomn * 2;
                   // this.y = (row * 5) - 20;
                //}
            }
    }
    render(){ //why can't you just call on player.prototype.render??
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(input) { //take keypress and move sprite
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
  let enemy1 = new Enemy(0, (row * 1)- 20, Math.floor(Math.random() * 350) +50);
  let enemy2 = new Enemy(0, (row * 2)- 20, Math.floor(Math.random() * 350) +50);
  let enemy3 = new Enemy(0, (row * 3)- 20, Math.floor(Math.random() * 350) +50);
  let allEnemies = [];
  allEnemies.push(enemy1);
  allEnemies.push(enemy2);
  allEnemies.push(enemy3);
 // This class requires an update()
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

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
