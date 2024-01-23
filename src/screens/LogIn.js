import * as React from "react";
import { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  Button,
  Dimensions
} from "react-native";

const screenWidth = Dimensions.get('window').width;

const LogIn = ({ navigation })  => {
  const [email, setEmail] = useState("");
  const [password, setPassword, setConfirmPassword] = useState("");

  const [stateContext] = useContext(StateContext)
  const { container, blueButton, greenButton, header, homePgHeader, body, buttonText, dogName } = stateContext

  const doLogin = async function () {
    navigation.navigate("Home")
  }

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Login</Text>
        <TextInput
        style={styles.input}
        value={email}
        placeholder={"Email"}
        onChangeText={ (text) => setEmail(text)}
        autoCapitalize={"none"}
        />
        <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={greenButton} onPress={() => doLogin()}>
        <Text style={buttonText} >Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


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
});

export default LogIn;