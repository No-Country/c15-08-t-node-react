import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageLogin from "pages/pageLogin";
import PageHome from "pages/pageHome";
import PageForgot from "pages/pageForgot";
import PageReservations from "pages/pageReservations";
import PageReserve from "pages/pageReserve";
import PageOTPValidation from "pages/pageOTPValidation";
import PageSignup from "pages/pageSignup";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
