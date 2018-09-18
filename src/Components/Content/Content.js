import React from 'react';

import './Content.scss';

const Content = ({ on, toggle }) => {
  return (
    <div style={{ backgroundColor: on ? "#5352ed" : "white" }} className="Content">
      <h1 style={{ color: on ? "#ff4757" : "#2f3542" }}>
        Simple Side Navigation Transition Using React.js and React Spring
      </h1>

      <button onClick={toggle}>
        Click On Me😃
      </button>
    </div>
  );
};

export default Content;