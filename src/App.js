/* eslint-disable linebreak-style */
import Calculator from './components/Calculator';
import './styles/calculator.css';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app">
      <div className="math">
        <h1>Let&apos;s Do some math</h1>
        <Calculator />
      </div>
      <Quote />
    </div>
  );
}

export default App;
