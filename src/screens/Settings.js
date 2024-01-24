import React, { useContext } from 'react';
import { StateContext } from '../context/StateContext'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import DogProfileWidget from '../components/DogProfileWidget';
import * as authService from '../services/authService'


const Settings = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header, homePgHeader} = stateContext

  const doLogout = async function () {
    try {
      await authService.logout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={container}>
      {/* Pet info */}
      <View style={styles.subSection}>
        <Text style={homePgHeader}>Furry Friends</Text>
        <DogProfileWidget />
        <TouchableOpacity
          onPress={() =>
            // console.log("Edit Pet Profile")
            navigation.navigate("Edit Pet")
          }
        >
          <Text style={styles.editText}>Edit Pet Profile</Text>
        </TouchableOpacity>
        <View>
          {/* Notifications */}
          <Text style={homePgHeader}>Notifications</Text>
          <Text style={styles.inputInfo}>Walk Reminders</Text>
          <input type='radio' name='walkReminders' value={null} />
        </View>
        <View>
          {/* Weather conditions */}
          <Text style={homePgHeader}>Weather Conditions</Text>
          <Text style={styles.inputInfo}>Air Quality</Text>
          <input type='radio' name='airQuality' value={null} />
          <Text style={styles.inputInfo}>Rain</Text>
          <input type='radio' name='rain' value={null} />
          <Text style={styles.inputInfo}>Snow</Text>
          <input type='radio' name='snow' value={null} />
          <Text style={styles.inputInfo}>Thunderstorms</Text>
          <input type='radio' name='thunderstorms' value={null} />
          <Text style={styles.inputInfo}>Extreme Heat</Text>
          <input type='radio' name='extremeHeat' value={null} />
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
          <Text style={styles.inputInfo}>Change Password</Text>
          <Text style={styles.inputInfo}
          onPress={() => doLogout()}
          >Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputInfo: {
    fontFamily: "ConcertOne-Regular",
    fontSize: 16,
  },
  subSection: {
    marginVertical: 20
  },    
  editText: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 12,
    textDecorationLine: 'underline',

  },
})

export default Settings