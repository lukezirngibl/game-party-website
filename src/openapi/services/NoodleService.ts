/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbNoodleGame } from '../models/DbNoodleGame';
import type { DbNoodleGameResult } from '../models/DbNoodleGameResult';
import type { DbNoodlePlayer } from '../models/DbNoodlePlayer';
import type { DbNoodlePlayerStat } from '../models/DbNoodlePlayerStat';
import type { DbNoodleUser } from '../models/DbNoodleUser';
import type { NoodleGameEnum } from '../models/NoodleGameEnum';
import type { NoodleGameState } from '../models/NoodleGameState';
import type { TileData } from '../models/TileData';
import type { WordData } from '../models/WordData';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NoodleService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: any,
    ): CancelablePromise<{
        token: string;
        user: DbNoodleUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/create-user',
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
        user: DbNoodleUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/{userId}/user',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param gameId
     * @returns any Ok
     * @throws ApiError
     */
    public static getGameState(
        gameId: string,
    ): CancelablePromise<{
        tileData: TileData;
        state: NoodleGameState;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/{gameId}/state',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns DbNoodleGame Ok
     * @throws ApiError
     */
    public static createGame(
        requestBody: {
            appVersion: string;
            type: NoodleGameEnum;
            name: string;
        },
    ): CancelablePromise<DbNoodleGame> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/create-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbNoodleUser Ok
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<DbNoodleUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/user',
        });
    }
    /**
     * @param gameId
     * @returns any Ok
     * @throws ApiError
     */
    public static getGame(
        gameId: string,
    ): CancelablePromise<{
        myPlayer: DbNoodlePlayer;
        game: DbNoodleGame;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/{gameId}/game',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param type
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaderboardV2(
        type: string,
    ): CancelablePromise<Array<{
        points: number;
        name: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/leaderboard-v2/{type}',
            path: {
                'type': type,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaderboard(): CancelablePromise<Array<{
        points: number;
        numPlayers: number;
        name: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/leaderboard',
        });
    }
    /**
     * @param gameId
     * @returns any Ok
     * @throws ApiError
     */
    public static getGameResult(
        gameId: string,
    ): CancelablePromise<DbNoodleGameResult | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/noodle/{gameId}/game-result',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param gameId
     * @param requestBody
     * @returns DbNoodlePlayerStat Ok
     * @throws ApiError
     */
    public static finishGame(
        gameId: string,
        requestBody: {
            points: number;
            started: number;
            type: NoodleGameEnum;
            name: string;
            playerId: string;
            words: Array<WordData>;
        },
    ): CancelablePromise<DbNoodlePlayerStat> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/{gameId}/finish-game',
            path: {
                'gameId': gameId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static joinGame(
        requestBody: {
            appVersion: string;
            name: string;
            code: string;
        },
    ): CancelablePromise<(DbNoodleGame | {
        error: string;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/join-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveGame(
        requestBody: {
            gameId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/noodle/archive-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
