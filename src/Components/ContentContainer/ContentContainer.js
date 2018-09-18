import React, { Fragment } from 'react';
import { Transition } from 'react-spring';

import Toggle from '../../Utils/Toggle';
import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';
import './ContentContainer.scss';

const ContentContainer = props => {
  return (
    <div className="ContentContainer">
        
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <Transition
              from={{ width: "0%" }}

              enter={{ width: "20%" }}

              leave={{ width: "0%" }}

              config={{
                overshootClamping: true,
                tension: 180,
                friction: 20
              }}
            >
              {on ? styles => <Navigation styles={styles} /> : null}
            </Transition>

            <Content 
              on={on}
              toggle={toggle}
            />
          </Fragment>
        )}
      </Toggle>
    </div>
  );
};

export default ContentContainer;