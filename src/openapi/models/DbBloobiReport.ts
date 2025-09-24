/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BloobiReportEnum } from './BloobiReportEnum';
import type { ObjectId } from './ObjectId';
export type DbBloobiReport = {
    type: BloobiReportEnum;
    message: string;
    resolved: boolean;
    userId: ObjectId;
    _id: ObjectId;
};

