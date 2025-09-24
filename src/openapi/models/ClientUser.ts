/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbWmtGroup } from './DbWmtGroup';
import type { DbWmtUser } from './DbWmtUser';
export type ClientUser = {
    user: (DbWmtUser & {
        groupData: DbWmtGroup | null;
    });
};

