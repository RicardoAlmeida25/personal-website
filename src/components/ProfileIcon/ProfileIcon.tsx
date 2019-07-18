import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { StyledLink } from './ProfileIcon.styles';

interface Props {
  icon: IconDefinition;
  href: string;
  target?: string;
}

const ProfileIcon: FunctionComponent<Props> = ({ icon, href, target }) => (
  <StyledLink href={href} {...target && { target }}>
    <FontAwesomeIcon icon={icon} color="palevioletred" />
  </StyledLink>
);

export default ProfileIcon;
