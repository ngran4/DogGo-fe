import React, { useEffect } from 'react'
import { StateContext } from '../context/StateContext'

export const useGetAge = () => {
  const [stateContext] = useContext(StateContext)
  const { birthday, setBirthday, age, setAge } = stateContext
  const [date, setDate] = useState(new Date())
  const getAge = () => {
    console.log(date)
    console.log(birthday)
  }
}
