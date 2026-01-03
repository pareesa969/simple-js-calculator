import { useState } from "react";
import './App'

function App(){
  const [input, setInput] = useState("");

  const handleClick = (value) => {

    if(value === "C"){
      setInput("");
      return;
    }

    if(value === "="){
      try{
        setInput(eval(input).toString());
      }catch{
        setInput("Error")
      }
      return;
    }

    // Append input
    setInput(input + value)
  }

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0","C","=","+"
  ];

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );

}

export default App;