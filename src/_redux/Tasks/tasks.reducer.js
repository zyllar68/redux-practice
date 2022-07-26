import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_ADD,
} from './tasks.constant';

const initialState = {
  loading: false,
  tasks: [],
  error: '',
};

// eslint-disable-next-line import/prefer-default-export, default-param-last
const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        loading: false,
        tasks: payload,
        error: '',
      };
    case FETCH_TASKS_FAILURE:
      return {
        loading: false,
        tasks: [],
        error: payload,
      };
    case FETCH_TASKS_ADD:
      return {
        ...state,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default taskReducer;
