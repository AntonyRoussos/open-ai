import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Header from "./components/common/Header";
import User from "./components/pages/User";
const App = () => {

  
  return (
    <>
      <Router>
        {/*TODO: A horizontal navigation bar with Link on Pages */}
        <Header />
        <Routes>
          {/*Home Page with informations and our feature but only if user is logged in can use it*/}
          <Route path="/" element={<Home />} />
          <Route path={"/users/:id"} element={<User />} />
          {/*Display Profile page only if user is logged in*/}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
