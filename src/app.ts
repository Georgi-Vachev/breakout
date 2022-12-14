import { render, collisionCheck, ctx, clear, WIDTH, HEIGHT, getNewObejcts, updatePhysics } from "./animation";
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

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        gameOn = false;
        initState()
    }
});

export function showMenu() {
    gameOn = false;
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
        requestAnimationFrame(gameRunning);
    } else if (!gameOn) {
        showMenu();
    }
}

let lastTime;
let requiredElapsed = 1000 / 120;

function gameRunning() {
    if (gameOn) {
        collisionCheck();
        let now = Date.now()
        if (!lastTime) { lastTime = now; }
        let elapsed = now - lastTime;
        if (elapsed > requiredElapsed) {
            updatePhysics();
            lastTime = now;
        }
        render();
        requestAnimationFrame(gameRunning);
    } else {
        initState();
    }
}