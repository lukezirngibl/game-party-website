/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGameConfig } from '../models/CreateGameConfig';
import type { Game } from '../models/Game';
import type { Party } from '../models/Party';
import type { PartyStats } from '../models/PartyStats';
import type { Player } from '../models/Player';
import type { Result } from '../models/Result';
import type { Team } from '../models/Team';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V1Service {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createParty(
        requestBody: {
            name: string;
        },
    ): CancelablePromise<{
        party: Party;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/create-party',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param joinCode
     * @returns any Ok
     * @throws ApiError
     */
    public static getParty(
        joinCode: string,
    ): CancelablePromise<{
        teams: Array<Team>;
        party: Party;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/party',
            query: {
                'joinCode': joinCode,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static joinTeam(
        requestBody: {
            name: string;
            teamId: string;
        },
    ): CancelablePromise<{
        player: Player;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/join-team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createTeam(
        requestBody: {
            teamName: string;
            name: string;
        },
    ): CancelablePromise<{
        team: Team;
        player: Player;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/create-team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getPlayer(): CancelablePromise<{
        party: Party;
        team: Team;
        players: Array<Player>;
        me: Player;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/player',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static leaveTeam(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/leave-team',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getGame(): CancelablePromise<{
        results: Array<Result>;
        game: Game;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/game',
        });
    }
    /**
     * @param requestBody
     * @returns Result Ok
     * @throws ApiError
     */
    public static submitResult(
        requestBody: {
            time: number | null;
            value: (string | number);
        },
    ): CancelablePromise<Array<Result>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/submit-result',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAdminParty(): CancelablePromise<{
        players: Array<Player>;
        games: Array<Game>;
        teams: Array<Team>;
        party: Party;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/party/admin',
        });
    }
    /**
     * @returns PartyStats Ok
     * @throws ApiError
     */
    public static getLeaderboard(): CancelablePromise<PartyStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/leaderboard',
        });
    }
    /**
     * @param teamId
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveTeam(
        teamId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{teamId}/archive-team',
            path: {
                'teamId': teamId,
            },
        });
    }
    /**
     * @param gameId
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveGame(
        gameId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{gameId}/archive-game',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createGame(
        requestBody: {
            config: CreateGameConfig;
            description: string;
            title: string;
        },
    ): CancelablePromise<{
        game: Game;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/create-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param partyId
     * @returns any Ok
     * @throws ApiError
     */
    public static archiveParty(
        partyId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/{partyId}/archive-party',
            path: {
                'partyId': partyId,
            },
        });
    }
}
