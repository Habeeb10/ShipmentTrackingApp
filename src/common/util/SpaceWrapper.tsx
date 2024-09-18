import React from 'react';
import {View} from 'react-native';
import {CommonStyles} from '../commonStyles/styles';
import NotchResponsive from './NotchResponsiveness';

const SpacerWrapper = ({children}: {children: any}) => {
  return (
    <View style={[CommonStyles.wrapperContainer]}>
      <NotchResponsive />
      <View style={[CommonStyles.wrapperContainer]}>{children}</View>
    </View>
  );
};

export default SpacerWrapper;
