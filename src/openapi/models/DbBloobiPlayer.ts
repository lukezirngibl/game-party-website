/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbBloobiPlayer = {
    appVersion?: string;
    date?: string;
    gameId: ObjectId;
    userId: ObjectId;
    started: number | null;
    created: number;
    name: string;
    archived: boolean;
    _id: ObjectId;
};

