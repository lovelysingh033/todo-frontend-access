import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  CREATE_BOARDS_REQUEST,
  CREATE_BOARDS_SUCCESS,
  CREATE_BOARDS_FAILURE,
  DELETE_BOARDS_REQUEST,
  DELETE_BOARDS_SUCCESS,
  DELETE_BOARDS_FAILURE,
} from "./boardActionTypes";

const initialState = {
  loading: false,
  boards: [],
  error: "",
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOARDS_SUCCESS:
      return {
        loading: false,
        boards: action.payload,
        error: "",
      };
    case FETCH_BOARDS_FAILURE:
      return {
        loading: false,
        boards: [],
        error: action.payload,
      };
    case CREATE_BOARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        board: state.boards.push(action.payload),
      };
    case CREATE_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    case DELETE_BOARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        boards: state.boards.filter((obj) => obj.id !== action.payload),
      };
    case DELETE_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
