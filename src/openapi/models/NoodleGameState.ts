/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbNoodleGame } from './DbNoodleGame';
import type { DbNoodlePlayer } from './DbNoodlePlayer';
export type NoodleGameState = {
    playersActive: Record<string, boolean>;
    players: Array<DbNoodlePlayer>;
    gameOver: boolean;
    hearts: number;
    game: DbNoodleGame;
    points: number;
};

