import {AccountType, JournalType, UserInputType} from 'types';

export const SET_ACCOUNTS = 'SET_ACCOUNTS';

export const setAccountsActionCreator = (accounts: AccountType[]) => ({
  type: SET_ACCOUNTS,
  payload: accounts,
});

export const SET_JOURNAL_ENTRIES = 'SET_JOURNAL_ENTRIES';

export const setJournalEntriesActionCreator = (journalEntries: JournalType[]) => ({
  type: SET_JOURNAL_ENTRIES,
  payload: journalEntries,
});

export const SET_USER_INPUT = 'SET_USER_INPUT';

export const setUserInputActionCreator = (userInput: UserInputType) => ({
  type: SET_USER_INPUT,
  payload: userInput,
});
