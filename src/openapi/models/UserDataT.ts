/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbGroup } from './DbGroup';
import type { DbUser } from './DbUser';
import type { GroupDataT } from './GroupDataT';
export type UserDataT = {
    groups: Array<DbGroup>;
    group?: GroupDataT;
    user: DbUser;
};

