/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Currency } from './Currency';
import type { Record_string_number_ } from './Record_string_number_';
export type DbExpense = {
    archiveDate?: number;
    archived: boolean;
    participants: Record_string_number_;
    message: string;
    exchangeRate: number;
    currency: Currency;
    amount: number;
    displayAmount: number;
    payer: string;
    owner: string;
    version?: number;
    modified: number;
    created: number;
    groupId: string;
    _id: string;
};

