/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommonConfig } from './CommonConfig';
import type { GameType_ExactNumber } from './GameType_ExactNumber';
import type { GameType_ExactOption } from './GameType_ExactOption';
import type { GameType_Free } from './GameType_Free';
import type { GameType_HighScore } from './GameType_HighScore';
import type { GameType_LowScore } from './GameType_LowScore';
import type { GameType_Record } from './GameType_Record';
import type { GameType_Timed } from './GameType_Timed';
import type { GameType_TimedWithOption } from './GameType_TimedWithOption';
import type { GameType_TimedWithTarget } from './GameType_TimedWithTarget';
export type GameConfig = (CommonConfig & ({
    minValue?: number;
    maxValue?: number;
    type: GameType_HighScore;
} | {
    type: GameType_Record;
} | {
    minTime?: number;
    maxTime?: number;
    type: GameType_Timed;
} | {
    minTime?: number;
    maxTime?: number;
    target: string;
    type: GameType_TimedWithTarget;
} | {
    minTime?: number;
    maxTime?: number;
    options: Array<{
        value: string;
        label: string;
    }>;
    target: string;
    type: GameType_TimedWithOption;
} | {
    minValue?: number;
    maxValue?: number;
    type: GameType_LowScore;
} | {
    minValue?: number;
    maxValue?: number;
    target: number;
    type: GameType_ExactNumber;
} | {
    type: GameType_Free;
} | {
    target: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    type: GameType_ExactOption;
}));

