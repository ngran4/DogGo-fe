import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserSignUp } from './src/screens/signUp'; 
import { WalkCounter } from './src/screens/walkinfo';
import { Dropdown } from './src/screens/WalkTime';

export default function App() {
  return (
    <View style={styles.container}>
      <Dropdown/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
