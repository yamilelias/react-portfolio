import { connect } from 'react-redux';
import Skills from '../components/Skills';
import { fetchSkills } from '../actions';

function mapStateToProps(state) {
  return {
    data: state.skills.data,
    isFetching: state.skills.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSkills: (skills) => {
      dispatch(fetchSkills(skills));
    },
  };
}

const SkillsContainer = connect(mapStateToProps, mapDispatchToProps)(Skills);

export default SkillsContainer;
