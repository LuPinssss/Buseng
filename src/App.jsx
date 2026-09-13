import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Assignments from './pages/Assignments';
import AddAssignment from './pages/AddAssignment';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/add" element={<AddAssignment />} />
    </Routes>
  );
}

export default App;