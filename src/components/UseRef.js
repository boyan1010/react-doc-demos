import { useRef, useState } from "react";

export default function UseRef() {
  let ref = useRef(0);
  const [clickCount, setClick] = useState(1);
  console.log(`这是第${ref.current++}次渲染组件`);
  const handleClick = () => {
    setClick((c) => c + 1);
  };
  return <button onClick={handleClick}>Click me! {clickCount}</button>;
}
