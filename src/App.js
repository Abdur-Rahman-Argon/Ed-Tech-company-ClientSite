import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('https://i.ibb.co/txdkL8y/photo-1615715757401-f30e7b27b912.jpg')]">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
