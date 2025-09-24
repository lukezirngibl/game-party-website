/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbBloobiWordReport = {
    reason?: string;
    message?: string;
    resolved?: boolean;
    accepted: boolean;
    word: string;
    playerId: ObjectId;
    puzzleId: ObjectId;
    userId: ObjectId;
    _id: ObjectId;
};

