import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import News from './pages/NewsPage';
import ContactUs from './pages/ContactUsPage';

function App() {
  return (
    <div>
      <nav className='main-navigation'>
        <ul className='navigation-ul'>
          <li className='navigation-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>
          <li className='navigation-item'>
            <NavLink to='/demo' className='nav-link'>Demo</NavLink>
          </li>
          <li className='navigation-item'>
            <NavLink to='/contact-us' className='nav-link'>Contact-us</NavLink>
          </li>
          <li className='navigation-item'>
            <NavLink to='/News' className='nav-link'>News</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/demo' element={<h1>Cia yra demo page</h1>} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/News' element={<News />} />
        <Route path='*' element={
          <div>
            <h1>Page not found</h1>
            <Link to='/'>Back To Home Page</Link>
          </div>

        } />
      </Routes>
    </div >
  );

}
export default App;
