import { Link } from 'react-router-dom';
import './Card.css';

function Card({ subject }) {
  return (
    <div className="cards">
      <div className="card-info">
        <h2 className="card-title">{subject.name}</h2>
        <p className="card-pending">{subject.pending} pending assignments</p>
      </div>
      <Link to={`/assignments#subject-${subject.id}`} className="card-button">
        View
      </Link>
    </div>
  );
}

export default Card;