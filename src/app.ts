import { render, checkInput, collisionCheck, canvas, ctx, clear, WIDTH, HEIGHT } from "./animation";

const startButton = document.getElementById('startButton') as HTMLButtonElement;
const optionsButton = document.getElementById('options') as HTMLButtonElement;
let gameOn: boolean = false;
let id = null;

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        gameOn = false;
        alert('Escape button pressed')
        gameStart()
    }
});


function newGame() {
        clear();
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        

        if (startButton.style.display = 'none') {
            startButton.style.display = 'block';
            optionsButton.style.display = 'block';
        }
        
        
        startButton.addEventListener('click', () => {
            gameOn = true;
            startButton.style.display = 'none';
            optionsButton.style.display = 'none';
            gameStart();
        })
}


newGame()

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
        console.log('asd')
        cancelAnimationFrame(id)
        newGame()
    }
}

function gameRunning() {
    // checkInput()
    collisionCheck();
    render();
    id = requestAnimationFrame(gameRunning);
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