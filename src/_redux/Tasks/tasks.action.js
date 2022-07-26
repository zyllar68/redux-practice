import axios from 'axios';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_ADD,
} from './tasks.constant';

// eslint-disable-next-line import/prefer-default-export
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

export const fetchTasksAdd = (tasks) => {
  return {
    type: FETCH_TASKS_ADD,
    payload: tasks,
  };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch(fetchTasksRequest);
    axios.get('http://localhost:3001/tasks')
      .then((response) => {
        const tasks = response.data;
        dispatch(fetchTasksSuccess(tasks));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTasksFailure(errorMsg));
      });
  };
};

export const addTasks = (payload) => {
  return (dispatch) => {
    dispatch(fetchTasksRequest);
    axios.post('http://localhost:3001/tasks', payload)
      .then((response) => {
        dispatch(fetchTasksAdd(response.data));
        dispatch(fetchTasks());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTasksFailure(errorMsg));
      });
  };
};
