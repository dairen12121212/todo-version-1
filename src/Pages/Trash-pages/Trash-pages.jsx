import { TrashItems } from "../../components/Trash-items/Trash-items";
import { NavMenu } from "../../components/Nav-Menu/Nav-Menu";
import "./Trash-pages.css";

import { useDispatch, useSelector } from "react-redux";
import { CLEAR_TRASH_ALL } from "../../actions/actions";

export const TrashPages = () => {
  const dispatch = useDispatch();
  const arrTrash = useSelector((state) => state.trash.arrTrash);

  const onClearTrash = () => {
    dispatch(CLEAR_TRASH_ALL());
  };
  return (
    <div className="trash-page">
      <div className="trash-page__title">Корзина</div>
      <TrashItems />
      <button
        style={{ display: arrTrash.length > 0 ? "block" : "none" }}
        className="trash-page__button"
        onClick={() => onClearTrash()}
      >
        Очистить Корзину
      </button>
      <NavMenu />
    </div>
  );
};
//? кнопка "вернуть в заметки" -- completed
