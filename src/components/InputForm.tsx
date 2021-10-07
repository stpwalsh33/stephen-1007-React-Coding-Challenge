/* eslint-disable react-hooks/exhaustive-deps */

import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {setAccountsActionCreator, setJournalEntriesActionCreator, setUserInputActionCreator} from 'actions';
import {accountsData, journalData} from 'data';
import {AccountType, JournalType} from 'types';
import {parseCSV, parseUserInput} from 'utils';

const InputForm: FC<{dispatch: any}> = ({dispatch}) => {
  const [accounts, setAccounts] = useState<string>(accountsData);
  const [journal, setJournal] = useState<string>(journalData);
  const [userInput, setUserInput] = useState<string>('1000 5000 MAR-16 JUL-16 HTML');

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    dispatch(setAccountsActionCreator(parseCSV(accounts) as AccountType[]));
    dispatch(setJournalEntriesActionCreator(parseCSV(journal) as JournalType[]));
    dispatch(setUserInputActionCreator(parseUserInput(userInput)));
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    switch (e.target.id) {
      case 'journal': {
        setJournal(e.target.value);
        break;
      }
      case 'accounts': {
        setAccounts(e.target.value);
        break;
      }
      case 'userInput': {
        setUserInput(e.target.value);
        break;
      }
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="journal">Journal</label>
        <textarea className="form-control" id="journal" rows={3} onChange={handleChange} value={journal} />
      </div>

      <div className="form-group">
        <label htmlFor="accounts">Accounts</label>
        <textarea className="form-control" id="accounts" rows={3} onChange={handleChange} value={accounts} />
      </div>

      <div className="form-group">
        <label htmlFor="userInput">User input</label>
        <input type="text" className="form-control" id="userInput" value={userInput} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default connect()(InputForm);
