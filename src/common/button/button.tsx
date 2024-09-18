import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import * as Colors from '../../constant/Colors';
import {hp} from '../util/layoutUtils';

type ButtonPropsType = {
  title: string;
  onPressButton?: () => void;
  isNext?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  icon: any;
  disabled?: boolean;
  buttonLoading?: boolean;
};

export const Button: FC<ButtonPropsType> = ({
  title,
  onPressButton,
  isNext,
  style,
  styleText,
  icon,
  disabled,
  buttonLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || buttonLoading}
      activeOpacity={0.6}
      onPress={onPressButton}
      style={[
        styles.doneButton,
        isNext && styles.nextButton,
        style,

        disabled && {
          backgroundColor: '#2F50C1',
          opacity: disabled ? 0.5 : 1,
        },

        style,
      ]}>
      {icon}

      <Text style={[styles.doneText, isNext && styles.nextText, styleText]}>
        {buttonLoading ? (
          <ActivityIndicator animating={buttonLoading} />
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  doneText: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  nextText: {
    color: Colors.white,
  },
  doneButton: {
    backgroundColor: '#2F50C1',
    width: '95%',
    height: hp(57),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: hp(20),
    flexDirection: 'row',
  },
  nextButton: {
    backgroundColor: '#2F50C1',
  },
};
