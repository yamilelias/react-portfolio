import { GET_SKILLS, RECEIVE_SKILLS } from '../actions';

export default function skills(state = { isFetching: false, data: [], name: '' }, action) {
  switch (action.type) {
    case GET_SKILLS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_SKILLS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    default:
      return state;
  }
}
