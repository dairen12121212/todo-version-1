import "./Modal-Full.css";

import { useDispatch } from "react-redux";

import { TOGGLE_IS_OPEN_MODAL_FULL } from "../../actions/actions";

export const ModalFull = () => {
  const dispatch = useDispatch();

  const closeModalFull = () => {
    dispatch(TOGGLE_IS_OPEN_MODAL_FULL(false));
  };

  return (
    <div className="modal-full">
      <div onClick={() => closeModalFull()} className="modal-full__close">
        {/*  */}
        <svg
          className="modal-full__img"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Close_LG">
            <path
              id="Vector"
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        {/*  */}
      </div>
      <div className="modal-full__title">
        Вы не можете добавить больше 12 заметок!
      </div>
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.8984 3.61441C12.5328 2.86669 11.4672 2.86669 11.1016 3.61441L3.30562 19.5608C2.98083 20.2251 3.46451 21 4.204 21H19.796C20.5355 21 21.0192 20.2251 20.6944 19.5608L12.8984 3.61441ZM9.30485 2.73599C10.4015 0.492834 13.5985 0.492825 14.6952 2.73599L22.4912 18.6824C23.4655 20.6754 22.0145 23 19.796 23H4.204C1.98555 23 0.534479 20.6754 1.50885 18.6824L9.30485 2.73599Z"
          fill="red"
        />
        <path
          d="M11 8.49999C11 7.94771 11.4477 7.49999 12 7.49999C12.5523 7.49999 13 7.94771 13 8.49999V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V8.49999Z"
          fill="red"
        />
        <path
          d="M13.5 18C13.5 18.8284 12.8285 19.5 12 19.5C11.1716 19.5 10.5 18.8284 10.5 18C10.5 17.1716 11.1716 16.5 12 16.5C12.8285 16.5 13.5 17.1716 13.5 18Z"
          fill="red"
        />
      </svg>
    </div>
  );
};
