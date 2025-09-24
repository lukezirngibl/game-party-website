/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BloobiBattleTypeEnum } from '../models/BloobiBattleTypeEnum';
import type { BloobiGameDataT } from '../models/BloobiGameDataT';
import type { BloobiGameEnum } from '../models/BloobiGameEnum';
import type { BloobiGameState } from '../models/BloobiGameState';
import type { BloobiReportEnum } from '../models/BloobiReportEnum';
import type { CareerDataT } from '../models/CareerDataT';
import type { DbAnnouncement } from '../models/DbAnnouncement';
import type { DbBloobiGame } from '../models/DbBloobiGame';
import type { DbBloobiGameResult } from '../models/DbBloobiGameResult';
import type { DbBloobiPuzzle } from '../models/DbBloobiPuzzle';
import type { DbBloobiReport } from '../models/DbBloobiReport';
import type { DbBloobiSolution } from '../models/DbBloobiSolution';
import type { DbBloobiUser } from '../models/DbBloobiUser';
import type { DbBloobiUserStats } from '../models/DbBloobiUserStats';
import type { DbBloobiWord } from '../models/DbBloobiWord';
import type { DbBloobiWordReport } from '../models/DbBloobiWordReport';
import type { ObjectId } from '../models/ObjectId';
import type { Omit_DbBloobiPuzzle__id_ } from '../models/Omit_DbBloobiPuzzle__id_';
import type { Rank } from '../models/Rank';
import type { Record_string_Array_string__ } from '../models/Record_string_Array_string__';
import type { WordDefinition } from '../models/WordDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BloobiService {
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static createUser(
        requestBody: any,
    ): CancelablePromise<{
        token: string;
        user: DbBloobiUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/create-user',
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
        user: DbBloobiUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/{userId}/user',
            path: {
                'userId': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static recompute(
        requestBody: {
            apiKey: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/recompute',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbBloobiUser Ok
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<DbBloobiUser> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/user',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static recoverAccount(
        requestBody: {
            email: string;
            code: string;
        },
    ): CancelablePromise<{
        token: string;
        user: DbBloobiUser;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/recover-account',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static sendRecoveryEmail(
        requestBody: {
            email: string;
        },
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/send-recovery-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getAnnouncement(): CancelablePromise<DbAnnouncement | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/announcement',
        });
    }
    /**
     * @param requestBody
     * @returns number Ok
     * @throws ApiError
     */
    public static addReaction(
        requestBody: {
            announcementId: string;
            emoji: string;
        },
    ): CancelablePromise<number | null> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/add-reaction',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getPuzzle(): CancelablePromise<(DbBloobiPuzzle & {
        esoterics: Array<string>;
        wordToCareers: Record_string_Array_string__;
        notIncluded: Array<string>;
        variantMap: Record<string, string>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/puzzle',
        });
    }
    /**
     * @param gameId
     * @returns BloobiGameDataT Ok
     * @throws ApiError
     */
    public static getGame(
        gameId: string,
    ): CancelablePromise<BloobiGameDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/{gameId}/game',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param gameId
     * @returns any Ok
     * @throws ApiError
     */
    public static getGameResult(
        gameId: string,
    ): CancelablePromise<DbBloobiGameResult | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/{gameId}/game-result',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getGameResults(): CancelablePromise<Array<{
        puzzle: {
            date: string;
            _id: ObjectId;
        };
        result: {
            badges: Record<string, number>;
            points: number;
            ratio: number;
        };
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/game-results',
        });
    }
    /**
     * @param word
     * @returns WordDefinition Ok
     * @throws ApiError
     */
    public static getDefinition(
        word: string,
    ): CancelablePromise<WordDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/{word}/definition',
            path: {
                'word': word,
            },
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiUser Ok
     * @throws ApiError
     */
    public static registerEmail(
        requestBody: {
            subscribe: boolean;
            email: string;
        },
    ): CancelablePromise<DbBloobiUser> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/register-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiReport Ok
     * @throws ApiError
     */
    public static addReport(
        requestBody: {
            type: BloobiReportEnum;
            message: string;
        },
    ): CancelablePromise<DbBloobiReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/add-report',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getCoopLeaderboardYesterday(): CancelablePromise<Array<{
        ratio: number;
        points: number;
        teamName: string | null;
        users: Array<{
            name: string;
            userId: ObjectId;
        }>;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/coop-leaderboard-yesterday',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaders(): CancelablePromise<Array<{
        diff: number;
        userId: string;
        points: number;
        name: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaders',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeadersStats(): CancelablePromise<{
        points: number;
        diff: number;
        rank: number;
        total: number;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaders-stats',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getCoopLeaderboard(): CancelablePromise<Array<{
        ratio: number;
        points: number;
        teamName: string | null;
        users: Array<{
            name: string;
            userId: ObjectId;
        }>;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/coop-leaderboard',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getYesterdayLeaderboard(): CancelablePromise<Array<{
        player: {
            name: string;
        };
        result: {
            streak?: number;
            ratio: number;
            points: number;
            name: string;
            userId: ObjectId;
        };
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaderboard-yesterday',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaderboard(): CancelablePromise<Array<{
        player: {
            name: string;
        };
        result: {
            streak?: number;
            ratio: number;
            points: number;
            name: string;
            userId: ObjectId;
        };
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaderboard',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getYesterdayLeaderboardStats(): CancelablePromise<{
        total: number;
        rank: number;
        points: number;
        ratio: number;
        avgPoints: number;
        percentile: number;
    } | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaderboard-stats-yesterday',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static getFriendLeaderboard(
        requestBody: {
            type: 'today' | 'yesterday';
            userIds: Array<string>;
        },
    ): CancelablePromise<Array<{
        result?: {
            player: {
                name: string;
            };
            result: {
                streak?: number;
                ratio: number;
                points: number;
                name: string;
                userId: ObjectId;
            };
            rank: number;
        };
        leader?: {
            diff: number;
            name: string;
            points: number;
            rank: number | null;
        };
        userId: string;
    }>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/friend-leaderboard',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getLeaderboardStats(): CancelablePromise<{
        total: number;
        ratio: number;
        rank: number;
        points: number;
        avgPoints: number;
        percentile: number;
    } | null> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/leaderboard-stats',
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiWordReport Ok
     * @throws ApiError
     */
    public static addWordReport(
        requestBody: {
            word: string;
            playerId: string;
            puzzleId: string;
            gameId: string;
        },
    ): CancelablePromise<DbBloobiWordReport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/add-word-report',
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
        rank: Rank;
        solution: DbBloobiSolution;
        state: BloobiGameState;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/{gameId}/state',
            path: {
                'gameId': gameId,
            },
        });
    }
    /**
     * @param playerId
     * @returns DbBloobiSolution Ok
     * @throws ApiError
     */
    public static getGameSolutions(
        playerId: string,
    ): CancelablePromise<Array<DbBloobiSolution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/{playerId}/get-solutions',
            path: {
                'playerId': playerId,
            },
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getUserStats(): CancelablePromise<({
        results: Array<DbBloobiGameResult>;
        stats: DbBloobiUserStats;
    } | {
        empty: boolean;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/stats',
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiGame Ok
     * @throws ApiError
     */
    public static createGame(
        requestBody: {
            teamName?: string;
            subType?: BloobiBattleTypeEnum;
            appVersion?: string;
            type: BloobiGameEnum;
            name: string;
        },
    ): CancelablePromise<DbBloobiGame> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/create-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiGame Ok
     * @throws ApiError
     */
    public static joinGame(
        requestBody: {
            appVersion?: string;
            name: string;
            code: string;
        },
    ): CancelablePromise<DbBloobiGame> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/join-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static joinGameV2(
        requestBody: {
            appVersion?: string;
            name: string;
            code: string;
        },
    ): CancelablePromise<(DbBloobiGame | {
        error: string;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/join-game-v2',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns number Ok
     * @throws ApiError
     */
    public static getPuzzleWordStats(): CancelablePromise<Record<string, Array<number>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/puzzle-words-stats',
        });
    }
    /**
     * @returns DbBloobiGame Ok
     * @throws ApiError
     */
    public static quickJoin(): CancelablePromise<DbBloobiGame> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/quick-join',
        });
    }
    /**
     * @param requestBody
     * @returns DbBloobiGameResult Ok
     * @throws ApiError
     */
    public static finishGame(
        requestBody: {
            coopScore?: number;
            badges?: Array<string>;
            esoterics?: Array<string>;
            started?: number;
            playerId?: string;
            solutions: Array<string>;
            gameId: string;
        },
    ): CancelablePromise<DbBloobiGameResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/finish-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static updateResult(
        requestBody: {
            badges: Array<string>;
            playerId: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/update-result',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns CareerDataT Ok
     * @throws ApiError
     */
    public static getCareerData(): CancelablePromise<CareerDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/career-data',
        });
    }
    /**
     * @returns CareerDataT Ok
     * @throws ApiError
     */
    public static getCareerDataV2(): CancelablePromise<CareerDataT> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/career-data-v2',
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
            url: '/bloobi/archive-game',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns Omit_DbBloobiPuzzle__id_ Ok
     * @throws ApiError
     */
    public static generatePuzzle(
        requestBody: any,
    ): CancelablePromise<Omit_DbBloobiPuzzle__id_> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/generate-puzzle',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbBloobiPuzzle Ok
     * @throws ApiError
     */
    public static getFuturePuzzles(): CancelablePromise<Array<DbBloobiPuzzle>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/future-puzzles',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static computeCareers(
        requestBody: {
            words: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/compute-careers',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static addWord(
        requestBody: {
            word: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/add-word',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static completeNerdBadges(
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/complete-nerd-badges',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static getUnresolvedReports(): CancelablePromise<Array<{
        word: DbBloobiWord | null;
        report: DbBloobiWordReport;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/unresolved-reports',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static resolveWordReport(
        requestBody: {
            careers: Array<string>;
            action: 'esoteric' | 'valid' | 'resolve' | 'reject';
            word: string;
            id: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/resolve-word-report',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    public static reset(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/reset',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static computeWord(
        requestBody: {
            word: string;
        },
    ): CancelablePromise<Array<{
        careers?: Array<string>;
        variants: Array<string>;
        suggestion: boolean | null;
        esoteric: boolean | null;
        valid: boolean | null;
        word: string;
    }>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/compute-word',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Ok
     * @throws ApiError
     */
    public static computeProbs(
        requestBody: {
            words: Array<string>;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/bloobi/compute-probs',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns DbBloobiPuzzle Ok
     * @throws ApiError
     */
    public static computeDay(): CancelablePromise<DbBloobiPuzzle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/bloobi/compute-day',
        });
    }
}
