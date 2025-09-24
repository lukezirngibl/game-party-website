/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountType_Guest } from './AccountType_Guest';
export type DbWmtUser = {
    type: AccountType_Guest;
    archiveDate?: number;
    created: number;
    archived: boolean;
    _id: string;
    totalTime: number;
    group: string | null;
};

