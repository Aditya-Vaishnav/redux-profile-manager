import handleForm from './form-reducer.jsx';
import list from './profiles-list-reducers.jsx';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
  form: handleForm,
  list
});

export default allReducers;
