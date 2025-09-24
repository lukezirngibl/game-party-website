/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _GameAction } from './_GameAction';
import type { ObjectId } from './ObjectId';
export type GameAction = {
    playerId: ObjectId;
    gameId: ObjectId;
    createdAt: string;
    action: _GameAction;
    _id: ObjectId;
};

