import { useState } from "react";
import "./App.css";


function calculate(expression) {
  const operators = ["+", "-", "*", "/"];

  // Find the first operator used
  const operator = operators.find(op => expression.includes(op));

  // If no operator, return input as-is
  if (!operator) return expression;

  const parts = expression.split(operator);

  // Prevent invalid expressions like "5+"
  if (parts.length !== 2) return "Error";

  const num1 = Number(parts[0]);
  const num2 = Number(parts[1]);

  if (isNaN(num1) || isNaN(num2)) return "Error";

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      return num2 === 0 ? "Error" : (num1 / num2).toString();
    default:
      return "Error";
  }
}

function App() {
  const [input, setInput] = useState("");

  /**
   * Handles all button clicks
   */
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      return;
    }

    if (value === "=") {
      setInput(calculate(input));
      return;
    }

    setInput(input + value);
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div className="calculator">
      <h2>React Calculator</h2>

      <input
        type="text"
        value={input}
        readOnly
        placeholder="0"
      />

      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
