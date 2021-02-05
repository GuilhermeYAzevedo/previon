import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const globalStyle = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.primary,
    // paddingHorizontal: 0,
    flex: 1,
  },
  inputPrimary: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomColor: Colors.medium,
    borderBottomWidth: 1,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Regular',
  },
  smallMarginTop: {
    marginTop: 0,
  },
  mediumMarginTop: {
    marginTop: 30,
  },
  largeMarginTop: {
    marginTop: 0,
  },
});
