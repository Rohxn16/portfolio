import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Projects/>} />
        <Route path="/resume" element={<Projects/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
