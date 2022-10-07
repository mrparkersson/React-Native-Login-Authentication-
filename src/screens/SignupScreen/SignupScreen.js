import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const SignupScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');

  const [loading, setLoading] = useState();

  const onSignUp = async (data) => {
    const { username, password, email, name } = data;

    if (loading) {
      return;
    }
    //set Loading
    setLoading(true);
    try {
      //signup new users into aws,,, dynamo db
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      //Navigate to confirm email page if successful...
      navigation.navigate('ConfirmEmail', { username });
    } catch (error) {
      Alert.alert('Oops', error.message);
    }

    setLoading(false);
    //send new user to the DB
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
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
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 6,
              message: 'Name should be minimum 6 characters long',
            },
          }}
        />

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
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: 'Email is required',
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
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
        />
        <CustomInput
          name="repeatpassword"
          control={control}
          placeholder="Repeat password"
          secureTextEntry={true}
          rules={{
            validate: (value) => value === pwd || 'Passwords do not match',
          }}
        />
        <CustomButton
          text={loading ? 'Loading' : 'Register'}
          onPress={handleSubmit(onSignUp)}
        />
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
