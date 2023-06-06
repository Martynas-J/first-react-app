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
            </ul>
        </nav>
    )
}

export default MainNavBar