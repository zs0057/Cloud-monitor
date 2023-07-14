import "../App.css";
import React from "react";
import symbol from "../Image/symbol.png";

export default function SideNav() {
  return (
    <div className="sidebar">
      <img className="symbol" src={symbol} alt="jbnu"></img>

      <div className="sidebar-li">
        <i className="fas fa-home me-2"></i>
        <span className="active">Home</span>
      </div>

      <div>
        <i className="fab fa-aws me-2"></i>
        <span>AWS</span>
      </div>

      <div>
        <i className="fab fa-google me-2"></i>
        <span>GCP</span>
      </div>

      <div>
        <i className="fab fa-windows"></i>
        <span>Azure</span>
      </div>

      <div>
        <i className="fas fa-cloud"></i>
        <span>Naver</span>
      </div>

      <div>
        <i className="fas fa-brain"></i>
        <span>Recommend</span>
      </div>
    </div>
  );
}
