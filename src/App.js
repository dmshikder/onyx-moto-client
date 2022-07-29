import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "./App.css";
import AllParts from "./pages/AllParts/AllParts";
import Blogs from "./pages/Blogs/Blogs";
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/Login/SignUp";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PurchaseIntent from "./pages/PurchaseIntent/PurchaseIntent";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allparts" element={<AllParts/>}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/myportfolio" element={<MyPortfolio/>}></Route>
        <Route path="dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} >
        <Route index element={<MyOrders/>}></Route>
        <Route path="review" element={<AddReview/>}></Route>
        <Route path="profile" element={<MyProfile/>}></Route>
        <Route path="users" element={<Users/>}></Route>


        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        
        <Route
          path="/purchaseintent/:id"
          element={
            <RequireAuth>
             <PurchaseIntent/>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
