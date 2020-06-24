import { combineReducers } from 'redux';
import { reducer } from './reducer';

export default combineReducers({
  reducer,
});

reducer.js;
import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from '../store/actions';

export const initialState = {
  isFetching: false,
  characters: [],
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
      };
    default:
      return state;
  }
};
