/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbBaby = {
    server: number;
    archived: boolean;
    active: boolean;
    milestonesDone: boolean;
    birthDate: number | null;
    color: number;
    code: string;
    name: string;
    theme: number;
    userId: ObjectId;
    _id: ObjectId;
};

