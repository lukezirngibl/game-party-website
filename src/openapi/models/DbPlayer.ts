/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbPlayer = {
    code: string;
    isVerifier: boolean;
    teamCaptain?: boolean;
    isArchived: boolean;
    active: boolean;
    name: string;
    teamId: ObjectId;
    _id: ObjectId;
};

