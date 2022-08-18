import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './component/Base/Base';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './component/AboutUs/AboutUs';
import CustomNavbar from './component/Navbar/CustomNavbar';
import SignUp from './component/Customer/SignUp';
import Login from './component/Customer/Login';

import CustomerDashboard from './component/Customer/CustomerDashboard';
import Privateroute from './component/Privateroute';
import CProfile from './component/Customer/CProfile';
import OSignUp from './component/Owner/OSignUp';
import OLogin from './component/Owner/OLogin';
import Properties from './component/Properties/Properties';
import ListProperty from './component/Customer/ListProperty';
import Terms from './component/Footer/Terms';
import Policy from './component/Footer/Policy';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element = {<Home /> } />
        <Route path="/customerLogin" element = {<Login />} />
        <Route path="/owner-signUp" element = {<OSignUp />} />
        <Route path="/owner-login" element = {<OLogin />} />
        <Route path="/properties" element = {<Properties />} />
        <Route path="/property-list" element = {<ListProperty />} />
        <Route path='/Terms' element={<Terms/>} />
        <Route path='/Policy' element={<Policy/>} />
        {/* <Route path="/signup" element = {<SignUp />} /> */}
        <Route path="/about" element = {<AboutUs />} />
        <Route path="/customerSignUp" element ={<SignUp />}  />
        <Route path='/customer' element={<Privateroute />} >
        <Route path="dashboard" element={<CustomerDashboard />} />
        {/* <Route path="/profile" element={<CProfile />} /> */}
        



        </Route>
      </Routes>
      


      
      </BrowserRouter>



      
    </div>
  );
}

export default App;
