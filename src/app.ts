import { render, collisionCheck, ctx, clear, WIDTH, HEIGHT, getNewObejcts, updatePhysics, canvas } from "./animation";
import { createNewObjects } from "./gameState";

export let inputSelected = '';


canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    console.log(userX, userY)
    if (userX >= 320 && userX <= 480 && userY >= 250 && userY <= 290) {
        gameOn = true;

        createNewObjects();
        getNewObejcts();
        initState();
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    console.log(userX, userY)
    if (userX >= 320 && userX <= 480 && userY >= 300 && userY <= 340) {
        gameOn = true;
        initState();
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (userX >= 230 && userX <= 390 && userY >= 350 && userY <= 390) {
        inputSelected = 'Mouse';
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (userX >= 400 && userX <= 560 && userY >= 350 && userY <= 390) {
        inputSelected = 'Keyboard';
    }
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

    button(320, 250, "Start");
    button(320, 300, "Resume");
    button(230, 350, "Mouse");
    button(400, 350, "Keyboard");

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

function button(x, y, label) {
    ctx.beginPath();
    ctx.font = `24px Arial`;
    ctx.textAlign = `center`;
    ctx.textBaseline = `middle`;
    ctx.fillStyle = "gold";
    ctx.roundRect(x, y, 160, 40, 50);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(label, x + 75, y + 20)
}
