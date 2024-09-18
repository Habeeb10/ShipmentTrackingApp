import React from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types'; // Adjust the path as needed
import SpacerWrapper from '../../common/util/SpaceWrapper';
import {CommonStyles} from '../../common/commonStyles/styles';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp>(); // Use type-safe navigation

  // Handler to navigate to the login screen
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Ensure 'LoginScreen' is defined in your navigator
  };

  return (
    <SpacerWrapper>
      <ScrollView style={CommonStyles.Container}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#757281',
            fontSize: 14,
            marginBottom: 50,
            marginTop: 15,
          }}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>
      </ScrollView>
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  buttonStyle: {marginTop: 390},
  error: {color: 'red', marginTop: 8},
});

export default SplashScreen;
