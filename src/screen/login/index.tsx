import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '../../navigation/types';
import {useLoginMutation} from '../../redux/features/auth/authApi';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from '../../common/button/button';
import InputFormFieldNormal from '../../common/input/inputForm';
import SpacerWrapper from '../../common/util/SpaceWrapper';
import {CommonStyles} from '../../common/commonStyles/styles';
import BackButton from '../../common/button/backbutton';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  usr: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  pwd: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = () => {
  const [login, {data, error, isLoading}] = useLoginMutation();
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = async (values: {usr: string; pwd: string}) => {
    try {
      // Attempt to login
      const response = await login(values).unwrap();
      console.log('Login success:', response);
      // Navigate to shipment status screen on successful login
      navigation.navigate('ShipmentStatus');
    } catch (err) {
      console.error('Login failed:', JSON.stringify(err, null, 2));
    }
  };

  return (
    <SpacerWrapper>
      <ScrollView style={CommonStyles.Container}>
        <View style={CommonStyles.backIcon}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={CommonStyles.Container}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Login</Text>
          <Text
            style={{
              color: '#757281',
              fontSize: 14,
              marginBottom: 50,
              marginTop: 15,
            }}>
            Please enter your username and password to signin
          </Text>
        </View>

        <Formik
          initialValues={{usr: 'test@brandimic.com', pwd: 'testy123@'}}
          validationSchema={validationSchema}
          onSubmit={handleLogin}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <InputFormFieldNormal
                label="Username / Email"
                type="email"
                value={values.usr}
                onChangeText={handleChange('usr')}
                onBlur={handleBlur('usr')}
                placeholder="Enter your email"
                formikProps={{errors: errors.usr, touched: touched.usr}} // Pass errors and touched from Formik
                error={touched.usr && errors.usr} // Show error when touched and error exist
              />

              <InputFormFieldNormal
                label="Password"
                type="password"
                value={values.pwd}
                onChangeText={handleChange('pwd')}
                onBlur={handleBlur('pwd')}
                placeholder="Enter your password"
                style={{marginTop: 40}}
                secureTextEntry
                formikProps={{errors: errors.pwd, touched: touched.pwd}} // Pass errors and touched from Formik
                error={touched.pwd && errors.pwd} // Show error when touched and error exist
              />

              <View>
                <Button
                  onPressButton={handleSubmit} // Use handleSubmit from Formik
                  title="Login"
                  style={CommonStyles.buttonStyle}
                  disabled={isLoading} // Disable button while loading
                  buttonLoading={isLoading} // Show loader during login process
                  icon={undefined}
                />
              </View>

              {error && (
                <Text style={CommonStyles.errorText}>Login failed!</Text>
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    </SpacerWrapper>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {marginTop: 390},
});

export default LoginScreen;
