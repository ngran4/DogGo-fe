import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { StateContext } from '../context/StateContext'
import SmallBone from '../../assets/images/SmallBone'

const WalkingSchedule = () => {
    const [stateContext] = useContext(StateContext)
    const { container, subHeader, bodySemiBold } = stateContext

    return (
        <View>
            <View>
                <Text style={subHeader}>Walking Schedule</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Text style={{ bodySemiBold }}>8:00 am </Text>
                <View style={{ height: 24, width: 25, marginTop: -3 }}>
                    <SmallBone />
                </View>
                <Text style={{ bodySemiBold }}>5:00 pm</Text>
            </View>
        </View>
    )
}

export default WalkingSchedule