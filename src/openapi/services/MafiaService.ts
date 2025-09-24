/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Game } from '../models/Game';
import type { GameAction } from '../models/GameAction';
import type { GameDataT } from '../models/GameDataT';
import type { GameState } from '../models/GameState';
import type { Gender } from '../models/Gender';
import type { Player } from '../models/Player';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MafiaService {
    /**
     * @param userId
     * @returns User Ok
     * @throws ApiError
     */
    public static getUser(
        userId: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mafia/{userId}/user',
            path: {
                'userId': userId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns User Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: any,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mafia/create-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param gameId
     * @returns GameDataT Ok
     * @throws ApiError
     */
    public static getGame(
        gameId: string,
    ): CancelablePromise<GameDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mafia/{gameId}/game',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param gameId
     * @returns GameState Ok
     * @throws ApiError
     */
    public static getGameState(
        gameId: string,
    ): CancelablePromise<GameState> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mafia/{gameId}/state',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns Game Ok
     * @throws ApiError
     */
    public static createGame(
        requestBody: {
            avatar?: number;
            gender?: Gender;
            name: string;
            userId: string;
        },
    ): CancelablePromise<Game> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mafia/game',
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
            avatar?: number;
            isAi: boolean;
            gender?: Gender;
            name: string;
            gameCode: string;
            userId?: string;
        },
    ): CancelablePromise<{
        player: Player;
        game: Game;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/mafia/join',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param gameId
     * @returns Player Ok
     * @throws ApiError
     */
    public static getPlayers(
        gameId: string,
    ): CancelablePromise<Array<Player>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mafia/{gameId}/players',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param playerId
     * @returns any Ok
     * @throws ApiError
     */
    public static removePlayer(
        playerId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mafia/{playerId}/player',
            path: {
                'playerId': playerId,
            },
        });
    }
    /**
     * @param gameId
     * @returns GameAction Ok
     * @throws ApiError
     */
    public static getGameActions(
        gameId: string,
    ): CancelablePromise<Array<GameAction>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/mafia/{gameId}/actions',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param actionId
     * @returns any Ok
     * @throws ApiError
     */
    public static deleteAction(
        actionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/mafia/action/{actionId}',
            path: {
                'actionId': actionId,
            },
        });
    }
}
