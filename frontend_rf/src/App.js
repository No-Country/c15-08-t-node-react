import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import FooterHome from "../src/components/Footer/FooterHome";
import Navbar from "../src/components/Navbar/Navbar";

import PageLogin from "../src/pages/pageLogin";
import PageHome from "../src/pages/pageHome";
import PageForgot from "../src/pages/pageForgot";
import PageReservations from "../src/pages/pageReservations";
import PageReserve from "../src/pages/pageReserve";
import PageOTPValidation from "../src/pages/pageOTPValidation";
import PageSignup from "../src/pages/pageSignup";
import PageConfirmation from "../src/pages/pageConfirmation";

import PageProfile from "../src/pages/pageProfile";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} />
      <Routes>
        {
          // Default route
        }
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<PageHome />} />
        <Route
          path="/reserve"
          element={<PageReserve userLoggedIn={userLoggedIn} />}
        />
        <Route path="/reservations/:userId" element={<PageReservations />} />

        <Route
          path="/signup"
          element={<PageSignup setUserLogged={setUserLoggedIn} />}
        />
        <Route
          path="/login"
          element={<PageLogin setUserLogged={setUserLoggedIn} />}
        />
        <Route
          path="/otpvalidation"
          element={<PageOTPValidation setUserLogged={setUserLoggedIn} />}
        />
        <Route path="/forgot" element={<PageForgot />} />
        <Route path="/confirmation/:reserveId" element={<PageConfirmation />} />
        <Route
          path="/profile/:userId"
          element={
            <PageProfile
              setUserLoggedIn={setUserLoggedIn}
              userLoggedIn={userLoggedIn}
            />
          }
        />
      </Routes>
      <FooterHome />
    </BrowserRouter>
  );
}

export default App;
