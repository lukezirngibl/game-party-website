/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RepeatConfig } from './RepeatConfig';
export type CommonTaskProps = {
    archiveDate?: number;
    notifications: Array<{
        timeOfDay: number;
        delta: number;
    }>;
    responsible: Array<string>;
    repeatConfig?: RepeatConfig;
    disableConfig?: RepeatConfig;
    timeOfDay?: number;
    startDate: string;
    notes?: string;
    name: string;
    emoji?: string;
    version?: number;
    archived: boolean;
    modified: number;
    created: number;
    owner: string;
    groupId: string;
    _id: string;
};

