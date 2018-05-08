import { connect } from 'react-redux';
import Interests from '../components/Interests';
import { fetchMapInfo } from '../actions';

function mapStateToProps(state) {
  return {
    data: state.map.data,
    isFetching: state.map.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMapInfo: (query) => {
      dispatch(fetchMapInfo(query));
    },
  };
}

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Interests);

export default SkillsContainer;
