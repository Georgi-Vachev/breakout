import { createBall, createPaddle } from "./prepareObjects";

export let gameOn: boolean = false;

export let ballState = createBall();
export let paddleState = createPaddle();

export function saveBall(pausedBall) {
    ballState = pausedBall;
}

export function savePaddle(pausedPaddle) {
    paddleState = pausedPaddle;
}

