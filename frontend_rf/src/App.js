import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import FooterHome from "../src/components/Footer/FooterHome";
import Navbar from "../src/components/Navbar/Navbar";
import Rating from "../src/components/Rating/Rating";

import PageLogin from "../src/pages/pageLogin";
import PageHome from "../src/pages/pageHome";
import PageForgot from "../src/pages/pageForgot";
import PageReservations from "../src/pages/pageReservations";
import PageReserve from "../src/pages/pageReserve";
import PageOTPValidation from "../src/pages/pageOTPValidation";
import PageSignup from "../src/pages/pageSignup";
import PageConfirmation from "../src/pages/pageConfirmation";
import PageMenu from "../src/pages/pageMenu";
import PageProfile from "../src/pages/pageProfile";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  const handleRating = async () => {
    if (rating) {
      setLoading(true);
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/qualification/createQualify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stars: rating,
            comment: comment,
            bookingId: bookingId,
          }),
        }
      ).then(() => {
        setLoading(false);
        setOpenModal(false);
      });
    }
  };
  useEffect(() => {
    const handleQualify = async () => {
      await fetch(
        `https://restaurant-c2gx.onrender.com/api/v1/qualification/toQualify/${
          JSON.parse(localStorage.getItem("user"))?.id
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            setOpenModal(true);
            return response.json();
          }
        })
        .then((data) => {
          setBookingId(data.id);
          setBookingDate(data.date);
        })
        .catch((error) => console.log(error));
    };
    if (JSON.parse(localStorage.getItem("user"))?.firstname) {
      setUserLoggedIn(true);
      handleQualify();
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn} />
      {openModal && (
        <Rating
          loading={loading}
          handleRating={handleRating}
          openModal={openModal}
          setOpenModal={setOpenModal}
          setRating={setRating}
          rating={rating}
          setComment={setComment}
          comment={comment}
          bookingDate={bookingDate}
        />
      )}

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
        <Route path="/menu" element={<PageMenu />} />
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
