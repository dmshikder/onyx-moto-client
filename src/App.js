import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import PageNotFound from './pages/PageNotFound';
import Purchase from './pages/Purchase/Purchase';
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
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/purchase' element={<Purchase/>}></Route>
    
    <Route path='*' element={<PageNotFound/>}></Route>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
