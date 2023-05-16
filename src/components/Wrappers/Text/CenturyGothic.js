import React from 'react';
import TextHOC from './TextHOC';
import styles from './styles';

export default CenturyGothic = props => {
  return (
    <TextHOC {...props} style={[styles.CenturyGothic, props?.style]}>
      {props.children}
    </TextHOC>
  );
};
