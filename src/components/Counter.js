import React, { useContext } from "react";
import { StateContext } from '../context/StateContext'
import { Button, Text, StyleSheet, View } from "react-native"

const Counter = () => {
    const [stateContext] = useContext(StateContext)
    const { numWalks, setNumWalks, subHeader } = stateContext;
    
    const handleCounterChange = (newCount) => {
      setNumWalks(newCount);
    };

    return (
        <>
            <View style={styles.container}>
            <Button
                onPress={() => handleCounterChange(numWalks - 1)} title="-"
            />
            <Text style={subHeader}>{numWalks}</Text>
            <Button
                onPress={() => handleCounterChange(numWalks + 1)} title="+"
            />
        </View>

        </>
    )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  container: {
    flexDirection: 'row',
  },
});

export default Counter;