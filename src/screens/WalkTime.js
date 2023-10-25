import React, { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { View, Text} from 'react-native';

export const Dropdown= () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const timeslot = {
        label: 'Choose a Time',
        value: null,
    };

    const times = [
        {label:'12:00 am', value:'12:00 am'},
        {label:'1:00 am', value:'1:00 am'},
        {label:'2:00 am', value:'2:00 am'},
        {label:'3:00 am', value:'3:00 am'},
        {label:'4:00 am', value:'4:00 am'},
        {label:'5:00 am', value:'5:00 am'},
        {label:'6:00 am', value:'6:00 '},
        {label:'7:00 am', value:'7:00 am'},
        {label:'8:00 am', value:'8:00 am'},
        {label:'9:00 am', value:'9:00 am'},
        {label:'10:00 am', value:'10:00 am'},
        {label:'11:00 am', value:'11:00 am'},
        {label:'12:00 pm', value:'12:00 pm'},
        {label:'1:00 pm', value:'1:00 pm'},
        {label:'2:00 pm', value:'2:00 pm'},
        {label:'3:00 pm', value:'3:00 pm'},
        {label:'4:00 pm', value:'4:00 pm'},
        {label:'5:00 pm', value:'5:00 pm'},
        {label:'6:00 pm', value:'6:00 pm'},
        {label:'7:00 pm', value:'7:00 pm'},
        {label:'8:00 pm', value:'8:00 pm'},
        {label:'9:00 pm', value:'9:00 pm'},
        {label:'10:00 pm', value:'10:00 pm'},
        {label:'11:00 pm', value:'11:00 pm'},
        {label:'12:00 pm', value:'12:00 pm'},
    ]
} 