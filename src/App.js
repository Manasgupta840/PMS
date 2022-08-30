import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./components/Base";
import { BrowserRouter, Routes, Route ,useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Userdashboard from "./pages/user-routes/Userdashboard";
import Privateroute from "./components/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import ListProperty from "./pages/property-routes/Listproperties";
import Terms from "./pages/Footer/Terms";
import Policy from "./pages/Footer/Policy";
import CustomerList from "./pages/user-routes/CustomerList";
import OwnerList from "./pages/user-routes/OwnerList";
import Admindashboard from "./pages/user-routes/AdminDashboard";
import AllOwner from "./pages/user-routes/AllOwners";
import AddCustomer from "./pages/user-routes/AddCustomer";
import AddOwner from "./pages/user-routes/AddOwner";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/add-owner" element={<AddOwner />} />

        <Route path="/properties-list" element={<ListProperty />} />
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<Userdashboard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
          <Route path="customer-list" element={<CustomerList />} />
          <Route path="owner-properties" element={<OwnerList />} />
          <Route path="owner-list" element={<AllOwner />} />
          <Route path="admin-dashboard" element={<Admindashboard />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
