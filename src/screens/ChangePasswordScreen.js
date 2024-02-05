import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Text, TextInput, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { StateContext } from '../context/StateContext'

const screenWidth = Dimensions.get('window').width

const ChangePasswordScreen = () => {
  // State Context
  const [stateContext] = useContext(StateContext)
  const { container, greenButton, homePgHeader, buttonText } = stateContext
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConf, setNewPasswordConf] = useState('')

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={homePgHeader}>Change Password</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={oldPassword}
          placeholder='Old Password'
          secureTextEntry
          onChangeText={(text) => setOldPassword(text)}
        />
        <TextInput
          style={styles.input}
          value={newPassword}
          placeholder='New Password'
          secureTextEntry
          onChangeText={(text) => setNewPassword(text)}
        />
        <TextInput
          style={styles.input}
          value={newPasswordConf}
          placeholder='Confirm New Password'
          secureTextEntry
          onChangeText={(text) => setNewPasswordConf(text)}
        />
      </View>
      <TouchableOpacity style={greenButton}>
        <Text style={buttonText}>Confirm</Text>
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
    fontWeight: 600
  }
})

export default ChangePasswordScreen
