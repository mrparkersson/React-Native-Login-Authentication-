import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SigninScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
