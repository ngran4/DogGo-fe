
import { StateProvider } from './src/context/StateContext'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import { useCallback, useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import Welcome from './src/screens/Welcome'
import LocationServices from './src/screens/LocationServices'
import LogIn from './src/screens/LogIn'
import UserSignUp from './src/screens/UserSignUp'
import WalkCounter from './src/screens/WalkCounter'
import WalkTime from "./src/screens/WalkTime"
import AddPet from './src/screens/AddPet'
// import HomeScreen from './src/screens/HomeScreen';
// import CurrentWeather from './src/components/CurrentWeather';
import PetProfile from './src/screens/PetProfile'
import NavBar from './src/components/NavBar'
import EditPet from './src/screens/EditPet'
import Settings from './src/screens/Settings'
import ChangePasswordScreen from './src/screens/ChangePasswordScreen'


const Stack = createStackNavigator()
SplashScreen.preventAutoHideAsync()

export default function App() { 
  const [fontsLoaded] = useFonts({
    'ConcertOne-Regular': require('./assets/fonts/ConcertOne-Regular.ttf'),
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
  })

  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync() // hide the splashscreen
    }
  }, [fontsLoaded])

  useEffect(() => {
    handleOnLayout()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const navOptions = {
    title: '',
    headerStyle: { backgroundColor: '#F8F5E6' }
  }

  const noHeaderNavOptions = {
    headerShown: false
  }

  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Welcome' component={Welcome} options={noHeaderNavOptions} />
          <Stack.Screen name='Location Services' component={LocationServices} options={navOptions} />
          <Stack.Screen name='Login' component={LogIn} options={navOptions} />
          <Stack.Screen name='Sign Up' component={UserSignUp} options={navOptions} />
          <Stack.Screen name='Add a Furry Friend' component={AddPet} options={navOptions} />
          <Stack.Screen name='Walk Counter' component={WalkCounter} options={navOptions} />
          <Stack.Screen name='Walk Times' component={WalkTime} options={navOptions} />
          <Stack.Screen name="Pet Profile" component={PetProfile} options={navOptions}/>
          <Stack.Screen name="Edit Pet" component={EditPet} options={navOptions}/>
          <Stack.Screen name='Home' component={NavBar} options={noHeaderNavOptions} />
          <Stack.Screen name='Settings' component={Settings} options={navOptions}/>
          <Stack.Screen name='Change Password' component={ChangePasswordScreen} options={navOptions}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>

  )
}


