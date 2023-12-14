import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageLogin from "../src/pages/pageLogin";
import PageHome from "../src/pages/pageHome";
import PageForgot from "../src/pages/pageForgot";
import PageReservations from "../src/pages/pageReservations";
import PageReserve from "../src/pages/pageReserve";
import PageOTPValidation from "../src/pages/pageOTPValidation";
import PageSignup from "../src/pages/pageSignup";
import PageConfirmation from "../src/pages/pageConfirmation";
import Navbar from "../src/components/Navbar/Navbar";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Navbar userLoggedIn={userLoggedIn} />
      <Routes>
        {
          // Default route
        }
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<PageHome />} />
        <Route path="/reserve" element={<PageReserve />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
