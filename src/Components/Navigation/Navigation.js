import React from 'react';

import GithubIcon from '../../Assets/Images/github.svg';
import './Navigation.scss';

const Navigation = props => {
  return (
    <div style={props.styles} className="SideNavigation">
      <a href="https://github.com/pomegranitedesign" target="__blank">
        <img className="NavigationIcon" style={{ height: "80px" }} src={GithubIcon} alt="Github Icon" />
      </a>
    </div>
  );
};

export default Navigation;