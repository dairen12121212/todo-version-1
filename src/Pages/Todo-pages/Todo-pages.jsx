import "./Todo-pages.css";

import { useSelector } from "react-redux";

import { AddInput } from "../../components/Add-input/Add-input";
import { Items } from "../../components/Items/Items";
import { NavMenu } from "../../components/Nav-Menu/Nav-Menu";
import { ModalClear } from "../../components/Modal-Clear/Modal-Clear";

export const TodoPages = () => {
  const isOpenModalClear = useSelector((state) => state.trash.isOpenModalClear);

  return (
    <div className="app">
      <div className="app__title">TO-DO List</div>
      <AddInput />
      <Items />
      <NavMenu />
      {isOpenModalClear ? (
        <ModalClear isOpenModalClear={isOpenModalClear} />
      ) : null}
    </div>
  );
};
