import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './src/screens/Welcome';
// import LocationServices from './src/screens/LocationServices';
import UserSignUp from './src/screens/UserSignUp';
import WalkCounter from './src/screens/WalkCounter';

export default function App() {
  return (
    <View style={[styles.container, {backgroundColor: 'lightgrey'}]}>
      <WalkCounter />
    </View>
  );
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
