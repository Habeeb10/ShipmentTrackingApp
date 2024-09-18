import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/login';
import ShipmentStatusScreen from '../screen/ship';
import SplashScreen from '../screen/splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}} // Hide header for SplashScreen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}} // Hide header for LoginScreen
        />
        <Stack.Screen
          name="ShipmentStatus"
          component={ShipmentStatusScreen}
          options={{headerShown: false}} // Hide header for ShipmentStatusScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
