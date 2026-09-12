import './Card.css';

function Card({ subject }) {
  return (
    <div className="cards">
      <div className="card-info">
        <h2 className="card-title">{subject.name}</h2>
        <p className="card-pending">{subject.pending} pending assignments</p>
      </div>
      <button className="card-button">View</button>
    </div>
  );
}

export default Card;