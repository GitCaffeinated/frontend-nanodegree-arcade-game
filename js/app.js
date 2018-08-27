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

Player.prototype.render = function() {
    ctx //does this need the .drawImage() that enemy prototype has?- maybe not this.x/y
} 

var player function(){   // let xpos=
    // let ypos=
    //add image- Sprite
    //update: function();
        // checkcollison();
    //render: function();
        //image should be on x/y position
    //handleInput: function();
        //recieve user input
    //if checkCollision=true reset hero
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];
var player = player; //object

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
