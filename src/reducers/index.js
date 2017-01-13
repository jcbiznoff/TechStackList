import { combineReducers } from 'redux'; //combine reducers are for multiples
import LibraryReducer from './LibraryReducer'; //combine reducers are for multiples
import SelectionReducer from './SelectionReducer'; //combine reducers are for multiples

//for every reducer we create we need to wire it to below.
//library reducer: producing a list of library to show to users
//selection reducer: current library to show
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});

//console.log(store.getState());
// => {libraries : [{"id" : 0,...},...]}
