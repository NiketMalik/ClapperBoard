const localItems = JSON.parse(localStorage.getItem('watched'));
let initialState = localItems !== null ? localItems : [];

const watchedReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE_WATCHED_MOVIE':
			let _state = {};
			_state[action.payload.imdbID] = action.payload;
			
			state = {...state,..._state};
			localStorage.setItem('watched', JSON.stringify(state));
	  break;
	  default:
	  break;
	}

	return state;
}

export default watchedReducer