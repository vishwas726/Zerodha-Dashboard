import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { useUser } from "./UserContext";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  if (!user) {
    // alert('Please log in to view the dashboard.');
    // navigate('/login');
    return (
      <Routes>
        <Route exact path="/*" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          {/* <Route exact path="/login" element={<Summary />} /> */}

          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
