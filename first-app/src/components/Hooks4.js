import React,{useCallback,useState,useRef,useEffect} from 'react'

function Button({ onClick }) {
    return <button onClick={onClick}>Click me</button>;
  }
  

function Hooks4() {
    const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>

    <div>
    <input ref={inputRef} type="text" />
    </div>
    </>
  )
}

export default Hooks4