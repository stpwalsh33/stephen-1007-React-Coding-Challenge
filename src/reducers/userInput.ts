import {SET_USER_INPUT} from 'actions';
import {UserInputType} from '../types';

const initialState: UserInputType = {
  startAccount: null,
  endAccount: null,
  startPeriod: null,
  endPeriod: null,
  format: '',
};

export default function userInput(state = initialState, action: {type: string; payload: UserInputType}) {
  switch (action.type) {
    case SET_USER_INPUT:
      return action.payload;

    default:
      return state;
  }
}
