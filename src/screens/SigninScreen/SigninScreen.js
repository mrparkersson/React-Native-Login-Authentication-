import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Wolf from '../../../assets/images/wolf.png';

const SigninScreen = () => {
  return (
    <View style={styles.root}>
      <Image source={Wolf} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: 200,
  },
});
