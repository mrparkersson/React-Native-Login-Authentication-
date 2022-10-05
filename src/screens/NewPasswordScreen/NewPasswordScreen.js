import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSubmit = () => {
    console.warn('Home');
  };

  const onBackToSignin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          name="code"
          control={control}
          placeholder="Code"
          rules={{
            required: 'Code is required',
          }}
        />
        <CustomInput
          name="password"
          placeholder="Enter your new password"
          control={control}
          rules={{
            required: 'Password is required',
            pattern: {
              value: PASSWORD_REGEX,
              message:
                'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
            },
            maxLength: {
              value: 16,
              message: 'Password should be max 16 characters',
            },
          }}
          secureTextEntry={true}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmit)} />
        <CustomButton
          text="Back to signin"
          onPress={onBackToSignin}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
