import "./Modal-Clear.css";

import {
  TOGGLE_IS_OPEN_MODAL_CLEAR,
  CLEAR_TRASH_ALL,
} from "../../actions/actions";
import { useDispatch } from "react-redux";

export const ModalClear = ({ isOpenModalClear }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(TOGGLE_IS_OPEN_MODAL_CLEAR(isOpenModalClear));
  };
  const clearTrashAll = () => [dispatch(CLEAR_TRASH_ALL())];
  return (
    <div className="modal-clear">
      <div className="modal-clear__overlay">
        <div className="modal-clear__content">
          <div className="modal-clear__text">
            Корзина переполнена, чтобы удалить элемент вам нужно очистить
            корзину
          </div>
          <div className="modal-clear__buttons">
            <button
              onClick={() => closeModal()}
              className="modal-clear__button"
            >
              Назад
            </button>
            <button
              onClick={() => clearTrashAll()}
              className="modal-clear__button modal-clear__button_clear"
            >
              Очистить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
