import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Shared/Section';
import Loader from '../Shared/Icons/Loader';
import ResumeContent from './ResumeContent';

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.history,
    };

    this.renderExperience = this.renderExperience.bind(this);
  }

  componentDidMount() {
    this.props.fetchExperience('experience');
  }

  renderExperience() {
    return this.props.history.map((item) => {
      return (
        <div key={item.id} className="experience-element">
          <div className="company-logo">
            <img src="../src/static/img/logos/tec_monterrey.svg" alt=""/>
          </div>
          <ResumeContent
            title={item.title}
            company={item.company}
            date={item.date}>
            <p>{item.description}</p>
          </ResumeContent>
        </div>
      );
    });
  }

  render() {
    return (
      <Section id="experience">
        {(this.props.isFetching) ? (
          <div className="loader"><Loader/></div>
        ) : (
          <div>
            <Section.Header text="Experience"/>
            {this.renderExperience()}
          </div>
        )}
      </Section>
    );
  }
}
Experience.propTypes = {
  fetchExperience: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
};

Experience.defaultProps = {
  history: [],
  isFetching: false,
};

export default Experience;
