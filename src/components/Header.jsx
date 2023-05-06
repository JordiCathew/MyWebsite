import '../styles/styles.css';
import { NavLink } from 'react-router-dom'; // More functionality than Link
import { Link } from 'react-router-dom';

function Header(){
    return (
        <div className="nav">
            <div className="nav-header">
                <Link to="/" className='no-decoration name'>
                    <h1 className='mainTitle'>Jordi Cathew</h1>
                </Link>
            </div>
            <div className="nav-links" id="navbarNav">
                <NavLink to="/" className="nav-link">About</NavLink>
                <NavLink to="/blog" className="nav-link">Blog</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;