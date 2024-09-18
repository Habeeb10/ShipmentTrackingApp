import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {BackIcon} from '../../asset/svg/index';
import {hp} from '../util/layoutUtils';

type BackButtonType = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const BackButton: FC<BackButtonType> = ({style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.backContainer, style]} onPress={onPress}>
      <BackIcon size={16} />
      <Text style={styles.back}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    marginLeft: hp(5),
    fontSize: hp(16),
    fontWeight: '400',
    color: '#2F50C1',
  },
  backContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default BackButton;
