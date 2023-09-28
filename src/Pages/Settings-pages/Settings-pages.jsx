import "./Settings-pages.css";

import { useState } from "react";

import { NavMenu } from "../../components/Nav-Menu/Nav-Menu";
import { useDispatch, useSelector } from "react-redux";

import { DARK_THEME_TOGGLE } from "../../actions/actions";

export const SettingsPages = () => {
  const { darkTheme, entryTime } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [dark, setDark] = useState(darkTheme);

  const onDarkThemeToggle = () => {
    dispatch(DARK_THEME_TOGGLE());
  };

  const day = entryTime ? entryTime.getDate() + "" : "00";
  const month = entryTime ? entryTime.getMonth() + 1 + "" : "00";
  const year = entryTime ? entryTime.getYear() + 1900 : "0000";
  console.log("render");

  return (
    <div className="settings-page">
      <div className="settings-page__title">Настройки</div>
      <div className="settings-page__wrapper">
        <div className="settings-page__item">
          <label className="settings-page__toggle">
            <input
              type="checkbox"
              className="settings-page__input"
              checked={dark}
              onChange={() => setDark(!dark)}
              onClick={() => onDarkThemeToggle()}
            />
            <span className="settings-page__slider"></span>
          </label>
          <div className="settings-page__descr">Темная Тема</div>
        </div>
        <div className="settings-page__item">
          <div className="settings-page__descr">
            {`
            ${year}/
            ${month.length === 1 ? "0" + month : month}/
            ${day.length === 1 ? "0" + day : day}`}
          </div>
          <div className="settings-page__descr">Первое появление</div>
        </div>
      </div>
      <NavMenu />
    </div>
  );
};
