/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbCompletedTask } from './DbCompletedTask';
import type { DbExpense } from './DbExpense';
import type { DbGroup } from './DbGroup';
import type { DbMember } from './DbMember';
import type { DbTask } from './DbTask';
import type { DbUser } from './DbUser';
export type GroupDataT = {
    members: Array<(DbMember & {
        user: DbUser;
    })>;
    group: DbGroup;
    expenses: Array<DbExpense>;
    tasks: Array<DbTask>;
    completedTasks: Array<DbCompletedTask>;
};

