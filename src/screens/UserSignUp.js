import React, { useState, useContext } from 'react'
import { StateContext } from '../context/StateContext'
import BringIcon from '../../assets/images/BringIcon'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Alert,
  Parse,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import * as authService from '../services/authService'

const screenWidth = Dimensions.get('window').width;

const UserSignUp = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, body, buttonText } = stateContext

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const doSignUp = async function () {

    const formData = {
      name: name,
      email: email,
      password: password,
      passwordConf: passwordConf
    }

    try {
      await authService.signup(formData)
      navigation.navigate("Location Services")
    } catch (error) {
      // iOS and Android error handling
      // if (error.message === 'Account already exists') {
      //   Alert.alert(
      //     'Account already exists',
      //     'Please log in',
      //     [
      //       { text: 'OK', onPress: () => navigation.navigate('Log In') }
      //     ]
      //   ) 
      // }
      // iOS and Android error handling
      if (error.message === 'Account already exists') {
        alert('Account already exists')
        navigation.navigate('Login')
      } else if (error.message === 'Request failed with status code 400') {
        alert('Please fill out all fields')
      } else {
        alert('Something went wrong')
      }
    }
  }


  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <BringIcon />
      </View>
      <Text style={[header, { marginBottom: 15 }]}>Sign Up</Text>
      <View style={{ flex: 0.8, alignItems: 'center' }}>


        <TextInput
          style={styles.input}
          value={email}
          placeholder={"Email"}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={name}
          placeholder={"Username"}
          onChangeText={(text) => setName(text)}
          autoCapitalize={"none"}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          value={passwordConf}
          placeholder={"Confirm Password"}
          secureTextEntry
          onChangeText={(text) => setPasswordConf(text)}
        />
      </View>
      {(name && email && password && password === passwordConf) ?
        (<>
          <TouchableOpacity style={greenButton} onPress={() => doSignUp()}>
            <Text style={buttonText}>Create Account</Text>
          </TouchableOpacity>
        </>)
        :
        (<>
          {/* <Text style={header}>Not Valid</Text> */}
        </>)}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    paddingRight: 15,
    paddingTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.7,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600,
  }
})

export default UserSignUp
