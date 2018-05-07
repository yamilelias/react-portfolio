import { connect } from 'react-redux';
import Experience from '../components/Experience';
import { fetchExperience } from '../actions';

function mapStateToProps(state) {
  return {
    history: state.experience.history,
    isFetching: state.experience.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchExperience: (experience) => {
      dispatch(fetchExperience(experience));
    },
  };
}

const ExperienceContainer = connect(mapStateToProps, mapDispatchToProps)(Experience);

export default ExperienceContainer;
