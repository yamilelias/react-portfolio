import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Shared/Section';
import Map from './Map';
import Loader from '../Shared/Icons/Loader';

const Interests = (props) => {
  return (
    <Section id="interests">
      {(props.isFetching) ? (
        <div className="loader"><Loader/></div>
      ) : (
        <div>
          <Section.Header text="Interests"/>
          <div className="mb-5">
            <p>Apart from being a web developer, I enjoy to travel! I've go to
              many places in my country (Mexico) but to other places too! I love
              to know different places, cultures, taste new food and hear new
              music. Here you can see the places I've been and I proudly say I
              know, if you know some too you know my nostalgia remembering those
              places.</p>
            <Map
              data={props.data}
              fetchMapInfo={props.fetchMapInfo}
            />
          </div>
          <div className="container mb-5">
            <div className="row justify-content-center">
              <div className="col-6 center-vertical">
                <p className="set-right">I also love music in all it's ways! I'm
                  a musician and the
                  instrument I like the most is the bass guitar (but I know how
                  to play other instruments too). Singing is not my very best,
                  but
                  I like to try every karaoke I go.</p>
              </div>
              <div className="col-4">
                <img src="../src/static/img/me/music.jpg"
                     className="img-circle img-profile rounded-circle mx-auto mb-2"
                     width="200px" alt=""/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-4">
                <img src="../src/static/img/me/dance.jpg"
                     className="set-right img-circle img-profile rounded-circle mx-auto mb-2"
                     width="200px" alt=""/>
              </div>
              <div className="col-6 center-vertical">
                <p>Also I <strong>love</strong> to dance! Latin rhythms are my
                  speciality! From salsa to bachata and cumbia. I love to dance
                  when the music plays but I had presentation in theaters too,
                  so
                  don't hesitate to invite me to dance!</p>
              </div>
            </div>
          </div>
          <p className="mb-0">When forced indoors, I like to watch TV Series and
            movies. Playing video games is one of my hobbies too, but not that
            often. Also I code as a hobby sometimes so I also spend a large
            amount of my free time exploring the latest technology advancements
            in the development world.</p>
        </div>
      )}
    </Section>
  );
};

Interests.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  fetchMapInfo: PropTypes.func.isRequired,
};

export default Interests;
