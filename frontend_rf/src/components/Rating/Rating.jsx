import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import "./rating.css";
import Button from "../../components/Button/Button";
import LayoutGrid from "../../components/LayoutGrid/LayoutGrid";
function Rating({ rating, setRating, openModal, setOpenModal }) {
  const [hover, setHover] = useState(null);

  const handleRating = () => {
    if (rating) setOpenModal(false);
  };
  return (
    <div
      style={{
        width: "84vw",
        height: "21vh",
        backgroundColor: "rgba(246, 246, 246, 1)",
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "40vh",
        marginRight: "auto",
        marginLeft: "auto",
        zIndex: "1000",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(1px 1px 10px rgba(0, 0, 0, .6))",
      }}
    >
      <h2
        style={{
          color: "rgba(37, 37, 37, 1)",
          margin: "5px",
          fontFamily: "PoppinsMedium",
          fontSize: "12px",
          letterSpacing: "1.2px",
          marginTop: "5px",
          marginBottom: "2vh",
          alignSelf: "center",
          fontWeight: "300",
        }}
      >
        Por favor, califica tu última reserva
      </h2>
      <div style={{ marginBottom: "1vh", display: "flex", gap: "5px" }}>
        {[...Array(5)].map((star, index) => {
          const current = index + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={current}
                onClick={() => setRating(current)}
              />
              <IoStar
                className="star"
                size={42}
                color={
                  current <= (hover || rating)
                    ? "rgba(58, 37, 33, .4)"
                    : "rgba(58, 37, 33, .2"
                }
                onMouseEnter={() => setHover(current)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <LayoutGrid>
        <Button text={"Listo"} click={handleRating} />
      </LayoutGrid>
    </div>
  );
}

export default Rating;
