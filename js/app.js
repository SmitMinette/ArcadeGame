//Hero Class
    //constructor
        //properties
            // x position
            // y position
            // sprite image
        //Methods
            // update position
                // check collision
                    // did player collide with enemy x and y?
                // Check win
                    // Did player reach the final tile x and y?
            // Render
                // Draw player sprite on current x and y co-ordinates
            // Handle keyboard input
                // update player position according to keyboard input
            // Reset Hero
                // Set back to starting x and y

class Hero {
    constructor() {
        this.step = 101;
        this.jump = 83;
        this.sprite = "images/char-boy.png";
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) - 20;
        this.x = this.startX;
        this.y = this.startY;

    }
    // Draw Hero sprite in position
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input){
        switch(input){
            case "left":
                if (this.x > 0){
                this.x -= this.step;
                }
                break;
            case "up":
                if (this.y > 0)
                this.y -= this.jump;
                break;
            case "right":
                if (this.x < this.step * 4)
                this.x += this.step;
                break;
            case "down":
                if (this.y < this.jump * 4)
                this.y += this.jump;
                break;
        }
    }
}

const player = new Hero();

// Init allEnemies array
// For each enemy created, push new Enemy object into array.



// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    // y position

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

    // if enemy is not passed boundary
        // move forward
        // increment x by speed * dt
    // else
        // Reset position to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


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
