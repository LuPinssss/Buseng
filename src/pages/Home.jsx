import { subjects } from '../data/subjects';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Home(){
    return(
        <>
            <Navbar />
            <div className="home-cards">
                {subjects.map((subject) =>(
                    <Card key={subject.id} subject={subject}/>
                ))} 
            </div>
        </>
    );
}
export default Home;