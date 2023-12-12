import "./App.css";
import React from "react";
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
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          // Default route
        }
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" Component={PageHome} element={<PageHome />} />
        <Route
          path="/reserve"
          Component={PageReserve}
          element={<PageReserve />}
        />
        <Route
          path="/reservations"
          Component={PageReservations}
          element={<PageReservations />}
        />

        <Route path="/signup" Component={PageSignup} element={<PageSignup />} />
        <Route path="/login" Component={PageLogin} element={<PageLogin />} />
        <Route
          path="/otpvalidation"
          Component={PageOTPValidation}
          element={<PageOTPValidation />}
        />
        <Route path="/forgot" Component={PageForgot} element={<PageForgot />} />
        <Route
          path="/confirmation"
          Component={PageConfirmation}
          element={<PageConfirmation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
