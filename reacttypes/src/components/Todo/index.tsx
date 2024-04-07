/* eslint-disable @typescript-eslint/no-empty-function */
import { css } from "@emotion/css";
import React, { useState } from "react";
React;

export default function Todo() {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState("");
  const [hide, setHide] = useState(true);
  const [next, setNext] = useState(true);
  const [edit, setEdit] = useState(1);
  const [line, setLine] = useState("none");
  const [editHide, setEditHide] = useState(" ");
  const [done, setDone] = useState(1);

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
      margin: "20px"
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
            {items.map((task, id) => (
              <div key={id}>
                { edit !== id ? (
                  <div className="task">
                    <p
                      className="taskitem"
                      style={{ textDecoration: `${line}` }}
                    >
                      <input
                        type="checkbox"
                        onClick={() => {
                          setLine(line === "none" ? "line-through" : "none");
                          setEditHide(editHide === " " ? "none" : " ");
                        }}
                      />
                      {task}
                    </p>

                    <div className="icon">
                      <span
                        className="edit-icon"
                        style={{ display: `${editHide}` }}
                        onClick={() => {
                          setEdit(id);
                          setItem(task);
                          setHide(false);
                        }}
                      >
                        🖊️
                      </span>

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
                        setEdit(edit === id);
                        setHide(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="sub-btn"
                      onClick={() => {
                        setEdit(edit === id);
                        setHide(false);
                        setItems((prev) => {
                          const temp = [...prev];
                          temp[id] = item;
                          return temp;
                        });
                        setItem("");
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
                setEdit(true);
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

// /* eslint-disable @typescript-eslint/no-empty-function */
// import { css } from "@emotion/css";
// import React, { useState } from "react";
// React;

// export default function Todo() {
//   const [items, setItems] = useState<string[]>([]);
//   const [item, setItem] = useState("");
//   const [hide, setHide] = useState(true);
//   const [next, setNext] = useState(true);
//   const [edit, setEdit] = useState(true);
//   const [selItemId, setSelItemId] = useState(-1);

//   const addItem = (value: string) => {
//     setItems((prev) => [...prev, value]);
//   };

//   console.log(items, "items");

//   const Styles = css({
//     "&": {
//       fontFamily: "sans-serif",
//       justifyContent: "space-between",
//       borderRadius: "50px",
//       background: "#e0e0e0",
//       boxShadow: "20px 20px 60px #bebebe,-20px -20px 60px #ffffff",
//       textAlign: "center",
//       maxWidth: "600px",
//       margin: "50px auto",
//       padding: "10px",
//     },

//     "& .heading-text": {
//       color: "#090348",
//     },
//     "& button": {
//       background: "#090348",
//       color: "#eee",
//       padding: "5px",
//       border: "1px solid #eee",
//       borderRadius: "3px",
//     },
//     "& button:hover": {
//       color: "#090348",
//       border: "1px solid #090348",
//       background: "#eee",
//     },
//     "& .img-div": {
//       marginBottom: "20px",
//     },
//     "& .img-div img": {
//       height: "300px",
//       width: "300px",
//     },
//     "& input": {
//       border: "1px solid #090348",
//       borderRadius: "3px",
//       color: "#090348",
//       padding: "5px",
//       margin: "auto 5px",
//     },
//     "& .sub-btn": {
//       background: "#36C506",
//     },
//     "& .can-btn": {
//       background: "#DA0816",
//     },
//     "& .task": {
//       border: "1px solid #090348",
//       borderRadius: "3px",
//       width: "400px",
//       padding: "5px",
//       margin: "10px auto",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//     },
//     "& .task .taskitem": {
//       marginLeft: "10px",
//     },
//     "& .task .icon": {
//       marginRight: "10px",
//       background: "#eee",
//       padding: "10px",
//       borderRadius: "5px",
//       boxShadow: "0px 0px 10px #bebebe",
//     },
//     "& .task .del-icon": {
//       background: "#DA0816",
//       padding: "3px",
//       borderRadius: "5px",
//       cursor: "pointer",
//       marginLeft: "10px",
//     },
//     "& .task .del-icon:hover": {
//       background: "#A60303",
//     },
//     "& .task .edit-icon": {
//       padding: "3px",
//       borderRadius: "5px",
//       cursor: "pointer",
//     },
//     "& .task .edit-icon:hover": {
//       background: "#C7C7C9",
//     },
//     "& .edit-input": {
//       border: "1px solid #090348",
//       borderRadius: "3px",
//       width: "370px",
//       padding: "10px",
//       margin: "10px auto",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });

//   return (
//     <div className={`container ${Styles}`}>
//       <h1 className="heading-text">TO-DO LIST</h1>
//       {next ? (
//         <div className="div-start">
//           <div className="img-div">
//             <img src="/images/undraw_Mail_sent_re_0ofv.png" alt="task-image" />
//           </div>
//           <button
//             className="start-btn"
//             onClick={() => {
//               setNext(false);
//             }}
//           >
//             Add Tasks
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div>
//             {items.map((task, id) => (
//               <div
//                 key={id}
//                 onClick={() => {
//                   setSelItemId(id);
//                 }}
//               >

//                 {edit ? (
//                   <div className="task">
//                     <p className="taskitem">
//                       <span>🎫</span>
//                       {task}
//                     </p>

//                     <div className="icon">
//                       <span
//                         className="edit-icon"
//                         onClick={() => {
//                           setEdit(false);
//                           setItem(task);
//                           setHide(false);
//                         }}
//                       >
//                         🖊️
//                       </span>

//                       <span
//                         className="del-icon"
//                         onClick={() => {
//                           const updatedItem = items.filter((i) => i != task);
//                           setItems(updatedItem);
//                           setHide(false);
//                         }}
//                       >
//                         🗑️
//                       </span>
//                     </div>
//                   </div>
//                 ) : selItemId === id ? (
//                   <div className="edit-input">
//                     <input
//                       value={item}
//                       type="text"
//                       placeholder="........."
//                       onInput={(e) => {
//                         setItem(e.target.value);
//                       }}
//                     />
//                     <button
//                       className="can-btn"
//                       onClick={() => {
//                         setEdit(true);
//                         setHide(false);
//                       }}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="sub-btn"
//                       onClick={() => {
//                         setEdit(true);
//                         setHide(false);
//                         setItems((prev) => {
//                           const temp = [...prev];
//                           temp[id] = item;
//                           return temp;
//                         });
//                         setItem("");
//                       }}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 ) : null}
//               </div>
//             ))}
//           </div>
//           {hide ? (
//             <div className="div-inputs">
//               <input
//                 value={item}
//                 type="text"
//                 placeholder="what are you up to...😒"
//                 onInput={(e) => {
//                   setItem(e.target.value);
//                 }}
//               />

//               <button
//                 className="can-btn"
//                 onClick={() => {
//                   setHide(false);
//                   setItem("");
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="sub-btn"
//                 onClick={() => {
//                   addItem(item);
//                   setItem("");
//                   setHide(false);
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           ) : (
//             <button
//               className="start-btn"
//               onClick={() => {
//                 setHide(true);
//                 setEdit(true);
//                 setItem("");
//               }}
//             >
//               New Tasks
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
