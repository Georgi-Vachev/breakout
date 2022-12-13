import { render, checkInput, collisionCheck } from "./animation";
import { gameOn } from "./gameState";


function newGame() {

}

function saveGame() {
    //stop animationLoop and save objects
}

function resumeGame() {
    //call animationLoop with saved objects
}


// checkInput > collisionCheck > render


function gameStart() {
    if (gameOn) {

        gameRunning()
    } else {
        //call menu
    }
}

function gameRunning() {
    // checkInput()
    collisionCheck();
    render();
    // requestAnimationFrame(gameRunning);
}

gameStart();


// define objects
    // ball = { x, y, size, image, onCollision(), }
    // paddle = { x, y, size, image, onCollision(), slide() }
    // brick = { index, x, y, size, image, onCollision() }

// create animation loop with render() function using requestAnimationFrame

// render bricks, ball, and paddle

// implement ball / paddle physics

// implement ball / bricks physics

// implement mouse tracking and paddle movement

// level tracking and progression

// bonus drops

// create menu with 'settings' and 'start game' options