import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const onSignUp = () => {
    console.warn('Sign in');
  };

  const onSignIn = () => {
    console.warn('Signup for a new account');
  };

  const onTermsOfUsePress = () => {
    console.warn('Terms Pressed');
  };

  const onPrivacyPolicyPress = () => {
    console.warn('Privacy Pressed');
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
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat password"
          value={repeatPassword}
          setValue={setRepeatPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Register" onPress={onSignUp} />
        <Text style={styles.text}>
          By Registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPress}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSiginButtons />

        <CustomButton
          text="Already have an account? Sign in"
          onPress={onSignIn}
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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
});
