import React from 'react';

import {Platform, SafeAreaView, View} from 'react-native';

import * as Safety from 'react-native-safe-area-context';

const NotchResponsive = () => {
  return (
    <View>
      {Platform.OS === 'android' ? (
        <Safety.SafeAreaView style={{flex: 0}} />
      ) : (
        <SafeAreaView style={{flex: 0}} />
      )}
    </View>
  );
};

export default NotchResponsive;
