import { fireapp } from '../helpers/firebase';

export const GET_SKILLS = 'GET_SKILLS';
export const RECEIVE_SKILLS = 'RECEIVE_SKILLS';

export function getSkills(name) {
  return {
    type: GET_SKILLS,
    name,
  };
}

export function receiveSkills(data) {
  return {
    type: RECEIVE_SKILLS,
    data,
  };
}

export function fetchSkills(query = 'skills') {
  return (dispatch) => {
    dispatch(getSkills(query));

    const experienceRef = fireapp.database().ref(query);

    experienceRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const data = [];
      /* eslint-disable */
      for (const item in items) {
        data.push({
          id: item,
          name: items[item].name,
          bullet: items[item].bullet,
          color: items[item].color,
          points: items [item].points,
        });
      }
      /* eslint-enable */

      dispatch(receiveSkills(data.reverse()));
    });
  };
}
