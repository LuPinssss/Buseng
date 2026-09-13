import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-links">Home</Link></li>
        <li><Link to="/assignments" className="navbar-links">Assignments</Link></li>
        <li><Link to="/add" className="navbar-links">Add Assignment</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;