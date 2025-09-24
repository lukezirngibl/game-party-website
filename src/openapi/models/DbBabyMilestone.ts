/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MilestoneTypeEnum } from './MilestoneTypeEnum';
import type { ObjectId } from './ObjectId';
export type DbBabyMilestone = {
    archived?: boolean;
    completedAt?: number;
    result?: string;
    created: number;
    options?: Array<string>;
    type: MilestoneTypeEnum;
    unit?: string;
    emoji: string;
    text: string;
    babyId: ObjectId;
    _id: ObjectId;
};

