import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native'
import DogProfileWidget from '../components/DogProfileWidget'
import * as authService from '../services/authService'

const screenWidth = Dimensions.get('window').width

const Settings = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const
    {
      container,
      header,
      homePgHeader
    } = stateContext
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const doLogout = async function () {
    try {
      await authService.logout()
      navigation.navigate('Welcome')
    } catch (error) {
      console.log(error)
    }
  }

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
          <View>
            {/* Notifications */}
            <Text style={homePgHeader}>Notifications</Text>
            <Text style={styles.inputInfo}>Walk Reminders</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='walkReminders'
            />
          </View>
          <View>
            {/* Weather conditions */}
            <Text style={homePgHeader}>Weather Conditions</Text>
            <Text style={styles.inputInfo}>Air Quality</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='airQuality'
            />
            <Text style={styles.inputInfo}>Rain</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='rain'
            />
            <Text style={styles.inputInfo}>Snow</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='snow'
            />
            <Text style={styles.inputInfo}>Thunderstorms</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='thunderstorms'
            />
            <Text style={styles.inputInfo}>Extreme Heat</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor='#3e3e3e'
              onValueChange={toggleSwitch}
              value={isEnabled}
              name='extremeHeat'
            />
          </View>
          <View>
            {/* Add upcoming reminders */}
            <Text style={homePgHeader}>Add Upcoming Reminders</Text>
            <Text style={styles.inputInfo}>Medications</Text>
            <Text style={styles.inputInfo}>Habits</Text>
          </View>
          <View>
            {/* Account */}
            <Text style={homePgHeader}>Account</Text>
            <Text style={styles.inputInfo}>Change Home Location</Text>
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

  }
})

export default Settings
