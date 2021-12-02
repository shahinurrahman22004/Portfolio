import React from "react";
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./Pages/Home/Homes";
import Bike from "./Pages/Home/Bike/Bike";
import Travel from "./Pages/Home/Travel/Travel";
import Doctor from "./Pages/Home/Doctor/Doctor";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/home" element={<Homes />} />
          <Route path="/bike" element={<Bike />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;
