const initialTrashState = {
  arrTrash: [
    // { text: 'hello', completed: false, id: 'kadjflkjasdfkl' },
  ],
  isOpenModalClear: false,
};

const trashReducer = (state = initialTrashState, action) => {
  switch (action.type) {
    case "ADD_TASK_TO_TRASH":
      const oldArrAdd = [...state.arrTrash];
      action.payload.completed
        ? oldArrAdd.push(action.payload)
        : oldArrAdd.unshift(action.payload);
      return { ...state, arrTrash: [...oldArrAdd] };
    case "DELETE_TASK_TRASH":
      const oldArr = [...state.arrTrash];
      const newArr = oldArr.filter((item) => item.id != action.payload);
      return { ...state, arrTrash: [...newArr] };

    case "TOGGLE_IS_OPEN_MODAL_CLEAR":
      return { ...state, isOpenModalClear: !action.payload };
    case "CLEAR_TRASH_ALL":
      const clearArr = [];
      return {
        ...state,
        arrTrash: [...clearArr],
        isOpenModalClear: false,
      };
    default:
      return { ...state };
  }
};

export default trashReducer;
