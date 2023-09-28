const initialTasksState = {
  arrTasks: [
    // { text: 'hello', completed: false, id: 'kadjflkjasdfkl' },
  ],
  isOpenModalFull: false,
};

const tasksReducer = (state = initialTasksState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const oldArrAdd = [...state.arrTasks];
      action.payload.completed
        ? oldArrAdd.push(action.payload)
        : oldArrAdd.unshift(action.payload);
      return { ...state, arrTasks: [...oldArrAdd] };

    case "DELETE_TASK":
      const oldArr = [...state.arrTasks];
      const newArr = oldArr.filter((item) => item.id !== action.payload);
      return { ...state, arrTasks: [...newArr] };

    case "CHANGE_TASKS":
      return {
        ...state,
        arrTasks: state.arrTasks.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, text: action.payload.value };
          } else {
            return item;
          }
        }),
      };

    case "SWITCH_COMPLETED":
      const newArrSplice = [...state.arrTasks];
      const index = newArrSplice.findIndex(findIndex);
      function findIndex(item) {
        return item === action.payload.data;
      }
      //выше нашел index искомого элемента по клику на чекбокс
      const [findElement] = newArrSplice.splice(index, 1);
      findElement.completed = !findElement.completed;

      findElement.completed
        ? newArrSplice.push(findElement)
        : newArrSplice.unshift(findElement);
      return {
        ...state,
        // arrTasks: state.arrTasks.map((item, i) => {
        //   if (item.id === action.payload) {
        //     return { ...item, completed: !item.completed };
        //   } else {
        //     return item;
        //   }
        // }),
        arrTasks: [...newArrSplice],
      };

    case "TOGGLE_IS_OPEN_MODAL_FULL":
      return { ...state, isOpenModalFull: action.payload };

    default:
      return state;
  }
};

export default tasksReducer;
