/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameType_ExactNumber } from './GameType_ExactNumber';
import type { GameType_ExactOption } from './GameType_ExactOption';
import type { GameType_Free } from './GameType_Free';
import type { GameType_HighScore } from './GameType_HighScore';
import type { GameType_LowScore } from './GameType_LowScore';
import type { GameType_Timed } from './GameType_Timed';
import type { GameType_TimedWithOption } from './GameType_TimedWithOption';
import type { GameType_TimedWithTarget } from './GameType_TimedWithTarget';
export type GameConfig = ({
    hidden: boolean;
    points: number;
    minScore?: number;
    maxScore?: number;
    type: GameType_HighScore;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    minTime?: number;
    maxTime?: number;
    type: GameType_Timed;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    minTime?: number;
    maxTime?: number;
    target: string;
    type: GameType_TimedWithTarget;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    minTime?: number;
    maxTime?: number;
    options: Array<{
        value: string;
        label: string;
    }>;
    target: string;
    type: GameType_TimedWithOption;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    minScore?: number;
    maxScore?: number;
    type: GameType_LowScore;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    target: number;
    type: GameType_ExactNumber;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    type: GameType_Free;
    maxTries?: number;
} | {
    hidden: boolean;
    points: number;
    target: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    type: GameType_ExactOption;
    maxTries?: number;
});

