import {SET_JOURNAL_ENTRIES} from 'actions';
import {JournalType} from 'types';

const initialState: JournalType[] = [];

export default function journal(state = initialState, action: {type: string; payload: JournalType[]}) {
  switch (action.type) {
    case SET_JOURNAL_ENTRIES:
      return action.payload;

    default:
      return state;
  }
}
