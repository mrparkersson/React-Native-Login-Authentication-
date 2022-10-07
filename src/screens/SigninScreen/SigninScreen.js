import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';
import Wolf from '../../../assets/images/wolf.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SigninScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSignIn = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      await Auth.signIn(data.username, data.password);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }

    setLoading(false);

    //validate user
    //after validation successful navigate to Home screen
    // navigation.navigate('Home');
  };

  const onForgotPassword = () => {
    //navigate to forgot password screen
    navigation.navigate('ForgotPassword');
  };

  const onSignup = () => {
    //navigate to Sign Up Screen component
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Wolf}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 6,
              message: 'Username should be minimum 6 characters long',
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password should be minimum 5 characters long',
            },
          }}
          secureTextEntry={true}
        />
        <CustomButton
          text={loading ? 'Loading' : 'Sign in'}
          onPress={handleSubmit(onSignIn)}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPassword}
          type="TERTIARY"
        />
        <SocialSiginButtons />
        <CustomButton
          text="Don't have an account? Create One"
          onPress={onSignup}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

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
});
