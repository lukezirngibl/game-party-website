/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbBloobiGameResult = {
    badges?: Record<string, number>;
    words: Array<string>;
    cheated?: boolean;
    streak?: number;
    pangramStreak?: number;
    ratio: number;
    points: number;
    teamName?: string;
    name?: string;
    createdAt: string;
    gameId: ObjectId;
    esoterics?: Array<string>;
    puzzleId: ObjectId;
    playerId: ObjectId;
    userId: ObjectId;
    _id: ObjectId;
};

