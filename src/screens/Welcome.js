import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { StateContext } from '../context/StateContext'
import DogGoIcon from '../../assets/images/DogGoIcon'
import UserSignUp from './UserSignUp'
import LocationServices from './LocationServices'


const Welcome = ({navigation}) => {
    const {container, button, title, info, buttonText} = styles
    const [styleContext] = useContext(StateContext)

    const goToLogin = () => {

    }

    const goToSignUp = () => {

    }

  return (
    <SafeAreaView style={container}>
        <View style={{height: 64, width: 64}}>
            <DogGoIcon />
        </View>
        <Text style={styleContext.title}>Welcome</Text>
        <Text style={styleContext.title}>to DogGo!</Text>
        <Text style={[info, {marginTop: 50}]}>Get personalized walking reminders based on the weather</Text>
        <Text style={info}> Stay on top of your dog's walking schedule</Text>
        <TouchableOpacity style={button} onPress={() => navigation.navigate("Login")}>
            <Text style={buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={button} onPress={() => navigation.navigate("Sign Up")}>
            <Text style={buttonText}>Sign Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    title: {
        fontSize: 40,
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        padding: '3%'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        margin: 10, 
        width: 310,
        height: 58,
    },
    buttonText: {
        fontSize: 20,
        maxWidth: 310,
        maxHeight: 58,
    },
    dog: {
        marginTop: 15,
        marginBottom: 15
    }
})

export default Welcome