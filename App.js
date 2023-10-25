import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import LocationServices from './src/screens/LocationServices';

export default function App() {
  return (
    <View style={[styles.container, {backgroundColor: 'lightgrey'}]}>
      {/* <LocationServices /> */}
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
