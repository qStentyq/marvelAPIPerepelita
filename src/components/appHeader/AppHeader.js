import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink end style = {({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})}to="/">Characters</NavLink></li>
                    /
<<<<<<< HEAD
                    <li><NavLink style = {({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})}to="/comics">Comics</NavLink></li>
=======
                    <li><NavLink end style = {({isActive}) => ({color: isActive ? '#9F0013' : 'inherit'})}to="/comics">Comics</NavLink></li>
>>>>>>> 627c47890f11b206f68879c62042bb51c778ba25
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;