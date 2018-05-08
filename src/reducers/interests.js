import { GET_MAP_INFO, RECEIVE_MAP_INFO } from '../actions';

export default function map(state = { isFetching: false, data: [], name: '' }, action) {
  switch (action.type) {
    case GET_MAP_INFO:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_MAP_INFO:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    default:
      return state;
  }
}
