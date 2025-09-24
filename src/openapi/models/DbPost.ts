/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbPost = {
    created: number;
    imgs: Array<string>;
    archived: boolean;
    caption?: string;
    title: string;
    babyId: ObjectId;
    friendId: ObjectId;
    _id: ObjectId;
};

