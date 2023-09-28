import { useState } from "react";
import "./Trash-Item.css";

import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_TASK_TRASH,
  ADD_TASK,
  TOGGLE_IS_OPEN_MODAL_FULL,
} from "../../actions/actions";

export const TrashItem = ({ data }) => {
  const [value, setValue] = useState(data.text);
  const [chech, setCheck] = useState(false);

  const dispatch = useDispatch();

  const arrTasksLength = useSelector((state) => state.tasks.arrTasks.length);
  // удаляет заметку из корзины навсегда
  const onDeleteTask = (id) => {
    dispatch(DELETE_TASK_TRASH(id));
  };
  // возвращает заметку на главную страницу
  const onBackTask = (id) => {
    if (arrTasksLength >= 12) return dispatch(TOGGLE_IS_OPEN_MODAL_FULL(true));
    dispatch(ADD_TASK(data));
    dispatch(DELETE_TASK_TRASH(id));
  };

  return (
    <div className="item">
      <input
        onChange={() => setCheck(data.completed)}
        value={chech}
        type="checkbox"
        checked={data.completed}
        className="item__checkbox"
      />
      <input
        value={value}
        disabled={true}
        className={
          data.completed ? "item__input item__input_completed" : "item__input"
        }
      />
      <div className="item__btns">
        <button onClick={() => onBackTask(data.id)} className="item__btn-back">
          {/* svg картинка для темной темы */}
          <svg
            className="item__trash-img"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
              fill="#33363F"
            />
          </svg>
        </button>
        <button
          onClick={() => onDeleteTask(data.id)}
          className="item__btn-trash"
        >
          {/* svg картинка для темной темы */}
          <svg
            className="item__trash-img"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
