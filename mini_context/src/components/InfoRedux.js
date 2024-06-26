import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../features/info/infoSlice";

const InfoRedux = () => {
  const name = useSelector((state) => state.information.name);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const displayInfo = (e) => {
    e.preventDefault();
    dispatch(addInfo(input));
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={displayInfo}>submit</button> <br />
      <h1>Hello ! {name}</h1>
    </div>
  );
};

export default InfoRedux;
