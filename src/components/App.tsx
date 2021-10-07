import React, {FC} from 'react';
import InputForm from './InputForm';
import BalanceOutput from './BalanceOutput';

const App: FC = () => {
  return (
    <div className="App">
      <h2>Little Accountant</h2>
      <InputForm />
      <br />
      <BalanceOutput />
    </div>
  );
};
export default App;
