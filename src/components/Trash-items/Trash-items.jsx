import "./Trash-items.css";

import { TrashItem } from "../Trash-Item/Trash-Item";
import { useSelector } from "react-redux";

export const TrashItems = () => {
  const arrTrash = useSelector((item) => item.trash.arrTrash);
  return (
    <div className="trash__items">
      {arrTrash.length == 0 ? (
        <div className="trash__items-title">Корзина пуста</div>
      ) : (
        arrTrash.map((item) => {
          return <TrashItem data={item} key={item.id} id={item.id} />;
        })
      )}
    </div>
  );
};
