import { createBall, createBricks, createPaddle } from "./prepareObjects";

export const state = {
    gameOn: false,
    ballState: null,
    paddleState: null,
    brickState: null
}

export function createNewObjects() {
    state.ballState = createBall();
    state.paddleState = createPaddle();
    state.brickState = createBricks();
}