import { useEffect, useState } from "react";
import "./App.css";

function calculate(expression) {
  const operators = ["+", "-", "*", "/"];
  const operator = operators.find(op => expression.includes(op));

  if (!operator) return expression;

  const parts = expression.split(operator);
  if (parts.length !== 2) return "Error";

  const num1 = Number(parts[0]);
  const num2 = Number(parts[1]);

  if (isNaN(num1) || isNaN(num2)) return "Error";

  switch (operator) {
    case "+": return (num1 + num2).toString();
    case "-": return (num1 - num2).toString();
    case "*": return (num1 * num2).toString();
    case "/": return num2 === 0 ? "Error" : (num1 / num2).toString();
    default: return "Error";
  }
}

function App() {
  const [input, setInput] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

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
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        style={{ marginBottom: "10px" }}
      >
        {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h2>Simple JS Calculator</h2>

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
