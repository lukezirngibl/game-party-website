/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GameActionType_Accusation } from './GameActionType_Accusation';
import type { GameActionType_AccusationDone } from './GameActionType_AccusationDone';
import type { GameActionType_ActivateGame } from './GameActionType_ActivateGame';
import type { GameActionType_AssignRole } from './GameActionType_AssignRole';
import type { GameActionType_Audio } from './GameActionType_Audio';
import type { GameActionType_ComputePoints } from './GameActionType_ComputePoints';
import type { GameActionType_ConfirmRole } from './GameActionType_ConfirmRole';
import type { GameActionType_EndDay } from './GameActionType_EndDay';
import type { GameActionType_EndDefense } from './GameActionType_EndDefense';
import type { GameActionType_EndNightTime } from './GameActionType_EndNightTime';
import type { GameActionType_EndRound } from './GameActionType_EndRound';
import type { GameActionType_FinishDoctor } from './GameActionType_FinishDoctor';
import type { GameActionType_FinishMafia } from './GameActionType_FinishMafia';
import type { GameActionType_FinishSheriff } from './GameActionType_FinishSheriff';
import type { GameActionType_FinishTrial } from './GameActionType_FinishTrial';
import type { GameActionType_ForceEndDay } from './GameActionType_ForceEndDay';
import type { GameActionType_GameOver } from './GameActionType_GameOver';
import type { GameActionType_Investigate } from './GameActionType_Investigate';
import type { GameActionType_Kill } from './GameActionType_Kill';
import type { GameActionType_NewGame } from './GameActionType_NewGame';
import type { GameActionType_Points } from './GameActionType_Points';
import type { GameActionType_Protect } from './GameActionType_Protect';
import type { GameActionType_SetCreativeNarration } from './GameActionType_SetCreativeNarration';
import type { GameActionType_SetDescription } from './GameActionType_SetDescription';
import type { GameActionType_SetGameSettings } from './GameActionType_SetGameSettings';
import type { GameActionType_StartDoctor } from './GameActionType_StartDoctor';
import type { GameActionType_StartMafia } from './GameActionType_StartMafia';
import type { GameActionType_StartNightTime } from './GameActionType_StartNightTime';
import type { GameActionType_StartRound } from './GameActionType_StartRound';
import type { GameActionType_StartSheriff } from './GameActionType_StartSheriff';
import type { GameActionType_VerifyHaptics } from './GameActionType_VerifyHaptics';
import type { GameActionType_Vote } from './GameActionType_Vote';
import type { ObjectId } from './ObjectId';
import type { PointsType } from './PointsType';
import type { RemovalType } from './RemovalType';
import type { Role } from './Role';
import type { Team } from './Team';
export type _GameAction = ({
    role: Role;
    type: GameActionType_AssignRole;
} | {
    type: GameActionType_ForceEndDay;
} | {
    defensePhaseLength: number;
    discussionPhaseLength: number;
    numSheriff: number;
    numDoctor: number;
    numCitizens: number;
    numMafia: number;
    nighttimeAudio: boolean;
    creativeNarration: boolean;
    automatedNarration: boolean;
    type: GameActionType_SetGameSettings;
} | {
    type: GameActionType_FinishTrial;
} | {
    type: GameActionType_EndDay;
} | {
    audioType: RemovalType;
    audioId: string;
    playerId: string;
    type: GameActionType_Audio;
} | {
    type: GameActionType_AccusationDone;
} | {
    type: GameActionType_StartRound;
} | {
    playerTargetedId: ObjectId;
    type: GameActionType_EndDefense;
} | {
    type: GameActionType_EndRound;
} | {
    type: GameActionType_GameOver;
} | {
    type: GameActionType_StartNightTime;
} | {
    audioId?: string;
    type: GameActionType_EndNightTime;
} | {
    type: GameActionType_StartDoctor;
} | {
    type: GameActionType_FinishDoctor;
} | {
    type: GameActionType_StartMafia;
} | {
    type: GameActionType_FinishMafia;
} | {
    type: GameActionType_StartSheriff;
} | {
    type: GameActionType_FinishSheriff;
} | {
    description: string;
    type: GameActionType_SetDescription;
} | {
    value: boolean;
    playerTargetedId: ObjectId;
    type: GameActionType_Accusation;
} | {
    value: boolean;
    playerTargetedId: ObjectId;
    type: GameActionType_Vote;
} | {
    playerTargetedId: ObjectId;
    type: GameActionType_Kill;
} | {
    playerTargetedId: ObjectId;
    type: GameActionType_Protect;
} | {
    playerTargetedId: ObjectId;
    type: GameActionType_Investigate;
} | {
    type: GameActionType_ActivateGame;
} | {
    newGameId: ObjectId;
    type: GameActionType_NewGame;
} | {
    type: GameActionType_VerifyHaptics;
} | {
    type: GameActionType_ConfirmRole;
} | {
    value: boolean;
    type: GameActionType_SetCreativeNarration;
} | {
    team?: Team;
    playerId?: ObjectId;
    pointsType: PointsType;
    type: GameActionType_Points;
} | {
    type: GameActionType_ComputePoints;
});

