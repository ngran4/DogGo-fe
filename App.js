import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StateProvider } from './src/context/StateContext';
import Welcome from './src/screens/Welcome';
import LocationServices from './src/screens/LocationServices';
import UserSignUp from './src/screens/UserSignUp';
import WalkCounter from './src/screens/WalkCounter';

export default function App() {
  return (
    <StateProvider>
      <View style={[styles.container, {backgroundColor: 'lightgrey'}]}>
        <Welcome />
      </View>
    </StateProvider>
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
