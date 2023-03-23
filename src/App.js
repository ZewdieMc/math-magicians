/* eslint-disable linebreak-style */
import Calculator from './components/Calculator';
import './styles/calculator.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app">
      <h1>Let&apos;s Do some math</h1>
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
