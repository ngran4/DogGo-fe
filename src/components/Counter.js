import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'
import { Button, Text, StyleSheet, View } from 'react-native'
import PlusIcon from '../../assets/images/PlusIcon'
import MinusIcon from '../../assets/images/MinusIcon'

const Counter = ({ style }) => {
  const [stateContext] = useContext(StateContext)
  const { numWalks, setNumWalks, subHeader } = stateContext

  const handleCounterChange = (newCount) => {
    setNumWalks(newCount)
  }

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={{ height: 44, width: 44 }}>
          <MinusIcon onPress={() => handleCounterChange(numWalks - 1)} />
        </View>

        <Text style={[subHeader, { margin: 10 }]}>{numWalks}</Text>

        <View style={{ height: 44, width: 44 }}>
          <PlusIcon onPress={() => handleCounterChange(numWalks + 1)} />
        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})

export default Counter
