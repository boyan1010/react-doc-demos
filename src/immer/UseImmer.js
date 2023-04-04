import { useState } from "react";
import { useImmer } from "use-immer";

const baseState = [
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
];
const TodoListWithUseImmer = () => {
  const [todos, setTodos] = useImmer(baseState);
  const [text, setText] = useState("");

  const handleToggle = (todo) => {
    setTodos((draft) => {
      draft.forEach((item) => {
        if (item.id === todo.id) {
          item.done = !item.done;
        }
      });
    });
  };

  const handleAdd = () => {
    setTodos((draft) => {
      draft.push({
        id: "Vue",
        title: text,
        done: false
      });
    });
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

export default TodoListWithUseImmer;
