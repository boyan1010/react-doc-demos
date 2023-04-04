import { useReducer, useState } from "react";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false }
];
function TaskAdd({ handleAdd }) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  function handleClickAdd() {
    setText("");
    handleAdd(text);
  }
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}
function TaskList({ tasklist = [], onChangeCheck, onClickDelete }) {
  return (
    <div>
      {tasklist.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() =>
                onChangeCheck({
                  ...item,
                  done: !item.done
                })
              }
            />
            {item.text}
            <button onClick={() => onClickDelete(item.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default function UseReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text
    });
  }
  function handleChangeCheck(task) {
    dispatch({
      type: "edited",
      task: task
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "deleted",
      id: id
    });
  }
  return (
    <>
      <h3>UseReducer demo</h3>
      <TaskAdd handleAdd={handleAddTask}></TaskAdd>
      <TaskList
        tasklist={tasks}
        onChangeCheck={handleChangeCheck}
        onClickDelete={handleDelete}
      ></TaskList>
    </>
  );
}

function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case "edited": {
      console.log("---------", action);
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("unkown action : ", action);
    }
  }
}
