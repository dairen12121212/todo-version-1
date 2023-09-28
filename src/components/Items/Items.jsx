import { Item } from "../Item/Item";

import "./Items.css";
import { useSelector } from "react-redux";

export const Items = () => {
  const arrTasks = useSelector((item) => item.tasks.arrTasks);
  return (
    <div className="items">
      {arrTasks.length == 0 ? (
        <div className="items__title">Задачи отсутствуют</div>
      ) : (
        arrTasks.map((item) => {
          return <Item data={item} key={item.id} id={item.id} />;
        })
      )}
    </div>
  );
};
