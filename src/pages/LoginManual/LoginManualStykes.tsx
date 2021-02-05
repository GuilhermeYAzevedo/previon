import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';

export default StyleSheet.create({
  scrollViewProp: {
    backgroundColor: Colors.primary,
    color: Colors.primary,
  },
  body: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageLogo: {
    marginTop: 110,
  },
  form: {
    marginTop: 70,
  },
  sectionTitle: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: 'IBMPlexSans-SemiBold',
  },
  loginInputIcon: {
    color: '#fff',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  loginBtnView: {
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: Colors.blue,
    padding: 10,
    fontSize: 14,
    borderRadius: 5,
    fontFamily: 'Poppins-Bold',
  },
  loginBtnText: {
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.white,
  },
});
