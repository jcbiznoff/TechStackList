//if state is undefined, default it to null. this happens when initialized
export default (state = null, action) => { 
	switch (action.type) {
		case 'select_library':
			return action.payload;
		default:
			return state;
	}
}; //needs a initial state when it boots up. cannot return undefined from reducer.
