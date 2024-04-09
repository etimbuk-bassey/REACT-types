import { css } from "@emotion/css";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

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
    "& .user-icon p":{
      textAlign: "center",
      alignItems:"center",
      justifyContent: "center",
      margin: "60px auto",
      color: "#087714"
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
        <p><FaUser style={{width:"60px", height: "50px"}} /></p>
      </div>
      <div className="text-content">
        <h3>Upload Your Red Background Passport Photograph</h3>
        <p className="p1">Expected file type:</p>
        <p className="p2">.jpeg .jpg .png</p>
        <div className="btn">
          <button className="btn-browse">
            <FaDownload style={{width:"30px", height: "15px", color: "#087714"}}/>
            Click to browse or Drag file in here
          </button>
          <button className="btn-upload">Upload</button>
        </div>
      </div>
    </div>
  );
}
