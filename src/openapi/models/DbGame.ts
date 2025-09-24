/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameConfig } from './GameConfig';
import type { ObjectId } from './ObjectId';
export type DbGame = {
    config: GameConfig;
    isTemplate: boolean;
    isArchived: boolean;
    active: boolean;
    description: string;
    title: string;
    partyId: ObjectId;
    _id: ObjectId;
};

