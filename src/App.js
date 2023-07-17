import React, { useEffect, useState } from "react";

function App() {
  const options = ["Yes", "Probably Not", "No"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(43, 175, 199)";
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        <h2>React Dropdown Example</h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          style={{
            height: "3.5rem",
            width: "15rem",
            border: "2px solid red",
            borderRadius: "5px",
            fontSize: "25px",
          }}
        >
          <option value="">Select </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
