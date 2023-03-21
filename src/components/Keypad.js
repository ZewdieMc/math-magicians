const Keypad = () => (
  <div className="keypad">
    <button type="button" id="clear" className="number">AC</button>
    <button type="button" id="sign" className="number">+/-</button>
    <button type="button" id="modulo" className="">%</button>
    <button type="button" id="divide" className="operator">÷</button>
    <button type="button" id="seven" className="number">7</button>
    <button type="button" id="eight" className="number">8</button>
    <button type="button" id="nine" className="number">9</button>
    <button type="button" id="multiply" className="operator">X</button>
    <button type="button" id="four" className="number">4</button>
    <button type="button" id="five" className="number">5</button>
    <button type="button" id="six" className="number">6</button>
    <button type="button" id="minus" className="operator">-</button>
    <button type="button" id="one" className="number">1</button>
    <button type="button" id="two" className="number">2</button>
    <button type="button" id="three" className="number">3</button>
    <button type="button" id="plus" className="operator">+</button>
    <button type="button" id="zero" className="number">0</button>
    <button type="button" id="dot" className="">.</button>
    <button type="button" id="equals" className="operator">=</button>
  </div>
);
export default Keypad;
