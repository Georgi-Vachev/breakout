import { createBall, createPaddle } from "./prepareObjects";

export let gameOn: boolean = true;

export let ballState = createBall();
export let paddleState = createPaddle();

export function saveBall(pausedBall) {
    ballState = pausedBall;
}

export function savePaddle(pausedPaddle) {
    paddleState = pausedPaddle;
}

