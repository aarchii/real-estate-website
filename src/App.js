import React from "react";

//import routes and route
import { Routes, Route, useLocation } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import PropertySubmissionForm from "./pages/PropertySubmissionForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname !== '/';
  return (
    <div className="w-full bg-white">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/property/:id' element={<PropertyDetails/>} />
        <Route path="/submit-property" element={<PropertySubmissionForm />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
