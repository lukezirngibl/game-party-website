/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameAction } from './GameAction';
import type { GameStateEnum } from './GameStateEnum';
import type { ObjectId } from './ObjectId';
import type { Role } from './Role';
export type GameState = {
    defenseEnded: string | null;
    defenseStarted: string | null;
    accussationStarted: string | null;
    voteTimeByPlayer: Record<string, string | null>;
    pointsByPlayer: Record<string, number>;
    accusationsRemaining: Record<string, number>;
    doneWithAccusationsByPlayer: Record<string, boolean | null>;
    playersAliveCount: number;
    playersAlive: Record<string, boolean>;
    playerInvestigatedId: string | null;
    playerProtectedId: string | null;
    playerKilledId: string | null;
    playerKillAttemptId: string | null;
    playerOnTrialId: string | null;
    playerHangedId: string | null;
    defenseIsOver: boolean;
    numMafiaLeft: number;
    endOfNightAudioId: string | null;
    endOfDayAudioId: string | null;
    votesByPlayer: Record<string, Record<string, boolean | null>>;
    isSheriffDead: boolean;
    isDoctorDead: boolean;
    trialDefendedPlayers: Record<string, boolean | null>;
    accusationsByPlayer: Record<string, Record<string, boolean | null>>;
    playersConfirmed: Record<string, boolean>;
    verifiedHaptics: Record<string, boolean>;
    roundIndex: number;
    playersRoles: Record<string, Role>;
    newGameId: ObjectId | null;
    isGameOver: boolean;
    citizensWins: boolean;
    mafiaWins: boolean;
    actions: Array<GameAction>;
    isMyPlayerConfirmed: boolean;
    votingDone: boolean;
    everyoneDoneWithAccusations: boolean;
    votesToFree: number;
    votesToHang: number;
    currentAccusers: Array<string> | null;
    accusationExtraTime: number;
    playerDescriptions: Record<string, string>;
    defensePhaseLength: number;
    discussionPhaseLength: number;
    numSheriff: number;
    numDoctor: number;
    numCitizens: number;
    numMafia: number;
    nighttimeAudio: boolean;
    creativeNarration: boolean | null;
    automatedNarration: boolean;
    state: GameStateEnum;
};

