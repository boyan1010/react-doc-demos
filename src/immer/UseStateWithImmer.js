import produce from "immer";
import { useState } from "react";
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: "React",
      title: "Learn React",
      done: true
    },
    {
      id: "Immer",
      title: "Try Immer",
      done: false
    }
  ]);
  const [text, setText] = useState("");
  const handleToggle = (todo) => {
    setTodos(
      produce((draft) => {
        const select = draft.find((item) => item.id === todo.id);
        select.done = !select.done;
      })
    );
  };
  const handleAdd = () => {
    setTodos(
      produce((draft) => {
        draft.push({
          id: "Vue",
          title: text,
          done: false
        });
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          <button onClick={handleAdd}>Add</button>
        </div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" onChange={() => handleToggle(todo)} />
              {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
