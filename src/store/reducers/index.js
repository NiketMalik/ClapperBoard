import {combineReducers} from 'redux';

// reducers
import Movie from './movie'
import Watched from './watched' 

const allReducers = combineReducers({
		movie: Movie,
		watched: Watched
	}
);

export default allReducers;