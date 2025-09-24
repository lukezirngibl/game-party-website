/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NoodleGameEnum } from './NoodleGameEnum';
import type { ObjectId } from './ObjectId';
export type DbNoodleGame = {
    server: number;
    disconnected: boolean;
    archived: boolean;
    type: NoodleGameEnum;
    started: number | null;
    code: string;
    userId: ObjectId;
    _id: ObjectId;
};

