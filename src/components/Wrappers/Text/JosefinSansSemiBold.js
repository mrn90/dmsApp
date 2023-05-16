import React from 'react';
import TextHOC from './TextHOC';
import styles from './styles';

export default JosefinSansSemiBold = props => {
  return (
    <TextHOC {...props} style={[styles.josefinSansSemiBold, props?.style]}>
      {props.children}
    </TextHOC>
  );
};
