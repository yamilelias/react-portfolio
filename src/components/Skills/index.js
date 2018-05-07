import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Shared/Section';
import DevChart from './DevChart';
import DevList from './DevList';
import Loader from '../Shared/Icons/Loader';

const Skills = (props) => {
  return (
    <Section id="skills">
      {(props.isFetching) ? (
        <div className="loader"><Loader/></div>
      ) : (
        <div className="charts">
          <Section.Header text="Skills"/>
          <p className="mb-5">This are some of the programming languages and frameworks I know
            (Academically of Work-related I used).</p>
          <div className="small-section">
            <div className="subheading mb-3">Programming Languages</div>
            <DevChart
              isFetching={props.isFetching}
              data={props.data}
              fetchSkills={props.fetchSkills}
            />
          </div>
          <div className="small-section">
            <div className="subheading">Frameworks</div>
            <ul className="list-inline list-icons">
              <DevList icon="react"/>
              <DevList icon="angular"/>
              <DevList icon="wordpress"/>
              <DevList icon="grunt"/>
              <DevList icon="gulp"/>
              <DevList icon="npm"/>
            </ul>
          </div>
        </div>
      )}
    </Section>
  );
};

Skills.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  fetchSkills: PropTypes.func.isRequired,
};

export default Skills;
