import { fireapp } from '../helpers/firebase';

export const GET_EXPERIENCE = 'GET_EXPERIENCE';
export const RECEIVE_EXPERIENCE = 'RECEIVE_EXPERIENCE';

export function getExperience(name) {
  return {
    type: GET_EXPERIENCE,
    name,
  };
}

export function receiveExperience(history) {
  return {
    type: RECEIVE_EXPERIENCE,
    history,
  };
}

export function fetchExperience(experience = 'experience') {
  return (dispatch) => {
    dispatch(getExperience(experience));

    const experienceRef = fireapp.database().ref(experience);

    experienceRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const data = [];
      /* eslint-disable */
      for (const item in items) {
        data.push({
          id: item,
          title: items[ item ].title,
          company: items[ item ].company,
          date: items[ item ].date,
        });
      }
      /* eslint-enable */

      dispatch(receiveExperience(data));
    });
  };
}
