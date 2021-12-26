import axios from "axios";
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

//FETCH THE TASKS

export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

export const fetchTasks = (boardId = 1) => {
  return (dispatch) => {
    dispatch(fetchTasksRequest(boardId));
    axios
      .get(`http://localhost:1337/api/tasks/${boardId}`)
      .then((response) => {
        const tasks = response.data.tasks;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTasksFailure(errorMsg));
      });
  };
};

//CREATE TASKS

export const createTasksRequest = () => {
  return {
    type: CREATE_TASKS_REQUEST,
  };
};

export const createTasksSuccess = (task) => {
  return {
    type: CREATE_TASKS_SUCCESS,
    payload: task,
  };
};

export const createTasksFailure = (error) => {
  return {
    type: CREATE_TASKS_FAILURE,
    payload: error,
  };
};

export const createTasks = (tasks) => {
  return (dispatch) => {
    dispatch(createTasksRequest);
    //console.log(boards);
    axios
      .post("http://localhost:1337/api/tasks", tasks)
      .then((response) => {
        const newtask = response.data.task;
        dispatch(createTasksSuccess(newtask));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(createTasksFailure(errorMsg));
      });
  };
};

//UPDATE TASKS

export const updateTasksRequest = () => {
  return {
    type: UPDATE_TASKS_REQUEST,
  };
};

export const updateTasksSuccess = (task) => {
  return {
    type: UPDATE_TASKS_SUCCESS,
    payload: task[0],
  };
};

export const updateTasksFailure = (error) => {
  return {
    type: UPDATE_TASKS_FAILURE,
    payload: error,
  };
};

export const updateTasks = (tasks, taskId) => {
  return (dispatch) => {
    dispatch(updateTasksRequest);
    //console.log(boards);
    axios
      .put(`http://localhost:1337/api/tasks/${taskId}`, tasks)
      .then((response) => {
        const task = response.data.task;
        dispatch(updateTasksSuccess(task));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(updateTasksFailure(errorMsg));
      });
  };
};

//DELETE TASKS

export const deleteTasksRequest = () => {
  return {
    type: DELETE_TASKS_REQUEST,
  };
};

export const deleteTasksSuccess = (task) => {
  return {
    type: DELETE_TASKS_SUCCESS,
    payload: task[0].id,
  };
};

export const deleteTasksFailure = (error) => {
  return {
    type: DELETE_TASKS_FAILURE,
    payload: error,
  };
};

export const deleteTasks = (taskId) => {
  return (dispatch) => {
    dispatch(deleteTasksRequest);
    //console.log(boards);
    axios
      .delete(`http://localhost:1337/api/tasks/${taskId}`)
      .then((response) => {
        const task = response.data.task;
        dispatch(deleteTasksSuccess(task));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(deleteTasksFailure(errorMsg));
      });
  };
};
