import React from 'react';
import './App.css';

import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Validation from "./Pages/Validation.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" Component={Signup} element={<Signup />} />
      <Route path="/login" Component={Login} element={<Login />} />
      <Route
        path="/validation"
        Component={Validation}
        element={<Validation />}
      />
      <Route
        path="/forgot"
        Component={ForgotPassword}
        element={<ForgotPassword />}
      />
    </Routes>
  );
}

export default App;



// import "./App.css";
// // import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";

// function App() {
//   return (
//     <div className="App">
//       <Signup></Signup>
//     </div>
//   );
// }

// export default App;
