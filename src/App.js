import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import News from './pages/NewsPage/NewsPage';
import ContactUs from './pages/ContactUsPage/ContactUsPage';
import Blogs from './pages/BlogsPage/BlogsPage';


function App() {
  return (
    <div>
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
        </ul>
      </nav>

      <Routes>
        <Route path='/demo' element={<h1>Cia yra demo page</h1>} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/News' element={<News />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='*' element={
          <div>
            <h1>Page not found</h1>
            <span><Link to='/'>Back To Home Page</Link></span>
          </div>
        } />
      </Routes>
    </div >
  );

}
export default App;
