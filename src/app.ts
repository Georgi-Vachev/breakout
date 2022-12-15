import { render, collisionCheck, ctx, clear, WIDTH, HEIGHT, getNewObejcts, updatePhysics, canvas, ball } from "./animation";
import { ballState, createNewObjects } from "./gameState";

export let inputSelected = 'Mouse';
ctx.font = `24px Arial`;
ctx.textAlign = `center`;
ctx.textBaseline = `middle`;
let escapePressed = false;

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (!gameOn) {
        if (userX >= 320 && userX <= 480 && userY >= 300 && userY <= 340) {
            gameOn = true;
            createNewObjects();
            getNewObejcts();
            initState();
        }
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (!gameOn) {
        if (userX >= 320 && userX <= 480 && userY >= 250 && userY <= 290) {
            gameOn = true;
            initState();
        }
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (!gameOn) {
        if (userX >= 230 && userX <= 390 && userY >= 350 && userY <= 390) {
            button(405, 350, "Keyboard", 'gold', 'black');
            button(235, 350, "Mouse", 'black', 'gold');
            inputSelected = 'Mouse';
        }
    }
})

canvas.addEventListener('click', (event) => {
    const userX = event.x;
    const userY = event.y;
    if (!gameOn) {
        if (userX >= 400 && userX <= 560 && userY >= 350 && userY <= 390) {
            button(405, 350, "Keyboard", 'black', 'gold');
            button(235, 350, "Mouse", 'gold', 'black');
            inputSelected = 'Keyboard';
        }
    }

})


let gameOn: boolean = false;

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {

        escapePressed = true;
        gameOn = false;
        initState()
    }
});

export function showMenu() {
    gameOn = false;
    clear();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    if (escapePressed) {
        button(320, 250, "Resume", 'gold', 'black');
    }
    button(320, 300, "Start", 'gold', 'black');
    button(235, 350, "Mouse", 'gold', 'black');
    button(405, 350, "Keyboard", 'gold', 'black');
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

function gameRunning(now) {
    if (gameOn && ball.lives > 0) {
        updatePhysics();
        collisionCheck();
        if (!lastTime) { lastTime = now; }
        let elapsed = now - lastTime;
        if (elapsed > 1000 / 120) {
            render();
            lastTime = now;
        }
        requestAnimationFrame(gameRunning);
    } else {
        gameOn = false;
        initState();
    }
}

function button(x, y, label, fillBackground, fillText) {
    ctx.beginPath();
    ctx.fillStyle = fillBackground;
    ctx.roundRect(x, y, 160, 40, 50);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = fillText;
    ctx.fillText(label, x + 75, y + 20)
}
