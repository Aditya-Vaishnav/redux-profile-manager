import handleForm from './form-reducer.js';
import list from './profiles-list-reducers.js';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
  form: handleForm,
  list
});

export default allReducers;
