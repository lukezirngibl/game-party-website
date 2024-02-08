/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameType_ExactNumber } from './GameType_ExactNumber';
import type { GameType_ExactOption } from './GameType_ExactOption';
import type { GameType_Free } from './GameType_Free';
import type { GameType_HighScore } from './GameType_HighScore';
import type { GameType_LowScore } from './GameType_LowScore';
export type GameConfig = ({
    points: number;
    minScore?: number;
    maxScore?: number;
    type: GameType_HighScore;
    maxTries?: number;
} | {
    points: number;
    minScore?: number;
    maxScore?: number;
    type: GameType_LowScore;
    maxTries?: number;
} | {
    points: number;
    target: number;
    type: GameType_ExactNumber;
    maxTries?: number;
} | {
    points: number;
    type: GameType_Free;
    maxTries?: number;
} | {
    points: number;
    target: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    type: GameType_ExactOption;
    maxTries?: number;
});

