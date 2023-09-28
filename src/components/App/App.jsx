import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useTheme } from "../../Hooks/use-Theme";

import "./App.css";

import { TodoPages } from "../../Pages/Todo-pages/Todo-pages";
import { TrashPages } from "../../Pages/Trash-pages/Trash-pages";
import { SettingsPages } from "../../Pages/Settings-pages/Settings-pages";
import { NotFoundPage } from "../../Pages/NotFoundPage/NotFoundPage";
import { ModalFull } from "../../components/Modal-Full/Modal-Full.jsx";

import { ADD_ENTRY_TIME } from "../../actions/actions";

function App() {
  useTheme(useSelector((state) => state.settings.darkTheme));

  const { isOpenModalFull } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ADD_ENTRY_TIME(new Date()));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<TodoPages />} />
        <Route path="/trash" element={<TrashPages />} />
        <Route path="/settings" element={<SettingsPages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {isOpenModalFull ? <ModalFull /> : null}
    </>
  );
}

export default App;
