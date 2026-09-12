import './Card.css';

function Card({ subject }){
    return (
        <div className='card-container'>
            <h2 className='card-title'>{subject.name}</h2>
            <p className='card-pending'>{subject.pending} pending assignments</p>
            <button className="card-button">View Assignments</button>
        </div>
    );
}

export default Card;