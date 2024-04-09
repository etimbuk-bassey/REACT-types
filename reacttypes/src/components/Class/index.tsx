import { css } from "@emotion/css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

React;

export default function Class() {
  const styles = css({
    "&": {
      display: "flex",
      border: "2px solid #eee",
      fontFamily: "sans-serif",
      maxWidth: "600px",
      margin: "50px auto",
      gap: 60,
    },
    "&:hover": {
      border: "2px solid #0D4AD6",
    },
    "& .user-icon": {
      border: "1px solid #D9F5DC",
      width: "200px",
      background: "#D9F5DC",
    },
    "& .text-content .p1": {
      marginTop: "10px",
      fontWeight: "bold",
      fontSize: "12px",
    },
    "& .text-content .p2": {
      marginTop: "10px",
    },
    "& .text-content .btn": {
      marginTop: "10px",
    },
    "& .text-content .btn-browse": {
      padding: "10px",
      background: "#D9F5DC",
      border: "none",
      borderRadius: "5px",
    },
    "& .text-content .btn-upload": {
      marginLeft: "10px",
      padding: "8px",
      background: "#087714",
      color: "#eee",
      border: "none",
      borderRadius: "5px",
    },
  });

  return (
    <div className={`container ${styles}`}>
      <div className="user-icon">
        <FontAwesomeIcon icon="fa-solid fa-user" />
      </div>
      <div className="text-content">
        <h3>Upload Your Red Background Passport Photograph</h3>
        <p className="p1">Expected file type:</p>
        <p className="p2">.jpeg .jpg .png</p>
        <div className="btn">
          <button className="btn-browse">
            Click to browse or Drag file in here
          </button>
          <button className="btn-upload">Upload</button>
        </div>
      </div>
    </div>
  );
}
