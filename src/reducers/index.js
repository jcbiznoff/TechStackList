import { combineReducers } from 'redux'; //combine reducers are for multiples
import LibraryReducer from './LibraryReducer'; //combine reducers are for multiples

//library reducer: producing a list of library to show to users
//selection reducer: current library to show
export default combineReducers({
    libraries: LibraryReducer
});

//console.log(store.getState());
// => {libraries : [{"id" : 0,...},...]}
