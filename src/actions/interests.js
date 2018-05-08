import { fireapp } from '../helpers/firebase';

export const GET_MAP_INFO = 'GET_MAP_INFO';
export const RECEIVE_MAP_INFO = 'RECEIVE_MAP_INFO';

export function getMapInfo(name) {
  return {
    type: GET_MAP_INFO,
    name,
  };
}

export function recieveMapInfo(data) {
  return {
    type: RECEIVE_MAP_INFO,
    data,
  };
}

export function fetchMapInfo(query = 'map') {
  return (dispatch) => {
    dispatch(getMapInfo(query));

    const mapRef = fireapp.database().ref(query);
    const targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

    mapRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const data = [];
      /* eslint-disable */
      for (const item in items) {
        data.push({
          id: item,
          title: items[item].title,
          latitude: items[item].latitude,
          longitude: items[item].longitude,
          svgPath: targetSVG,
          zoomLevel: 5,
          scale: 0.5,
        });
      }
      /* eslint-enable */

      dispatch(recieveMapInfo(data));
    });
  };
}
