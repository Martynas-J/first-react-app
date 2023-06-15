import {NavLink } from 'react-router-dom';

const MainNavBar = () => {
    return (
<nav className='main-navigation'>
            <ul className='nav-list'>
                <li className='navigation-item'>
                    <NavLink to='/' className='navigation-link'>Home</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/demo' className='navigation-link'>Demo</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/contact-us' className='navigation-link'>Contact-us</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/News' className='navigation-link'>News</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/Blogs' className='navigation-link'>Blogs</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/Courses' className='navigation-link'>Courses</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/Counter' className='navigation-link'>Counter</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/Shop' className='navigation-link'>Shop</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/Cities' className='navigation-link'>Cities</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/FreeTime' className='navigation-link'>FreeTime</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/TodoPage' className='navigation-link'>Todo Page</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/ChuckNorrisJokesPage' className='navigation-link'>Chuck Norris Jokes</NavLink>
                </li>
                <li className='navigation-item'>
                    <NavLink to='/DogsPage' className='navigation-link'>Dogs Page</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default MainNavBar