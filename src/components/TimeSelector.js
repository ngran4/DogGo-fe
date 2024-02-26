import React, { useContext, useState } from 'react'
import { StateContext } from '../context/StateContext'
// import { Picker } from '@react-native-picker/picker'
import { Button, Text, StyleSheet, View, Dimensions } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

const screenWidth = Dimensions.get('window').width

const TimeSelector = () => {
  // const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValues, setSelectedValues] = useState(Array(numWalks).fill(null))
  const [stateContext] = useContext(StateContext)
  const { numWalks, setNumWalks, walkTimes, setWalkTimes } = stateContext

  const handleValueChange = (index, value) => {
    const newValues = [...selectedValues]
    newValues[index] = value
    setSelectedValues(newValues)
    console.log(selectedValues, '<----- selectedValues in TimeSelector')
    setWalkTimes(selectedValues)
  }

  const timeslot = {
    label: 'Select time',
    value: null,
    color: 'black'
  }

  function generateOptionsWith15MinIncrements () {
    const options = []
    const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
    const amPm = ['am', 'pm']

    for (let j = 0; j < amPm.length; j++) {
      const period = amPm[j]

      for (let i = 0; i < hours.length; i++) {
        const hour = hours[i]

        for (let k = 0; k < 4; k++) {
          const minute = k * 15
          const label = `${hour}:${minute.toString().padStart(2, '0')} ${period}`
          const value = `${hour}${minute.toString().padStart(2, '0')}${period}`
          options.push({ label, value })
        }
      }
    }

    return options
  }

  const options = generateOptionsWith15MinIncrements()

  const dropdownCount = numWalks
  const dropdowns = []
  for (let i = 0; i < dropdownCount; i++) {
    dropdowns.push(
      <RNPickerSelect
        placeholder={timeslot}
        items={options}
        onValueChange={(value) => handleValueChange(i, value)}
        value={selectedValues[i]}
        style={pickerSelectStyles}
        key={i}
      />
    )
  }

  return (
    <>
      <View style={styles.container}>
        {dropdowns}
      </View>
    </>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingRight: 15,
    paddingTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: screenWidth * 0.5,
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    fontWeight: 600
  },
  inputAndroid: {
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: screenWidth * 0.45
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    // justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TimeSelector
