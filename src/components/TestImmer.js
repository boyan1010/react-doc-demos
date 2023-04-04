import { useState } from "react";
import TestImmerChild from "./TextImmerChild";
import produce from "immer";
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  function onChangeForTest() {
    console.log("用于测试子组件的渲染");
  }
  return (
    <div>
      <button
        onClick={() => {
          setPosition(
            produce((draft) => {
              draft.x = position.x;
              draft.y = position.y;
            })
          );
        }}
      >
        +0
      </button>
      <button
        onClick={() => {
          setPosition({
            x: position.x + 1,
            y: position.y + 1
          });
        }}
      >
        +1
      </button>
      <TestImmerChild x={position.x} y={position.y} />
    </div>
  );
}
