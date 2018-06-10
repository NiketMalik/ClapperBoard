export default function(state = null, action) {
  if(action.type === 'UPDATE_MOVIE') {
    return action.payload;
  }

  return state;
}