import { combineReducers } from 'redux'

function test(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

export default test

/*
TODO: Figure out error with combineReducers
export default combineReducers({
  test,
});
*/
