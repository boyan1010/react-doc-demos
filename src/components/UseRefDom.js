import { useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input!</button>
    </div>
  );
}
