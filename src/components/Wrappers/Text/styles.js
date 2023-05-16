import { StyleSheet } from 'react-native';
import { fonts } from '../../../assets';
import { colors } from '../../../utils/theme';

import { vw } from '../../../utils/units';

export default StyleSheet.create({
  text: {
    fontSize: vw * 3.5,
    color: colors.black
    // textAlign: "left"
  },
  CenturyGothic: {
    fontFamily: fonts.CenturyGothic.CenturyGothicBold,
  },
  josefinSansSemiBold: {
    fontFamily: fonts.JosefinSans.SemiBold,
  },
});
