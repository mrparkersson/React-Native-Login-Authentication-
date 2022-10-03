import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import Wolf from '../../../assets/images/wolf.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    console.warn('Sign in');
  };

  const onForgotPassword = () => {
    console.warn('Forgot Password?');
  };

  const onSignInFacebook = () => {
    console.warn('Signin with Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Sign in with Google');
  };

  const onSignInApple = () => {
    console.warn('Sign in with Apple');
  };

  const onSignup = () => {
    console.warn('Sign up for a new account');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign in" onPress={onSignIn} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPassword}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign in with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Sign in with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          text="Sign in with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create One"
          onPress={onSignup}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {},
});
