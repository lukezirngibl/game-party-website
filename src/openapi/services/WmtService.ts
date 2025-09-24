/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientUser } from '../models/ClientUser';
import type { DbWmtGroup } from '../models/DbWmtGroup';
import type { DbWmtUser } from '../models/DbWmtUser';
import type { Partial_DbWmtUser_ } from '../models/Partial_DbWmtUser_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WmtService {
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getPublicLeaderboard(): CancelablePromise<{
        leaderboard: Array<DbWmtGroup>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wmt/public-leaderboard',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: any,
    ): CancelablePromise<{
        token: string;
        user: (DbWmtUser & {
            groupData: DbWmtGroup | null;
        });
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wmt/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ClientUser Ok
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<ClientUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wmt/user',
        });
    }
    /**
     * @param requestBody
     * @returns ClientUser Ok
     * @throws ApiError
     */
    public static createGroup(
        requestBody: {
            name: string;
        },
    ): CancelablePromise<ClientUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wmt/create-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaderboard(): CancelablePromise<{
        leaderboard: Array<DbWmtGroup>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wmt/get-leaderboard',
        });
    }
    /**
     * @param requestBody
     * @returns ClientUser Ok
     * @throws ApiError
     */
    public static updateUser(
        requestBody: Partial_DbWmtUser_,
    ): CancelablePromise<ClientUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wmt/update-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ClientUser Ok
     * @throws ApiError
     */
    public static refreshUser(): CancelablePromise<ClientUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/wmt/refresh-user',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static wasteTime(
        requestBody: {
            time: number;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wmt/waste-time',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static searchGroups(
        requestBody: {
            search: string;
        },
    ): CancelablePromise<{
        results: Array<DbWmtGroup>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/wmt/search-groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
