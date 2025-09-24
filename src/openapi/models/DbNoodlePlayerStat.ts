/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
import type { WordData } from './WordData';
export type DbNoodlePlayerStat = {
    words: Array<WordData>;
    points: number;
    created: number;
    name: string;
    userId: ObjectId;
    playerId: ObjectId;
    gameId: ObjectId;
    _id: ObjectId;
};

