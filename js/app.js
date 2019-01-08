//Hero Class
class Hero {
    constructor() {
        this.step = 101;
        this.jump = 83;
        this.sprite = "images/char-boy.png";
        this.startX = this.step * 2;
        this.startY = (this.jump * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
    }
    // Draw Hero sprite in position
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // movement resulting from key presses 
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
    // update position according to collisions or win result
    update(){
        //check collisions
        for (let enemy of allEnemies){
            if (this.y  === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)){
                this.reset();
            } // Check win condition
            if (this.y === -28){
                this.victory = true;
                modal.classList.toggle("hide");
                win.cancelAnimationFrame(id);
            }
        }
    }
    // reset to starting postion
    reset(){
        this.x = this.startX;
        this.y = this.startY;
    }
}

// Enemies our player must avoid

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y + 55;
        this.sprite = 'images/enemy-bug.png';
        this.step = 101;
        this.speed = speed;
    }
    // Update the enemy's position
    update(dt) {
        if (this.x < this.step * 5){
            this.x += this.speed * dt;
        }
        else {
            this.x = -this.step;
        }
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }
}

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


const player = new Hero();
const bug1 = new Enemy(-101, 0, 100);
const bug2 = new Enemy(-202, 83, 150);
const bug3 = new Enemy(-101, 83, 170);
const bug4 = new Enemy(-202, 166, 200);
const bug5 = new Enemy(-303, 166, 150);
const allEnemies = [];
const modal = document.querySelector(".modal_box");
allEnemies.push(bug1, bug2, bug3, bug4, bug5);
