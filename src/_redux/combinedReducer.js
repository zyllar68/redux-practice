// eslint-disable-next-line import/no-unresolved
import { combineReducers } from 'redux';
import taskReducer from './Tasks/tasks.reducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
