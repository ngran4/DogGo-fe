import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import DogGoIcon from '../../assets/images/DogGoIcon'

const Welcome = ({navigation}) => {
    // Get the style context from the Context API
    const [styleContext] = useContext(StateContext)
    // Destructure the styles into the used styles on this screen to be used below
    const {container, blueButton, greenButton, header, body, buttonText} = styleContext
    // Needed to check for loaded or error fonts, to display or not display a splash screen
    // Used to prevent errors on loading the screens/components before the system is ready
    let [fontsLoaded, fontError] = useContext(StateContext)

    if (!fontsLoaded && !fontError) {
        return null
    }

  return (
    <SafeAreaView style={container}>
        <View style={{height: 96, width: 100}}>
            <DogGoIcon />
        </View>
        <Text style={[header, {marginTop: 30}]}>Welcome</Text>
        <Text style={header}>to DogGo!</Text>
        <Text style={[body, {marginTop: 40, textAlign: 'center', padding: '3%'}]}>Get personalized walking reminders based on your local weather</Text>
        <Text style={[body, {textAlign: 'center', padding: '3%'}]}> Stay on top of your dog's walking schedule</Text>
        <TouchableOpacity style={[greenButton, {marginTop: 78}]} onPress={() => navigation.navigate("Login")}>
            <Text style={buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[blueButton, {marginTop: 17}]} onPress={() => navigation.navigate("Sign Up")}>
            <Text style={buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Welcome