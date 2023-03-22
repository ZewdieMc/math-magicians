import PropTypes from 'prop-types';

const Keypad = ({ onButtonClick }) => (
  <div className="keypad">
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="AC" id="clear" className="number">AC</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="+/-" id="sign" className="number">+/-</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="%" id="modulo" className="">%</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="÷" id="divide" className="operator">÷</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="7" id="seven" className="number">7</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="8" id="eight" className="number">8</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="9" id="nine" className="number">9</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="x" id="multiply" className="operator">x</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="4" id="four" className="number">4</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="5" id="five" className="number">5</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="6" id="six" className="number">6</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="-" id="minus" className="operator">-</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="1" id="one" className="number">1</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="2" id="two" className="number">2</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="3" id="three" className="number">3</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="+" id="plus" className="operator">+</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="0" id="zero" className="number">0</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="." id="dot" className="">.</button>
    <button type="button" onClick={(e) => onButtonClick(e.target.value)} value="=" id="equals" className="operator">=</button>
  </div>
);

Keypad.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Keypad;
