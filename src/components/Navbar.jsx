import './Navbar.css';

function Navbar(){
    return(
        <>
            <nav className='navbar-container'>
                <ul className='navbar-list'>
                    <li><a href="#" className='navbar-links'>Home</a></li>
                    <li><a href="#" className='navbar-links'>Assignments</a></li>
                    <li><a href="#" className='navbar-links'>Add Assignment</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;