import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  KeyboardTypeOptions,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import {HideIcon, VisibleIcon} from '../../asset/svg/index';

interface InputFormFieldNormalProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  autoFocus?: boolean;
  placeholder?: string;
  formikProps?: {errors: any; touched?: any};
  error?: boolean | string | undefined;
  label?: string;
  secureTextEntry?: boolean;
  type: 'email' | 'password';
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  required?: boolean;
}

const InputFormFieldNormal: React.FC<InputFormFieldNormalProps> = props => {
  const {
    value,
    onChangeText,
    onBlur,
    autoFocus,
    placeholder,
    formikProps,
    type,
    style,
    label,
    secureTextEntry,
  } = props;

  const [secure, setSecure] = useState(secureTextEntry || false);
  const [isFocused, setIsFocused] = useState(false);
  const labelAnimation = useRef(new Animated.Value(value ? 1 : 0)).current;
  const getInputKeyboardType = (): KeyboardTypeOptions =>
    type === 'email' ? 'email-address' : 'default';

  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const showError = formikProps && formikProps.errors && formikProps.touched;

  return (
    <View style={[style]}>
      <View style={styles.textInputContainer}>
        {label && (
          <Animated.Text
            style={[
              styles.formStyle,
              {
                top: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [15, 5],
                }),
                fontSize: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 12],
                }),
                color: labelAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#aaa', '#58536E'],
                }),
                zIndex: 1,
              },
            ]}>
            {label}
          </Animated.Text>
        )}
        <TextInput
          onChangeText={onChangeText}
          onBlur={e => {
            onBlur && onBlur(e);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          value={value}
          placeholder={placeholder}
          autoFocus={autoFocus}
          secureTextEntry={type === 'password' ? secure : false} // Toggle password visibility
          placeholderTextColor="transparent"
          autoCapitalize="none"
          keyboardType={getInputKeyboardType()}
          textContentType={type === 'email' ? 'emailAddress' : 'password'}
          style={styles.textInput}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            accessibilityLabel={secure ? 'Hide password' : 'Show password'}>
            {secure ? (
              <HideIcon size={20} color={'grey'} /> // Hide password icon
            ) : (
              <VisibleIcon size={20} color={'#2F50C1'} /> // Show password icon
            )}
          </TouchableOpacity>
        )}
      </View>

      {showError && <Text style={styles.errorText}>{formikProps.errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#EAE7F2',
    width: '95%',
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 3,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 6,
    marginTop: 8,
    color: '#2F50C1',
  },
  formStyle: {
    position: 'absolute',
    left: 10,
    backgroundColor: '#EAE7F2',
    paddingHorizontal: 2,
    fontWeight: '500',
    zIndex: 1,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    left: 6,
  },
});

export default InputFormFieldNormal;
