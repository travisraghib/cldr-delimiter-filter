import { FETCH_DELIMITER_DATA, SEARCH_DELIMITER } from '../actions';

export default function (state = {}, action){
  switch(action.type){
    case FETCH_DELIMITER_DATA:
      return {
        ...state,
        delimiterList : action.payload.data
      };

      break;
    case SEARCH_DELIMITER:
      return {
        ...state,
        term : action.payload
      };
      break;
  }

  return state;
}