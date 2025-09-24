/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BabyDataT } from '../models/BabyDataT';
import type { DbBaby } from '../models/DbBaby';
import type { DbBabyMilestone } from '../models/DbBabyMilestone';
import type { DbBabyUser } from '../models/DbBabyUser';
import type { DbPrediction } from '../models/DbPrediction';
import type { MilestoneTypeEnum } from '../models/MilestoneTypeEnum';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BabyService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: {
            name: string;
        },
    ): CancelablePromise<{
        token: string;
        user: DbBabyUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param userId
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static fetchUser(
        userId: string,
        requestBody: {
            apiKey: string;
        },
    ): CancelablePromise<{
        token: string;
        user: DbBabyUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/{userId}/user',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DbBaby Ok
     * @throws ApiError
     */
    public static createBaby(
        requestBody: {
            theme: number;
            name: string;
        },
    ): CancelablePromise<DbBaby> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/create-baby',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbBaby Ok
     * @throws ApiError
     */
    public static getBabies(): CancelablePromise<Array<DbBaby>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/baby/babies',
        });
    }
    /**
     * @param requestBody
     * @returns DbBabyMilestone Ok
     * @throws ApiError
     */
    public static createMilestone(
        requestBody: {
            options?: Array<string>;
            unit?: string;
            emoji: string;
            type: MilestoneTypeEnum;
            text: string;
            babyId: string;
        },
    ): CancelablePromise<DbBabyMilestone> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/create-milestone',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbBabyUser Ok
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<DbBabyUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/baby/user',
        });
    }
    /**
     * @param requestBody
     * @returns DbBabyUser Ok
     * @throws ApiError
     */
    public static updateUser(
        requestBody: {
            token?: string;
            name?: string;
        },
    ): CancelablePromise<DbBabyUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/update-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DbPrediction Ok
     * @throws ApiError
     */
    public static addPrediction(
        requestBody: {
            value: string;
            friendId: string;
            milestoneId: string;
        },
    ): CancelablePromise<DbPrediction> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/add-prediction',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static completeMilestone(
        requestBody: {
            value: string;
            milestoneId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/complete-milestone',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveMilestone(
        requestBody: {
            milestoneId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/archive-milestone',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param babyId
     * @returns any Ok
     * @throws ApiError
     */
    public static leaveBaby(
        babyId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/baby/{babyId}/leave-baby',
            path: {
                'babyId': babyId,
            },
        });
    }
    /**
     * @param babyId
     * @returns BabyDataT Ok
     * @throws ApiError
     */
    public static getBaby(
        babyId: string,
    ): CancelablePromise<BabyDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/baby/{babyId}/baby',
            path: {
                'babyId': babyId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static joinBaby(
        requestBody: {
            code: string;
        },
    ): CancelablePromise<(DbBaby | {
        error: string;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/join-baby',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveBaby(
        requestBody: {
            babyId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/archive-baby',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static likePost(
        requestBody: {
            postId: string;
            friendId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/like-post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createPost(
        requestBody: {
            description: string;
            title: string;
            images: Array<string>;
            babyId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/baby/create-post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
