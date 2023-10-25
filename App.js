import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StateProvider } from './src/context/StateContext';
import Welcome from './src/screens/Welcome';
import LocationServices from './src/screens/LocationServices';
import UserSignUp from './src/screens/UserSignUp';
import WalkCounter from './src/screens/WalkCounter';
import AddPet from './src/screens/AddPet';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  return (
    <StateProvider>
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Welcome" component={Welcome} options={{title:"", headerStyle: {backgroundColor: 'lightgrey'}}}/>
            <Stack.Screen name="Location Services" component={LocationServices} options={{title:"", headerStyle: {backgroundColor: 'lightgrey'}}}/>
            <Stack.Screen name="Sign Up" component={UserSignUp} options={{title:"", headerStyle: {backgroundColor: 'lightgrey'}}}/>
            <Stack.Screen name="Add a Furry Friend" component={AddPet} options={{title:"", headerStyle: {backgroundColor: 'lightgrey'}}}/>
            <Stack.Screen name="Walk Counter" component={WalkCounter} options={{title:"", headerStyle: {backgroundColor: 'lightgrey'}}}/>
          </Stack.Navigator>
        </NavigationContainer>
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
