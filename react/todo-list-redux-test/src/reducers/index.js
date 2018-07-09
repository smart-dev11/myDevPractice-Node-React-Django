import { combineReducers } from 'redux';
import todos form './todos';
import visibilityFilter from './visibilityFilter';

 const reducers = combineReducers({
   todos,
   visibilityFilter
 });

 export default reducers;
