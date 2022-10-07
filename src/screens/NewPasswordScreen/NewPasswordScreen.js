import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const NewPasswordScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const { username, code, password } = data;
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      navigation.navigate('SignIn');
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
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />
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

        <CustomButton
          text={loading ? 'Loading' : 'Submit'}
          onPress={handleSubmit(onSubmit)}
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
