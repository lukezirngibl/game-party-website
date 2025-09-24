/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbBaby } from './DbBaby';
import type { DbBabyFriend } from './DbBabyFriend';
import type { DbBabyMilestone } from './DbBabyMilestone';
import type { DbBabyUser } from './DbBabyUser';
import type { DbPost } from './DbPost';
import type { DbPostLike } from './DbPostLike';
import type { DbPrediction } from './DbPrediction';
export type BabyDataT = {
    myLikes: Array<DbPostLike>;
    posts: Array<DbPost>;
    baby: DbBaby;
    myFriend: DbBabyFriend;
    predictions: Array<DbPrediction>;
    milestones: Array<DbBabyMilestone>;
    friends: Array<DbBabyFriend>;
    users: Array<DbBabyUser>;
};

