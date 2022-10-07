import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation('');
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSend = async (data) => {
    const { username } = data;
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await Auth.forgotPassword(username);
      navigation.navigate('NewPassword', { username });
    } catch (error) {
      Alert.alert('Oops', error.message);
    }

    setLoading(false);
  };

  const onBackToSignin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 6,
              message: 'Username should be minimum 6 characters long',
            },
          }}
        />

        <CustomButton
          text={loading ? 'Loading' : 'SEND'}
          onPress={handleSubmit(onSend)}
        />
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
