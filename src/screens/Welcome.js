import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import DogGoIcon from '../../assets/images/DogGoIcon'

const Welcome = ({navigation}) => {
    const [styleContext] = useContext(StateContext)
    const {container, blueButton, greenButton, header, body, buttonText} = styleContext

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