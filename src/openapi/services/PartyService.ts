/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DbGame } from '../models/DbGame';
import type { DbParty } from '../models/DbParty';
import type { DbPlayer } from '../models/DbPlayer';
import type { DbResult } from '../models/DbResult';
import type { DbTeam } from '../models/DbTeam';
import type { PartyStats } from '../models/PartyStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PartyService {
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
        party: DbParty;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/party/create-party',
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
        teams: Array<DbTeam>;
        party: DbParty;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/party',
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
        player: DbPlayer;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/party/join-team',
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
        team: DbTeam;
        player: DbPlayer;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/party/create-team',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getPlayer(): CancelablePromise<{
        games: Array<DbGame>;
        party: DbParty;
        team: DbTeam;
        players: Array<DbPlayer>;
        me: DbPlayer;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/player',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static leaveTeam(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/leave-team',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getGame(): CancelablePromise<{
        results: Array<DbResult>;
        game: DbGame;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/game',
        });
    }
    /**
     * @param requestBody
     * @returns DbResult Ok
     * @throws ApiError
     */
    public static submitResult(
        requestBody: {
            time: number | null;
            value: (string | number);
        },
    ): CancelablePromise<Array<DbResult>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/party/submit-result',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAdminParty(): CancelablePromise<{
        results: Array<DbResult>;
        players: Array<DbPlayer>;
        games: Array<DbGame>;
        teams: Array<DbTeam>;
        party: DbParty;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/party/admin',
        });
    }
    /**
     * @returns PartyStats Ok
     * @throws ApiError
     */
    public static getLeaderboard(): CancelablePromise<PartyStats> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/party/leaderboard',
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
            url: '/party/{teamId}/archive-team',
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
            url: '/party/{gameId}/archive-game',
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
            config: any;
            description: string;
            title: string;
        },
    ): CancelablePromise<{
        game: DbGame;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/party/create-game',
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
            url: '/party/{partyId}/archive-party',
            path: {
                'partyId': partyId,
            },
        });
    }
}
