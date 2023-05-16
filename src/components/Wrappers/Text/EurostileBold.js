import React from 'react';
import TextHOC from './TextHOC';
import styles from './styles';

export default EurostileBold = props => {
  return (
    <TextHOC {...props} style={[styles.eurostileBold, props?.style]}>
      {props.children}
    </TextHOC>
  );
};
