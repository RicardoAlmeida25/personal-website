import React, { FunctionComponent } from 'react';
import { AppWrapper, Header, Title, IconsRow } from './Home.styles';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import ProfileIcon from '../ProfileIcon';

const Home: FunctionComponent = () => {
  return (
    <AppWrapper>
      <Header>
        <Title>Ricardo Almeida</Title>
        <IconsRow>
          <ProfileIcon
            icon={faLinkedin}
            href="https://www.linkedin.com/in/ricardo-almeida-507b1183"
            target="_blank"
          />
          <ProfileIcon
            icon={faGithub}
            href="https://github.com/RicardoAlmeida25"
            target="_blank"
          />
          <ProfileIcon
            icon={faEnvelope}
            href="mailto:ricardosaul25@gmail.com?Subject=Hi%20Ricardo!"
          />
        </IconsRow>
      </Header>
    </AppWrapper>
  );
};

export default Home;
