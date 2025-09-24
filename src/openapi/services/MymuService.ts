/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from '../models/Currency';
import type { DbCompletedTask } from '../models/DbCompletedTask';
import type { DbTask } from '../models/DbTask';
import type { DbUser } from '../models/DbUser';
import type { GroupDataT } from '../models/GroupDataT';
import type { UserDataT } from '../models/UserDataT';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MymuService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static recoverAccount(
        requestBody: {
            phoneNumber: string;
        },
    ): CancelablePromise<{
        token: string;
        userData: UserDataT;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/recover-account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static registerUser(
        requestBody: {
            firstName: string;
        },
    ): CancelablePromise<{
        token: string;
        user: DbUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/register-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns UserDataT Ok
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<UserDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mymu/get-user',
        });
    }
    /**
     * @param groupId
     * @returns GroupDataT Ok
     * @throws ApiError
     */
    public static getGroup(
        groupId: string,
    ): CancelablePromise<GroupDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mymu/{groupId}/get-group',
            path: {
                'groupId': groupId,
            },
        });
    }
    /**
     * @param groupId
     * @returns UserDataT Ok
     * @throws ApiError
     */
    public static leaveGroup(
        groupId: string,
    ): CancelablePromise<UserDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mymu/{groupId}/leave-group',
            path: {
                'groupId': groupId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns DbCompletedTask Ok
     * @throws ApiError
     */
    public static addCompletedTask(
        requestBody: {
            completedTask: any;
        },
    ): CancelablePromise<DbCompletedTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/add-completed-task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static removeCompletedTask(
        requestBody: {
            completedTaskId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/remove-completed-task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DbTask Ok
     * @throws ApiError
     */
    public static addTask(
        requestBody: {
            task: any;
        },
    ): CancelablePromise<DbTask> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/add-task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static removeTask(
        requestBody: {
            taskId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/remove-task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateTask(
        requestBody: {
            task: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/update-task',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns GroupDataT Ok
     * @throws ApiError
     */
    public static createGroup(
        requestBody: {
            currency: Currency;
            name: string;
        },
    ): CancelablePromise<GroupDataT> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/create-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns GroupDataT Ok
     * @throws ApiError
     */
    public static joinGroup(
        requestBody: {
            code: string;
        },
    ): CancelablePromise<GroupDataT> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/join-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addExpense(
        requestBody: {
            expense: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/add-expense',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static removeExpense(
        requestBody: {
            expenseId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/remove-expense',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateExpense(
        requestBody: {
            expense: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/update-expense',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateUser(
        requestBody: {
            user: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mymu/update-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
