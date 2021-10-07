/* eslint-disable */

export type AccountType = {
  ACCOUNT: number;
  LABEL: string;
};

export type JournalType = {
  ACCOUNT: number;
  PERIOD: Date;
  DEBIT: number;
  CREDIT: number;
};

export type UserInputType = {
  startAccount: number | null;
  endAccount: number | null;
  startPeriod: Date | null;
  endPeriod: Date | null;
  format: string;
};

export interface RootState {
  accounts: AccountType[];
  journalEntries: JournalType[];
  userInput: UserInputType;
}
