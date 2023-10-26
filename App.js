import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
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
  const navOptions = {
    title: "",
    headerStyle: {backgroundColor: "#F8F5E6"}
  }

  const noHeaderNavOptions = {
    headerShown: false
  }
  
  return (
      <StateProvider >
          <NavigationContainer >
            <Stack.Navigator >
              <Stack.Screen name="Welcome" component={Welcome} options={noHeaderNavOptions}/>
              <Stack.Screen name="Location Services" component={LocationServices} options={navOptions}/>
              <Stack.Screen name="Sign Up" component={UserSignUp} options={navOptions}/>
              <Stack.Screen name="Add a Furry Friend" component={AddPet} options={navOptions}/>
              <Stack.Screen name="Walk Counter" component={WalkCounter} options={navOptions}/>
            </Stack.Navigator>
          </NavigationContainer>
      </StateProvider>
  );
}