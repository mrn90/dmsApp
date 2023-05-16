import React from 'react';
import { View, StyleSheet } from 'react-native';

import { vh, vw } from '../../utils/units';
import { colors } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';
import EurostileBold from '../Wrappers/Text/EurostileBold';

const HeaderBackground = props => {
  const navigation = useNavigation();
  console.log('headerBackground', props?.heading);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <EurostileBold style={styles.heading}>
          {props.heading}
        </EurostileBold> 
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 14 * vh,
    backgroundColor: colors.white,
    justifyContent: 'center',
    },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    justifyContent: 'center',
    fontSize: 3 * vh,
    color: colors.black,
    },
  
});
export default HeaderBackground;
