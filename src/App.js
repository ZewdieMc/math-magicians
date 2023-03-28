import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import './styles/calculator.css';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app">
      <nav>
        <h3>Math Magicians</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
