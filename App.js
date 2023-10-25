import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserSignUp } from './src/screens/signUp'; 
import { WalkCounter } from './src/screens/walkinfo';

export default function App() {
  return (
    <View style={styles.container}>
      <UserSignUp/>
      <WalkCounter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
