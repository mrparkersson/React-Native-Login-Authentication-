import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch('username');

  const [loading, setLoading] = useState(false);
  const onConfirm = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }

    setLoading(false);
  };

  const onBackToSignin = () => {
    navigation.navigate('SignIn');
  };

  const onResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was sent to your email successfully');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            maxLength: {
              value: 16,
              message: 'Username should be max 10 characters long',
            },
          }}
        />
        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
        />

        <CustomButton
          text={loading ? 'Loading' : 'Confirm'}
          onPress={handleSubmit(onConfirm)}
        />
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
