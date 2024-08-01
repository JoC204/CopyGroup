// src/components/LinkCard.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "../styles/tarjeta.css";

const LinkCard = ({ path, color, title }) => {
  return (
    <div className={`card ${color}`}>
      <RouterLink to={path} className="card-link">
        <div>
          <p className="tip">{title}</p>
        </div>
      </RouterLink>
    </div>
  );
};

export default LinkCard;
