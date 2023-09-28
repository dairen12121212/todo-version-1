const initialSettingState = {
  darkTheme: true,
  entryTime: null,
};

const settingReducer = (state = initialSettingState, action) => {
  switch (action.type) {
    case "DARK_THEME_TOGGLE":
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case "ADD_ENTRY_TIME":
      return {
        ...state,
        entryTime: action.payload,
      };
    default:
      return state;
  }
};

export default settingReducer;
