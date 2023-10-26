import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    Parse,
} from 'react-native';
import * as authService from '../services/authService'

export const UserSignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const doSignUp= async function () {
        const emailValue = email;
        const usernameValue = name;
        const passwordValue = password;
    
        return await Parse.User.signUp(emailValue,usernameValue, passwordValue)
        .then((createdUser) => {
            Alert.alert(
                'Success!',
                `User ${createdUser.getUsername()} was created.`,
            );
            return true;
        })
        .catch((error) => {
            Alert.alert('Error!', error.message);
            return false;
        });
    }

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     passwordConf: '',
    // })
    // const [photoData, setPhotoData] = useState({})
    
    // const handleChange = e => {
    // props.updateMessage('')
    //     setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //     })
    // }
    
    // const handleChangePhoto = (evt) => {
    //     setPhotoData({ photo: evt.target.files[0] })
    // }
    
    // const handleSubmit = async e => {
    // e.preventDefault()
    // try {
    // await authService.signup(formData, photoData.photo)
    //     props.handleSignupOrLogin()
    //     navigate('/')
    //     } catch (err) {
    //     props.updateMessage(err.message)
    //     }
    // }
    
    // const { name, email, password, passwordConf } = formData
    
    // const isFormInvalid = () => {
    //     return !(name && email && password && password === passwordConf)
    // }

    console.log('hello')

    return (
        <SafeAreaView >
        {/* <Text style={styles.title}>Sign Up ?</Text> */}
        
        <TextInput
        style={styles.input}
        value={name}
        placeholder={"Name"}
        onChangeText={ (text) => setName(text)}
        autoCapitalize={"none"}
        />
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
        <TextInput
        style={styles.input}
        value={ConfirmPassword}
        placeholder={"Confirm Password"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        />
        {/* {(name && email && password && password === passwordConf)
        ?
(        <TextInput
        style={styles.input}
        value={ConfirmPassword}
        placeholder={"Confirm Password"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        />)
        :
(        <TextInput
        style={styles.input}
        value={ConfirmPassword}
        placeholder={"Confirm Password"}
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        />)
        } */}
        <TouchableOpacity style={styles.Button} onPress={() => doSignUp()} >
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 25,
    },
    input: {
        height: 25,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 10,
        padding:10,
        borderRadius:20,
        borderWidth:1,
        width:310,
        height:50,
    },

});