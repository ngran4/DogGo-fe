import React, { useState, useContext } from "react";
import { StateContext } from "../context/StateContext";
import RNPickerSelect from 'react-native-picker-select';
import { numberOfDropdowns } from './walkinfo'
import {
    SafeAreaView,
    Text,
    TouchableOpacity, 
    StyleSheet,
} from 'react-native';


const WalkTime= () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [stateContext] = useContext(StateContext)
    const {numWalks} = stateContext
    
    const timeslot = {
        label: 'Choose a Time',
        value: null,
    };

    const options = [
        {label:'12:00 am', value:'12am'},
        {label:'1:00 am', value:'1am'},
        {label:'2:00 am', value:'2am'},
        {label:'3:00 am', value:'3am'},
        {label:'4:00 am', value:'4am'},
        {label:'5:00 am', value:'5am'},
        {label:'6:00 am', value:'6am'},
        {label:'7:00 am', value:'7am'},
        {label:'8:00 am', value:'8am'},
        {label:'9:00 am', value:'9am'},
        {label:'10:00 am', value:'10am'},
        {label:'11:00 am', value:'11am'},
        {label:'12:00 pm', value:'12pm'},
        {label:'1:00 pm', value:'1pm'},
        {label:'2:00 pm', value:'2pm'},
        {label:'3:00 pm', value:'3pm'},
        {label:'4:00 pm', value:'4pm'},
        {label:'5:00 pm', value:'5pm'},
        {label:'6:00 pm', value:'6pm'},
        {label:'7:00 pm', value:'7pm'},
        {label:'8:00 pm', value:'8pm'},
        {label:'9:00 pm', value:'9pm'},
        {label:'10:00 pm', value:'10pm'},
        {label:'11:00 pm', value:'11pm'},
        {label:'12:00 pm', value:'12pm'},
    ];


    const { dropdownCount } = numWalks;
    const dropdowns = [];
        for (let i = 0; i < dropdownCount; i++) {
            dropdowns.push(
                <RNPickerSelect
                placeholder={timeslot}
                items={options}
                onValueChange={(value) => console.log(value)}
                value={selectedValue}
            />
            )
        }

    return (
        <SafeAreaView>
            <Text>What times of the day would you ideally walk Fido?</Text>
            {dropdowns}
            {/* other content of PageB */}
            {selectedValue && <Text> Selected: {selectedValue}</Text>}

            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Start Walking!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Do Later</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )};

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 30,
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        margin: 10,
        padding:10,
        borderRadius:20,
        borderWidth:1,
        width:310,
        height:50,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 25,
    },
    buttonText: {
        fontSize: 18,
    },
})

export default WalkTime