import React from 'react';

import Social from '../Shared/Icons/Social';
import Section from '../Shared/Section';

const About = () => {
  return (
    <Section id="about">
      <h1 className="mb-0">Clarence<br/>
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
        <Social icon="twitter"/>
        <Social icon="linkedin"/>
        <Social icon="github"/>
        <Social icon="stack-overflow"/>
      </ul>
    </Section>
  );
};

export default About;
