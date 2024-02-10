// import React, { useEffect } from 'react'
import { StateContext } from '../context/StateContext'

const useGetAge = (date) => {
  const [stateContext] = useContext(StateContext)
  const { dogAge, setDogAge } = stateContext
  // const [date, setDate] = useState(new Date())

  let currentDate = new Date().getFullYear();
  let birthyear = new Date(date).getFullYear();
  currentAge = currentDate - birthyear;
  setDogAge(currentAge)
  // return currentAge
  }



export default useGetAge