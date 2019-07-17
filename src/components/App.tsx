import React, { FunctionComponent } from 'react';
import { AppWrapper, Header, Title } from './App.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const App: FunctionComponent = () => {
  return (
    <AppWrapper>
      <Header>
        <Title>Developer</Title>
        <FontAwesomeIcon icon={faGithub} color="palevioletred" />
        <FontAwesomeIcon icon={faLinkedin} color="palevioletred" />
        <FontAwesomeIcon icon={faEnvelope} color="palevioletred" />
      </Header>
    </AppWrapper>
  );
};

export default App;
