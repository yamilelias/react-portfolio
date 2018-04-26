import React from 'react';

import SocialIcon from './SocialIcon';
import Section from '../Shared/Section';

const About = () => {
  return (
    <Section id="about">
      <div className="my-auto">
        <h1 className="mb-0">Clarence
          <span className="text-primary">Taylor</span>
        </h1>
        <div className="subheading mb-5">3542 Berry Street · Cheyenne
          Wells, CO 80810 · (317) 585-8468 ·
          <a href="mailto:name@email.com">name@email.com</a>
        </div>
        <p className="mb-5">I am experienced in leveraging agile
          frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value
          proposition.</p>
        <ul className="list-inline list-social-icons mb-0">
          <SocialIcon icon="twitter"/>
          <SocialIcon icon="linkedin"/>
          <SocialIcon icon="github"/>
          <SocialIcon icon="stack-overflow"/>
        </ul>
      </div>
    </Section>
  );
};

export default About;
