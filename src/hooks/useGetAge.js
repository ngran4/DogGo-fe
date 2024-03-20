import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

export const useGetAge = (date) => {
  const [stateContext] = useContext(StateContext)
  const { dogAge, setDogAge} = stateContext
  // const [date, setDate] = useState(new Date())





const getDateFormat = (date) => {
  const month   = dateObj.getUTCMonth() + 1; // months from 1-12
  const day     = dateObj.getUTCDate();
  const year    = dateObj.getUTCFullYear();

  return newDate = `${year}/${month}/${day}`;

}

  let currentDate = getDateFormat(new Date().getFullYear());
  let birthyear = getDateFormat(new Date(date).getFullYear());
  let currentAge = currentDate - birthyear;
  setDogAge(currentAge)
  return currentAge
  }
