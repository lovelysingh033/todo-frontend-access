import axios from "axios";
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

export const fetchBoardsRequest = () => {
  return {
    type: FETCH_BOARDS_REQUEST,
  };
};

export const fetchBoardsSuccess = (boards) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload: boards,
  };
};

export const fetchBoardsFailure = (error) => {
  return {
    type: FETCH_BOARDS_FAILURE,
    payload: error,
  };
};

export const fetchBoards = () => {
  return (dispatch) => {
    dispatch(fetchBoardsRequest);
    axios
      .get("http://localhost:1337/api/boards")
      .then((response) => {
        const boards = response.data.board;
        dispatch(fetchBoardsSuccess(boards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBoardsFailure(errorMsg));
      });
  };
};

export const createBoardsRequest = () => {
  return {
    type: CREATE_BOARDS_REQUEST,
  };
};

export const createBoardsSuccess = (boards) => {
  return {
    type: CREATE_BOARDS_SUCCESS,
    payload: boards,
  };
};

export const createBoardsFailure = (error) => {
  return {
    type: CREATE_BOARDS_FAILURE,
    payload: error,
  };
};

export const createBoards = (boards) => {
  return (dispatch) => {
    dispatch(createBoardsRequest);
    console.log(boards);
    axios
      .post("http://localhost:1337/api/boards", boards)
      .then((response) => {
        const boards = response.data.board;
        dispatch(createBoardsSuccess(boards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createBoardsFailure(errorMsg));
      });
  };
};

export const deleteBoardsRequest = () => {
  return {
    type: DELETE_BOARDS_REQUEST,
  };
};

export const deleteBoardsSuccess = (boards) => {
  return {
    type: DELETE_BOARDS_SUCCESS,
    payload: boards[0].id,
  };
};

export const deleteBoardsFailure = (error) => {
  return {
    type: DELETE_BOARDS_FAILURE,
    payload: error,
  };
};

export const deleteBoards = (boardId) => {
  return (dispatch) => {
    dispatch(deleteBoardsRequest);
    axios
      .delete(`http://localhost:1337/api/boards/${boardId}`)
      .then((response) => {
        const boards = response.data.board;
        dispatch(deleteBoardsSuccess(boards));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteBoardsFailure(errorMsg));
      });
  };
};
