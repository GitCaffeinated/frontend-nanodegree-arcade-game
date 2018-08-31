// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
        //xpos
        //ypos
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

var Player = function() {
    this.sprite = 'image/char-princess-girl';
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //automated movement
        //move forward if on board
        //if not on board reset pos to start
    //push enemy into allEnemies array- maybe earlier or an outside thing- one by one (for loop)- this may create multiple of the same enemy to be in array at same time
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let allEnemies = [new Enemy()];

Player.prototype.render = function() {
    ctx
} 

/*function checkCollision() {
    if () //pos player 1 == pos player 2
    {

    }
    //else keep going- no need to write code
}*/

 class Hero {  // 10.14 may help
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/char-princess-girl.png';}
   /* update: function();
        checkCollison();*/
    render(){ //why can't you just call on player.prototype.render??
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(input) { //take keypress and move sprite
        if (input == 'left'){
            this.x -=20;
        }
        else if (input == 'up'){
            this.y -= 20;
        }
        else if (input == 'right'){
            this.x += 20; 
        }
        else if (input == 'down'){
            this.y += 20;
        }
        };
 };
  const player = new Hero();
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
