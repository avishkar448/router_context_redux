import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("");

  const submitColor = (e) => {
    const x = e.target.value.toLowerCase();
    setColor(x);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <input
        type="text"
        placeholder="Enter the color"
        className="border-2 border-black"
        value={color}
        onChange={submitColor}
      />
      
      <div
        style={{
          height: "500px",
          width: "500px",
          border: "2px solid black",
          backgroundColor: `${color}`,
        }}
      ></div>
    </div>
  );
};

export default ColorChanger;
