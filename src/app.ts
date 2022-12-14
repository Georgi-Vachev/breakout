import { render, collisionCheck, canvas, ctx, clear, WIDTH, HEIGHT, getNewObejcts } from "./animation";
import { createNewObjects } from "./gameState";

const startButton = document.getElementById('startButton') as HTMLButtonElement;
const resumeButton = document.getElementById('resumeButton') as HTMLButtonElement;


startButton.addEventListener('click', () => {
    gameOn = true;
    startButton.style.display = 'none';
    resumeButton.style.display = 'none';
    createNewObjects();
    getNewObejcts();
    initState();
})

resumeButton.addEventListener('click', () => {
    gameOn = true;
    startButton.style.display = 'none';
    resumeButton.style.display = 'none';
    initState();
})

let gameOn: boolean = false;
let id = null;

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        gameOn = false;
        alert('Escape button pressed')
        initState()
    }
});

function showMenu() {
    clear();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (startButton.style.display = 'none') {
        startButton.style.display = 'block';

        resumeButton.style.display = 'block';
    }
}

showMenu()

function initState() {
    if (gameOn) {
        gameRunning()
    } else if (!gameOn) {
        showMenu();
    }
}

function gameRunning() {
    // checkInput()
    if (gameOn) {
        let lastTime;

        collisionCheck();
        render(true);
        requestAnimationFrame(gameRunning);
    }
}


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