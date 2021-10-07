import {SET_ACCOUNTS} from 'actions';
import {AccountType} from 'types';

const initialState: AccountType[] = [];

export default function accounts(state = initialState, action: {type: string; payload: AccountType[]}) {
  switch (action.type) {
    case SET_ACCOUNTS:
      return action.payload;

    default:
      return state;
  }
}
