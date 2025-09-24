/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BloobiBattleTypeEnum } from './BloobiBattleTypeEnum';
import type { BloobiDurationEnum } from './BloobiDurationEnum';
import type { BloobiGameEnum } from './BloobiGameEnum';
import type { ObjectId } from './ObjectId';
export type DbBloobiGame = {
    coopScores?: Array<number>;
    server?: number;
    archived: boolean;
    duration: BloobiDurationEnum;
    subType?: BloobiBattleTypeEnum;
    teamName?: string;
    type: BloobiGameEnum;
    locked: boolean;
    code: string;
    userId: ObjectId;
    puzzleId: ObjectId;
    _id: ObjectId;
};

