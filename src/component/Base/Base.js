
import Footer from "../Footer/Footer";
import CustomNavbar from "../Navbar/CustomNavbar";

const Base = ({title = "Welcome to our website" , children}) =>{

    return(
        <div className="container-fluid p-0 m-0">
            <CustomNavbar />

            {children}

            <Footer />




        </div>

    )
}

export default Base;
