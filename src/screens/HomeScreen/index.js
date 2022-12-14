import { View, Text } from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';

const HomeScreen = () => {
  const signOut = async () => {
    await Auth.signOut();
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, alignSelf: 'center' }}>
        Mr Parker's Son....
      </Text>
      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: '20',
          fontSize: '20',
        }}
      >
        Sign Out
      </Text>
    </View>
  );
};

export default HomeScreen;
