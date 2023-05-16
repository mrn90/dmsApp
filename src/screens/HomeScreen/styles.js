import {StyleSheet} from 'react-native';
import {colors} from '../../utils/theme';
import {vh, vw} from '../../utils/units';
import { fonts } from '../../assets';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  world_map:{
    // width: '100%',
    flex: 1
  },
  placeholderStyle: {
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
    color: colors.grayText1,
  },
  dropdown: {
    alignSelf: 'center',
    borderWidth: 0.1 * vh,
    backgroundColor: 'white',
    borderColor: colors.placeholderColor,
    borderRadius: 2 * vh,
    paddingVertical: 2 * vh,
    width: '90%',
    paddingLeft: 2 * vh,
    marginTop: 2 * vh,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 3},
    position: 'relative',
    elevation: 2 * vh,
    // paddingBottom: 5 * vh
    // zIndex: 4 * vh,
    // top: 200
    // zIndex: 2 * vh
  },
  tempContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeading:{
    alignSelf: 'center',
    fontSize: 3 * vh,
    marginTop: 5 * vh
  },
  text: {
    alignSelf: 'center',
    fontSize: 3 * vh,
    fontWeight: '700',
    marginTop: 5 * vh
  },
  errorText:{
    color: colors.red,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5 * vh
  }
});

export default styles;
