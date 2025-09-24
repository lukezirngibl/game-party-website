/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectId } from './ObjectId';
export type DbBloobiUserStats = {
    ranks: Record<string, number>;
    badges: Record<string, number>;
    badgesCount: number;
    maxPangramStreak: number;
    maxStreak: number;
    currentPangramStreak: number;
    currentStreak: number;
    totalPangrams: number;
    gamesWithPangram: number;
    uniqueWords: number;
    totalWords: number;
    words: Record<string, boolean>;
    totalPoints: number;
    avgRatio: number;
    avgWordLength: number;
    numCoopGames: number;
    numBattleGames: number;
    numSoloGames: number;
    numGames: number;
    _id: ObjectId;
};

