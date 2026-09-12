import { subjects } from '../data/subjects';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import './Home.css';

function Home(){
    return(
        <>
            <Navbar />
            <div className="home-container">
                <div className="card-grid">
                    {subjects.map((subject) =>(
                        <Card key={subject.id} subject={subject}/>
                    ))} 
                </div>
            </div>
        </>
    );
}
export default Home;