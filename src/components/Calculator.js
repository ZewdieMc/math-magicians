import { useState } from 'react';
import Result from './Result';
import Keypad from './Keypad';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: '', operation: '' });

  const { total, next, operation } = state;

  const handleButtonClicks = (buttonName) => {
    setState(calculate({ total, next, operation }, buttonName));
  };
  return (
    <div className="calculator">
      <Result result={state} />
      <Keypad onButtonClick={handleButtonClicks} />
    </div>
  );
};

export default Calculator;
