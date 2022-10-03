import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onSend = () => {
    console.warn('Sign in');
  };

  const onBackToSignin = () => {
    console.warn('On back to sign in ');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="SEND" onPress={onSend} />
        <CustomButton
          text="Back to signin"
          onPress={onBackToSignin}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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