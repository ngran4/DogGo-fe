import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import WalkTimeIcon from '../../assets/images/WalkTimeIcon'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Switch, Dimensions } from 'react-native'
import TimeSelector from '../components/TimeSelector'
import WalkTimeProgress from '../../assets/images/signup_progress/WalkTimeProgress'
import * as dogService from '../services/dogService'
import * as tokenService from '../services/tokenService'

const screenWidth = Dimensions.get('window').width

const RemaindersScreen = ({ navigation }) => {
  const [stateContext] = useContext(StateContext)
  const
    {
      container,
      header,
      homePgHeader,
      colors,
      clearStateContext
    } = stateContext
  const [walkEnabled, setWalkEnabled] = useState(true)
  const [airEnabled, setAirEnabled] = useState(true)
  const [rainEnabled, setRainEnabled] = useState(true)
  const [snowEnabled, setSnowEnabled] = useState(true)
  const [thunderstormsEnabled, setThunderstormsEnabled] = useState(true)
  const [heatEnabled, setHeatEnabled] = useState(true)
  const toggleWalkSwitch = () => setWalkEnabled(previousState => !previousState)
  const toggleAirSwitch = () => setAirEnabled(previousState => !previousState)
  const toggleRainSwitch = () => setRainEnabled(previousState => !previousState)
  const toggleSnowSwitch = () => setSnowEnabled(previousState => !previousState)
  const toggleThunderstormSwitch = () => setThunderstormsEnabled(previousState => !previousState)
  const toggleHeatSwitch = () => setHeatEnabled(previousState => !previousState)


  return(
    <SafeAreaView style={container}>
      <Text>Remainders Screen</Text>
                <View>
            {/* Notifications */}
            <Text style={homePgHeader}>Notifications</Text>
            <View style={styles.toggle}>
              <Text style={styles.inputInfo}>Walk Reminders</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#77C8E0' }}
                thumbColor={walkEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleWalkSwitch}
                value={walkEnabled}
                name='walkReminders'
              />
            </View>
          </View>

          <View 
          // style={styles.weatherSection}
          >
            {/* Weather conditions */}
            <Text style={homePgHeader}>Weather Conditions</Text>
            <View style={styles.toggle}>
              <Text style={styles.inputInfo}>Air Quality</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#77C8E0' }}
                thumbColor={airEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleAirSwitch}
                value={airEnabled}
                name='airQuality'
              />
            </View>
            <View style={styles.toggle}>
              <Text style={styles.inputInfo}>Rain</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#77C8E0' }}
                thumbColor={rainEnabled ? '#FFFFFF' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleRainSwitch}
                value={rainEnabled}
                name='rain'
              />
              <View style={styles.toggle}>
                <Text style={styles.inputInfo}>Snow</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#77C8E0' }}
                  thumbColor={snowEnabled ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleSnowSwitch}
                  value={snowEnabled}
                  name='snow'
                />
              </View>
                <Text style={styles.inputInfo}>Thunderstorms</Text>
              <View style={styles.toggle}>
                <Switch
                  trackColor={{ false: '#767577', true: '#77C8E0' }}
                  thumbColor={thunderstormsEnabled ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleThunderstormSwitch}
                  value={thunderstormsEnabled}
                  name='thunderstorms'
                />
              </View>
              <View style={styles.toggle}>
                <Text style={styles.inputInfo}>Extreme Heat</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#77C8E0' }}
                  thumbColor={heatEnabled ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor='#3e3e3e'
                  onValueChange={toggleHeatSwitch}
                  value={heatEnabled}
                  name='extremeHeat'
                />
              </View>
            </View>
            <View>
              {/* Add upcoming reminders */}
              <Text style={homePgHeader}>Add Upcoming Reminders</Text>
              <Text style={styles.inputInfo}
                onPress={() =>
                navigation.navigate('Coming Soon')}
              >Medications</Text>
              <Text style={styles.inputInfo}
                onPress={() =>
                navigation.navigate('Coming Soon')}              
              >Habits</Text>
            </View>
            <View>
            </View>
          </View>
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

  toggle: {
    display: 'flex',
    justifyContent: 'flex-end',
    
    width: screenWidth * 0.9,
  }
})

export default RemaindersScreen