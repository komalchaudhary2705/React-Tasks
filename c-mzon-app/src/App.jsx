import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
