import {ADD_TASK_ACTION} from '../action/TaskAction';

const initialState = {
  taskList: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK_ACTION: {
      const newState = {...state, taskList: state.taskList.concat(action.data)};
      console.log(JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};
