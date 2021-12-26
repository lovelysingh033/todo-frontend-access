import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASKS_REQUEST,
  CREATE_TASKS_SUCCESS,
  CREATE_TASKS_FAILURE,
  DELETE_TASKS_REQUEST,
  DELETE_TASKS_SUCCESS,
  DELETE_TASKS_FAILURE,
  UPDATE_TASKS_REQUEST,
  UPDATE_TASKS_SUCCESS,
  UPDATE_TASKS_FAILURE,
} from "./taskActionTypes";

const initialState = {
  loading: false,
  tasks: [],
  error: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload,
        error: "",
      };
    case FETCH_TASKS_FAILURE:
      return {
        loading: false,
        boards: [],
        error: action.payload,
      };
    case CREATE_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        task: state.tasks.push(action.payload),
      };
    case CREATE_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((obj) => obj.id !== action.payload),
      };
    case DELETE_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case UPDATE_TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
