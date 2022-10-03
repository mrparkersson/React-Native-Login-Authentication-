import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import SocialSiginButtons from '../../components/SocialSiginButtons';
import Wolf from '../../../assets/images/wolf.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onSignIn = () => {
    console.warn('Sign in');
    //validate user

    //after validation successful navigate to Home screen
    navigation.navigate('Home');
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
