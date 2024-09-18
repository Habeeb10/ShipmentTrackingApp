import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
} from 'react-native';
import {hp, wp} from '../util/layoutUtils';
import * as Colors from '../../constant/Colors';

export type InputProps = {
  label: string;
  isPhone?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  value: string;
  error?: boolean | string | undefined; // Add errors prop
  formikProps?: {errors: any; touched?: any};
};

export const Input = ({
  label,
  style,
  labelStyle,
  onChangeText,
  value,
  error,
  ...rest
}: InputProps & TextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        {...rest}
        style={[styles.textInput, style]}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(20),
  },

  label: {
    fontSize: 15,
    color: Colors.deepgrey,
  },
  textInput: {
    backgroundColor: Colors.purple,
    borderRadius: 9,
    height: hp(55),
    marginTop: hp(7),
    fontSize: 15,
    paddingLeft: wp(10),
    paddingRight: wp(10),
  },
});
