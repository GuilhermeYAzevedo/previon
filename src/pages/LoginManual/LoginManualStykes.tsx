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
    // backgroundColor: 'blue',
    marginTop: 70,
  },
  sectionTitle: {
    marginTop: 4,
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
  imageLogo: {
    marginTop: 110,
    /*backgroundColor: 'blue',*/
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
  inputPrimary: {
    flex: 1,
    borderBottomColor: '#fff',
  },
  loginInputIcon: {
    padding: 10,
    color: '#fff',
  },
  loginInputView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.medium,
  }


});
