import React from 'react';

import Section from '../Shared/Section';
import ResumeContent from './ResumeContent';
import { fireapp } from '../../helpers/firebase';

class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      experience: [],
    };

    this.renderExperience = this.renderExperience.bind(this);
  }

  componentDidMount() {
    const experienceRef = fireapp.database().ref('experience');

    experienceRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const newState = [];
      /* eslint-disable */
      for (const item in items) {
        newState.push({
          id: item,
          title: items[ item ].title,
          company: items[ item ].company,
          date: items[ item ].date,
        });
      }
      /* eslint-enable */

      this.setState({
        experience: newState,
      });
    });
  }

  renderExperience() {
    return this.state.experience.reverse().map((item) => {
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
        <div>
          <Section.Header text="Experience"/>
          {this.renderExperience()}
        </div>
      </Section>
    );
  }
}

export default Experience;
