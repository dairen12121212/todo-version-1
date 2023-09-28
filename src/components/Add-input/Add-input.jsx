import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./Add-input.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, TOGGLE_IS_OPEN_MODAL_FULL } from "../../actions/actions";

export const AddInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const arrTasks = useSelector((state) => state.tasks.arrTasks);

  const addTask = () => {
    if (arrTasks.length >= 12) return dispatch(TOGGLE_IS_OPEN_MODAL_FULL(true));
    if (value.length == 0) return;

    const taskItem = {
      text: value,
      completed: false,
      id: uuidv4(),
    };
    dispatch(ADD_TASK(taskItem));
    setValue("");
  };

  return (
    <div className="add">
      <input
        className="add__input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Добавьте новую задачу"
        onKeyDown={(e) => (e.key == "Enter" ? addTask() : null)}
      />
      <button onClick={() => addTask()} className="add__button">
        Add
      </button>
    </div>
  );
};
