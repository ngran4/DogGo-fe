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
    TouchableOpacity
} from 'react-native';
import * as authService from '../services/authService'

const UserSignUp = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, body, buttonText } = stateContext

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

    const doSignUp= async function () {

        const formData = {
            name: name,
            email: email,
            password: password,
            passwordConf: passwordConf
        }
        
        navigation.navigate("Location Services")
        
        try {
            await authService.signup(formData)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <SafeAreaView style={container}>
      <View style={{ height: 64, width: 64 }}>
        <BringIcon />
      </View>

            <Text style={header}>Sign Up</Text>
            
            <TextInput
            style={styles.input}
            value={email}
            placeholder={"Email"}
            onChangeText={ (text) => setEmail(text)}
            autoCapitalize={"none"}
            />
            <TextInput
            style={styles.input}
            value={name}
            placeholder={"Username"}
            onChangeText={ (text) => setName(text)}
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
    height: 25,
    marginBottom: 10,
    backgroundColor: '#fff'
  }
})

export default UserSignUp
