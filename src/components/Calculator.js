import Result from './Result';
import Keypad from './Keypad';

const Calculator = () => (
  <div className="calculator">
    <Result result="0" />
    <Keypad />
  </div>
);

export default Calculator;
