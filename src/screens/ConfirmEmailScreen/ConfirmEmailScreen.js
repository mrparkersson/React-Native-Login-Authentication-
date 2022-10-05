import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const onConfirm = () => {
    console.warn('Sign in');
    navigation.navigate('Home');
  };

  const onBackToSignin = () => {
    navigation.navigate('SignIn');
  };

  const onResendCode = () => {
    console.warn('On back to signin');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirm)} />
        <CustomButton
          text="Resend code"
          onPress={onResendCode}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to sign in"
          onPress={onBackToSignin}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
