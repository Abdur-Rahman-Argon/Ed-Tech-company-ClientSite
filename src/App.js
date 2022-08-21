import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
import ReviewAdd from "./components/Pages/DashBoard/ReviewAdd";
import ContactUs from "./components/Pages/Contact/ContactUs";
import ServiceDetails from "./components/Pages/Home/ServiceDetails";
import Services from "./components/Pages/Home/Services";

function App() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('https://i.ibb.co/txdkL8y/photo-1615715757401-f30e7b27b912.jpg')]">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/reviewAdd" element={<ReviewAdd></ReviewAdd>}></Route>
        <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/serviceDetails"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
      </Routes>

      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
