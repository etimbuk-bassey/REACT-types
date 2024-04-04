import "./App.css";
// import Users from "./components/Users";
import Todo from "./components/Todo";

function App() {
  const options = ["brown", "black", "blue"];

  const [color1, , color3] = options;

  console.log(`${color1} ${color3}`);

  const color = {
    color4: "green",
    color5: "pink",
    color7: "white",
  };

  const { color4: C, color7 } = color;

  console.log(`${C} ${color7}`);

  // const

  return (
    <>
      {/* <Users /> */}

      <Todo />
    </>
  );
}

export default App;
