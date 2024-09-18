import {StyleSheet} from 'react-native';
import * as Colors from '../../constant/Colors';
import {hp, wp} from '../util/layoutUtils';

export const CommonStyles = StyleSheet.create({
  placeholderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSignIn: {
    fontSize: hp(14),
    fontWeight: '500',
  },
  buttonSignup: {
    color: 'white',
    marginHorizontal: 5,
  },
  buttonBackground: {
    backgroundColor: '#EB4235',
  },

  formContainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  formStyle: {
    marginBottom: hp(5),
    fontSize: hp(18),
    fontWeight: '500',
  },

  placeholder: {
    marginBottom: hp(5),
    fontSize: hp(18),
    fontWeight: '500',
  },
  formtext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formcontainer: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  textInput: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 15,
    fontSize: hp(16),
    fontWeight: '400',
  },
  loadingStyle: {
    textAlign: 'center',
    fontSize: 14,
    color: 'red',
  },
  item: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  customLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ff6347',
  },
  errorText: {
    fontSize: hp(14),
    color: 'red',
    marginTop: 5,
  },
  buttonStyle: {marginTop: 390},

  backIcon: {
    marginLeft: hp(15),
    marginBottom: hp(20),
  },
  label: {
    fontSize: hp(16),
    color: '#000000',
    fontWeight: '500',
  },

  Container: {
    paddingHorizontal: hp(10),
  },

  button: {
    marginTop: hp(48),
  },

  header: {
    fontSize: hp(24),
    paddingHorizontal: hp(15),
    marginBottom: hp(20),
    fontWeight: '500',
  },
});
