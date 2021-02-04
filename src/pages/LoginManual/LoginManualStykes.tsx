import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    backgroundColor: 'blue',
    marginTop: 70,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
  imageLogo: {
    marginTop: 150,
    backgroundColor: 'blue',
  },
  loginBtnView: {
    marginTop: 10,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: Colors.blue,
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Poppins-Bold',
  },
});
