/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type Game = {
    locked: boolean;
    completed?: boolean;
    userId: ObjectId;
    gameCode: string;
    createdAt: string;
    _id: ObjectId;
};

