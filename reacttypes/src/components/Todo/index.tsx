/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from "@emotion/css";
import React, { useState } from "react";

interface IUser {
  title: string;
  status?: boolean;
  id: number;
}

export default function Todo() {
  const [items, setItems] = useState<IUser[]>([
    // { id: 1, title: "task 1", status: false },
    // { id: 2, title: "task 2", status: false },
  ]);
  const [item, setItem] = useState("");
  const [hide, setHide] = useState(true);
  const [next, setNext] = useState(true);
  const [edit, setEdit] = useState(-1);
  const [line, setLine] = useState("line-through");

  const addItem = (item: string ) => {
    // setItems((prev) => [...prev, value]);
    if (item) {
      const num = items.length + 1;
      const newEntry = { id: num, title: item, status: false };
      setItems([...items, newEntry]);
      setItem(" ");
    }
  };

  const markDone = (id: number) => {
    const setMarkDone = items.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status };
      }
      return item;
    });
    setItems(setMarkDone);
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
      margin: "20px",
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
      padding: "5px",
      margin: "10px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .task .taskitem": {
      marginLeft: "10px",
    },
    "& .task .icon": {
      marginRight: "10px",
      background: "#eee",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px #bebebe",
    },
    "& .task .del-icon": {
      background: "#DA0816",
      padding: "3px",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "10px",
    },
    "& .task .del-icon:hover": {
      background: "#A60303",
    },
    "& .task .edit-icon": {
      padding: "3px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    "& .task .edit-icon:hover": {
      background: "#C7C7C9",
    },
    "& .edit-input": {
      border: "1px solid #090348",
      borderRadius: "3px",
      width: "370px",
      padding: "10px",
      margin: "10px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <div className={`container ${Styles}`}>
      <h1 className="heading-text">TO-DO LIST</h1>
      {next ? (
        <div className="div-start">
          <div className="img-div">
            <img src="/images/undraw_Mail_sent_re_0ofv.png" alt="task-image" />
          </div>
          <button
            className="start-btn"
            onClick={() => {
              setNext(false);
            }}
          >
            Add Tasks
          </button>
        </div>
      ) : (
        <div>
          <div>
            {items &&
              items.map((task, id) => (
                <div key={task.id}>
                  {edit !== id ? (
                    <div className="task">
                      <p
                        className="taskitem"
                        style={{
                          textDecoration: `${task.status ? `${line}` : " "}`,
                        }}
                      >
                        <input
                          type="checkbox"
                          onClick={() => {
                            markDone(task.id);
                            setLine("line-through");
                          }}
                        />
                        {task.title}
                      </p>

                      <div className="icon">
                        {task.status ? null : (
                          <span
                            className="edit-icon"
                            style={{ display: " " }}
                            onClick={() => {
                              setEdit(id);
                              setItem(task.title);
                              setHide(false);
                            }}
                          >
                            🖊️
                          </span>
                        )}

                        <span
                          className="del-icon"
                          onClick={() => {
                            const updatedItem = items.filter((i) => i != task);
                            setItems(updatedItem);
                            setHide(false);
                          }}
                        >
                          🗑️
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="edit-input">
                      <input
                        value={item}
                        type="text"
                        placeholder="........."
                        onInput={(e) => {
                          setItem(e.target.value);
                        }}
                      />
                      <button
                        className="can-btn"
                        onClick={() => {
                          setEdit(-1);
                          setHide(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        title="save"
                        className="sub-btn"
                        onClick={() => {
                          if (item.trim() !== "" ? item : alert("Please Input a task")) {
                            setItems((prev) => {
                              const temp = [...prev];
                              const currIndex = temp.findIndex(
                                (tem) => tem.id === task.id
                              );
                              temp[currIndex] = {
                                ...temp[currIndex],
                                title: item,
                              };
                              return temp;
                            });
                          }

                          if (item !== ""){
                            setEdit(-1);
                          }
                          else setEdit(id)
                          
                          setHide(false);
                          setItem(" ");
                        }}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
          {hide ? (
            <div className="div-inputs">
              <input
                value={item}
                type="text"
                placeholder="what are you up to...😒"
                onInput={(e) => {
                  setItem(e.target.value);
                }}
              />

              <button
                className="can-btn"
                onClick={() => {
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
                // setEdit(true);
                setItem("");
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


