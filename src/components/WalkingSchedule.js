import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { StateContext } from '../context/StateContext'
import SmallBone from '../../assets/images/SmallBone'

const WalkingSchedule = () => {
    const [stateContext] = useContext(StateContext)
    const { container, subHeader, bodySemiBold, walkTimes } = stateContext

    console.log(walkTimes, "<----- walkTimes in WalkingSchedule")
    return (
        <View>
            <View>
                <Text style={subHeader}>Walking Schedule</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {  walkTimes != null || walkTimes != undefined ?
                    walkTimes.map((time, index) => {
                        return (
                            <View key={index}>
                                <Text>{time}</Text>
                                <View style={{ height: 24, width: 25, marginTop: -3 }}>
                                    <SmallBone />
                                </View>
                            </View>
                        )
                    }) : <Text style={{ bodySemiBold }}>No walk times set</Text>
                }
                {/* <Text style={{ bodySemiBold }}>8:00 am </Text>
                <View style={{ height: 24, width: 25, marginTop: -3 }}>
                    <SmallBone />
                </View>
                <Text style={{ bodySemiBold }}>5:00 pm</Text> */}
            </View>
        </View>
    )
}

export default WalkingSchedule