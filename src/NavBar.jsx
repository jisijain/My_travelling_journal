// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import earth from './images/earth.png';

function NavBar(){
    return (
    <div className='nav-bar'>
        <img className='nav--earth' src={earth} alt="globe" />
        <h5 className='nav--heading'>my travel journal.</h5>
    </div>
    )
}

export default NavBar;
