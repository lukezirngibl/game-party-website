/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbBloobiGame } from './DbBloobiGame';
import type { DbBloobiPlayer } from './DbBloobiPlayer';
import type { DbBloobiSolution } from './DbBloobiSolution';
export type BloobiGameState = {
    playerSolutions: Record<string, Array<DbBloobiSolution>>;
    playersAlive: Record<string, boolean>;
    game: DbBloobiGame;
    players: Array<DbBloobiPlayer>;
    playersActive: Record<string, boolean>;
    playersStarted: Record<string, number>;
};

