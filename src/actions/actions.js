export const ADD_TASK = (payload) => {
  return {
    type: "ADD_TASK",
    payload,
  };
};
export const DELETE_TASK = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};

export const CHANGE_TASKS = (payload) => {
  return {
    type: "CHANGE_TASKS",
    payload,
  };
};

export const SWITCH_COMPLETED = (payload) => {
  return {
    type: "SWITCH_COMPLETED",
    payload,
  };
};

export const TOGGLE_IS_OPEN_MODAL_FULL = (payload) => {
  return {
    type: "TOGGLE_IS_OPEN_MODAL_FULL",
    payload,
  };
};

/////////////////////
// TRASH

export const ADD_TASK_TO_TRASH = (payload) => {
  return {
    type: "ADD_TASK_TO_TRASH",
    payload,
  };
};

export const DELETE_TASK_TRASH = (payload) => {
  return {
    type: "DELETE_TASK_TRASH",
    payload,
  };
};

export const TOGGLE_IS_OPEN_MODAL_CLEAR = (payload) => {
  return {
    type: "TOGGLE_IS_OPEN_MODAL_CLEAR",
    payload,
  };
};
export const CLEAR_TRASH_ALL = (payload) => {
  return {
    type: "CLEAR_TRASH_ALL",
    payload,
  };
};

////////////////////////////////////
// User

export const ADD_USER_TIME = (payload) => {
  return {
    type: "ADD_USER_TIME",
    payload,
  };
};

export const UPDATE_ACTIVE_DAY = (payload) => {
  return {
    type: "UPDATE_ACTIVE_DAY",
    payload,
  };
};

export const UPDATE_FALSE = (payload) => {
  return {
    type: "UPDATE_FALSE",
    payload,
  };
};

export const UPDATE_TRUE = (payload) => {
  return {
    type: "UPDATE_TRUE",
    payload,
  };
};

///////////////////////////////////////////
// Settings

export const DARK_THEME_TOGGLE = (payload) => {
  return {
    type: "DARK_THEME_TOGGLE",
    payload,
  };
};

export const ADD_ENTRY_TIME = (payload) => {
  return {
    type: "ADD_ENTRY_TIME",
    payload,
  };
};
