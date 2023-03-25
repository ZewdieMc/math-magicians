import PropTypes from 'prop-types';
import Button from './Button';

const Keypad = ({ onButtonClick }) => (
  <div className="keypad">
    <Button click={onButtonClick} className="">AC</Button>
    <Button click={onButtonClick} className="">+/-</Button>
    <Button click={onButtonClick} className="">%</Button>
    <Button click={onButtonClick} className="operator">÷</Button>
    <Button click={onButtonClick} className="">7</Button>
    <Button click={onButtonClick} className="">8</Button>
    <Button click={onButtonClick} className="">9</Button>
    <Button click={onButtonClick} className="operator">x</Button>
    <Button click={onButtonClick} className="">4</Button>
    <Button click={onButtonClick} className="">5</Button>
    <Button click={onButtonClick} className="">6</Button>
    <Button click={onButtonClick} className="operator">-</Button>
    <Button click={onButtonClick} className="">1</Button>
    <Button click={onButtonClick} className="">2</Button>
    <Button click={onButtonClick} className="">3</Button>
    <Button click={onButtonClick} className="operator">+</Button>
    <Button click={onButtonClick} className="zero">0</Button>
    <Button click={onButtonClick} className="">.</Button>
    <Button click={onButtonClick} className="operator">=</Button>
  </div>
);

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
