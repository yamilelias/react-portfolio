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
        <ResumeContent
          key={item.id}
          title={item.title}
          company={item.company}
          date={item.date}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ullamcorper scelerisque metus. Pellentesque gravida ante in magna
            gravida iaculis. Aenean dapibus ipsum nulla, quis porttitor quam
            auctor vitae. In convallis, libero sed lobortis finibus, sapien justo
            fringilla odio, quis rutrum lacus ex interdum lacus.</p>
        </ResumeContent>
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
