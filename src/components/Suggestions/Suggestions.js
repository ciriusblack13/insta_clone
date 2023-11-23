import React from "react";
import { Avatar } from "@mui/material";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggerimenti</div>
      <div className="suggestions__user">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username__info">
              <span className="username">edoardo</span>
              <span className="relation">Si è appena iscritto</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
