import { useState, useRef } from "react";
import "./Item.css";

import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_TASK,
  SWITCH_COMPLETED,
  ADD_TASK_TO_TRASH,
  TOGGLE_IS_OPEN_MODAL_CLEAR,
  TOGGLE_IS_OPEN_MODAL_FULL,
  CHANGE_TASKS,
} from "../../actions/actions";

export const Item = ({ data }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  // текст
  const [value, setValue] = useState(data.text);
  // галочка
  const [isCheck, setIsCheck] = useState(false);
  // выключить инпут или нет
  const [isDisabled, setIsDisabled] = useState(true);

  const [oldValue, setOldValue] = useState(data.text);

  const arrTasksLength = useSelector((item) => item.tasks.arrTasks.length);
  const { arrTrash, isOpenModalClear } = useSelector((state) => state.trash);

  const onDeleteTask = (id) => {
    if (arrTrash.length >= 12) {
      return dispatch(TOGGLE_IS_OPEN_MODAL_CLEAR(isOpenModalClear));
    }
    if (arrTasksLength == 12) {
      dispatch(TOGGLE_IS_OPEN_MODAL_FULL(false));
    }

    dispatch(DELETE_TASK(id));
    dispatch(ADD_TASK_TO_TRASH(data));
  };

  const onCompleteTask = (id) => {
    dispatch(SWITCH_COMPLETED({ data, id }));
  };

  const openEditMenu = () => {
    setIsDisabled(!isDisabled);
    inputRef.current.removeAttribute("disabled");
    inputRef.current.focus();
  };

  const closeEditMenu = () => {
    setValue(oldValue);
    setIsDisabled(!isDisabled);
  };

  const changeTask = (e) => {
    setValue(e.target.value);
  };

  const checkEditMenu = (id) => {
    dispatch(CHANGE_TASKS({ value, id }));
    setOldValue(value);
    setIsDisabled(!isDisabled);
  };

  // сделать функционал, нажимаю на зеленую - всё збс, красную - тот же стэйт, и didabled = true
  return (
    <div className="item">
      <input
        onClick={() => onCompleteTask(data.id)}
        onChange={() => setIsCheck(data.completed)}
        value={isCheck}
        type="checkbox"
        checked={data.completed}
        className="item__checkbox"
      />
      <input
        onChange={(e) => changeTask(e)}
        value={value}
        disabled={isDisabled}
        ref={inputRef}
        onKeyDown={(e) =>
          e.key == "Enter"
            ? checkEditMenu(data.id)
            : e.key == "Escape"
            ? closeEditMenu()
            : null
        }
        className={
          data.completed ? "item__input item__input_completed" : "item__input"
        }
      />
      <div className="item__btns">
        <button className="item__btn-edit" onClick={() => openEditMenu()}>
          <svg
            className="item__trash-img"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => onDeleteTask(data.id)}
          className="item__btn-trash"
        >
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
      <div
        className={
          !isDisabled
            ? "item__side-menu item__side-menu_active"
            : "item__side-menu"
        }
      >
        <button
          className="item__side-button item__side-check"
          onClick={() => checkEditMenu(data.id)}
        >
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12.6111L8.92308 17.5L20 6.5"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="item__side-button item__side-cross"
          onClick={() => closeEditMenu()}
        >
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
              fill="red"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
