import { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);
  const handleUseRef = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter you password";
    inputRef.current.value="88384"
  };
  return (
    <>
      <h1>UseRef is mainly use to focus html element</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="enter youname"
        name=""
        id=""
      />
      <button onClick={handleUseRef}>fucus on input field</button>
    </>
  );
}

export default UseRef;
