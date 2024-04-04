import "./App.css";
import Todo from "./components/Todo";

function App() {

  const options = ["brown", "black", "blue"]

  const [color1, color2, color3] = options

  console.log(color1);
  console.log(color2);
  console.log(color3);
  
  
  


  return (
    <>
      {/* <Users /> */}

      <Todo />
    </>
  );
}

export default App;
