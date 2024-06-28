import React, { useEffect, useRef } from 'react';

function FocusInputFunction() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus to the input element when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
      console.log("Is in focus")
    }
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div>
      <h2>Focus Input Field (Functional Component)</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInputFunction;
