import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./landingpage/Login";
import Layout from "./components/dashboard/Layout";


function App() {
  return (
    <div className="main">
     
      <Routes>
        <Route
          path="/"element={<Login />}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/dashboard/*" element={<Layout/>} />
        {/* <Route index element={<Users />} />
        <Route index path="users" element={<Users />} />
        <Route path="user/:id" element={<UserDetails />} /> */}

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
