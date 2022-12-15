import { createBall, createBricks, createPaddle } from "./prepareObjects";

export let gameOn: boolean = false;

export let ballState;
export let paddleState;
export let brickState;

export function createNewObjects() {
    ballState = createBall();
    paddleState = createPaddle();
    brickState = createBricks();
}