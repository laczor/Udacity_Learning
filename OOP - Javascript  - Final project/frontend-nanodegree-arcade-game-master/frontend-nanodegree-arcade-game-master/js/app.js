// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //location
    this.x = -40;
    this.y = 65 +((Math.floor(Math.random() * 3))*80);
    this.speed =  Math.floor(Math.random() * 6) + 1;
    this.width = 100;
    this.height = 65;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x>550){
        this.x=-20;
        this.y = 65 +((Math.floor(Math.random() * 3))*80);
        this.speed =  Math.floor(Math.random() * 6) + 1;
    }
    this.x = this.x + this.speed + dt;
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
    this.speed = 1;
    this.width = 69;
    this.height = 76;
};

Player.prototype.update = function() {
    // this.x = this.x* this.speed;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

    switch(key) {
    case 'left':
    if(this.x!==-2){this.x = this.x - 101;}
        break;
    case 'right':
    if(this.x!==402){this.x = this.x + 101;}
        break;
    case 'up':
    if(this.y!==-20){this.y = this.y - 80;}
        break;
    case 'down':
    if(this.y!==380){this.y = this.y + 80;}
        break;
    default:

}
    
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player();

var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

var allEnemies = [enemy1,enemy2,enemy3];

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

var testing = new Enemy();
