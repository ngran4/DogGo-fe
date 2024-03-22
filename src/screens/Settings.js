import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import * as profileService from '../services/profileService'
import * as authService from '../services/authService'

const screenWidth = Dimensions.get('window').width

const Settings = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const
    {
      container,
      header,
      homePgHeader,
      colors,
      name,
      clearStateContext
    } = stateContext


  const doLogout = async function () {
    try {
      clearStateContext()
      await authService.logout()
      navigation.navigate('Welcome')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    profileService.getAllProfiles()
  }, [])

  console.log(name, 'name')

  return (
    <SafeAreaView style={container}>
      <ScrollView>
        {/* Pet info */}
        <View style={styles.subSection}>
          <Text style={homePgHeader}>Furry Friends</Text>
          <DogProfileWidget />
          <TouchableOpacity
            onPress={() =>
              // console.log("Edit Pet Profile")
              navigation.navigate('Edit Pet')}
          >
            <Text style={styles.editText}>Edit Pet Profile</Text>
          </TouchableOpacity>
          <View
          // style={styles.weatherSection}
          >
            <View>
              {/* Account */}
              <Text style={homePgHeader}>{name}</Text>
              <Text style={homePgHeader}>Account</Text>
              <Text style={styles.inputInfo}>Change Home Location</Text>
              <Text
                style={styles.inputInfo}
                onPress={() =>
                  navigation.navigate('Coming Soon')}
              >Change E-mail
              </Text>
              <Text
                style={styles.inputInfo}
                onPress={() =>
                  navigation.navigate('Change Password')}
              >Change Password
              </Text>
              <Text
                style={styles.inputInfo}
                onPress={() => doLogout()}
              >Logout
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputInfo: {
    fontFamily: 'ConcertOne-Regular',
    fontSize: 16
  },
  subSection: {
    marginVertical: 20
  },
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  weatherSection: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  toggle: {
    display: 'flex',
    // flexDirection: 'column',
    // flexWrap: 'nowrap',
    justifyContent: 'flex-end',

    width: screenWidth * 0.9,
  }
})

export default Settings
