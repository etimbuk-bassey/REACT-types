/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from "@emotion/css";
import React, { useState } from "react";
React;

export default function Todo() {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState("");
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(true);
  const addItem = (value: string) => {
    setItems((prev) => [...prev, value]);
  };
  console.log(items, "items");

  const Styles = css({
    "&": {
      fontFamily: "sans-serif",
      justifyContent: "space-between",
      borderRadius: "50px",
      background: "#e0e0e0",
      boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
      textAlign: "center",
      maxWidth: "600px",
      margin: "50px auto",
      padding: "10px",
    },

    "& .heading-text": {
      color: "#090348",
    },
    "& button": {
      background: "#090348",
      color: "#eee",
      padding: "5px",
      border: "1px solid #eee",
      borderRadius: "3px",
    },
    "& button:hover": {
      color: "#090348",
      border: "1px solid #090348",
      background: "#eee",
    },
    "& .img-div": {
      marginBottom: "20px",
    },
    "& .img-div img": {
      height: "300px",
      width: "300px",
    },
    "& input": {
      border: "1px solid #090348",
      borderRadius: "3px",
      color: "#090348",
      padding: "5px",
      margin: "auto 5px",
    },
    "& .sub-btn": {
      background: "#36C506",
    },
    "& .can-btn": {
      background: "#DA0816",
    },
    "& .task": {
      border: "1px solid #090348",
      borderRadius: "3px",
      width: "400px",
      padding: "0px",
      margin: "10px auto",
    },
  });

  return (
    <div className={`container ${Styles}`}>
      <h1 className="heading-text">TO-DO LIST</h1>
      {loading ? (
        <div className="div-start">
          <div className="img-div">
            <img src="/images/undraw_Mail_sent_re_0ofv.png" alt="task-image" />
          </div>
          <button
            className="start-btn"
            onClick={() => {
              setLoading(false);
            }}
          >
            Add Tasks
          </button>
        </div>
      ) : (
        <div>
          <div>
            {items.map((task, id) => (
              <div className="task" key={id}>
                <p className="taskitem" >
                  <span>🎫</span>
                  {task}
                </p>
              </div>
            ))}
          </div>

          {hide ? (
                <div className="div-inputs">
                <input
                  value={item}
                  type="text"
                  placeholder="what are you up to..."
                  onInput={(e) => {
                    setItem(e.target.value);
                  }}
                />
  
                <button
                  className="can-btn"
                  onClick={() => {
                    // setLoading(true);
                    setHide(false);
                    setItem("");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="sub-btn"
                  onClick={() => {
                    addItem(item);
                    setItem("");
                    // setLoading(true);
                    setHide(false);
                  }}
                >
                  Submit
                </button>
              </div>
          ) : (
            <button
              className="start-btn"
              onClick={() => {
                setHide(true);
              }}
            >
              New Tasks
            </button>
          )}
        </div>
      )}
    </div>
  );
}
