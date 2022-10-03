import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialSigninButtons = () => {
  const onSignUpFacebook = () => {
    console.warn('Signup with Facebook');
  };

  const onSignUpGoogle = () => {
    console.warn('Signup with Google');
  };

  const onSignUpApple = () => {
    console.warn('Signup with Apple');
  };

  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignUpFacebook}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={onSignUpGoogle}
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignUpApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSigninButtons;
