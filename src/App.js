import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
