import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import News from './pages/NewsPage/NewsPage';
import ContactUs from './pages/ContactUsPage/ContactUsPage';
import Blogs from './pages/BlogsPage/BlogsPage';
import Curses from './pages/CoursesPage/CoursesPage';
import MainNavBar from './components/MainNavBar/MainNavBar';
import './components/MainNavBar/MainNavBar.css'
import CounterPage from './pages/CounterPage/CounterPage';
import ShopPage from './pages/shopPage/ShopPage';

function App() {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path='/demo' element={<h1>Cia yra demo page</h1>} />
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/News' element={<News />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Courses' element={<Curses />} />
        <Route path='/Counter' element={<CounterPage />} />
        <Route path='/Shop' element={<ShopPage />} />
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
