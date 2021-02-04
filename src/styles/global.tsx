import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const globalStyle = StyleSheet.create({
  safeArea: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 32,
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
});
