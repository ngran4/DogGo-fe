import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

export const useGetAge = (date) => {
  const [stateContext] = useContext(StateContext)
  const [age, setAge] = useState(0)
  // const [date, setDate] = useState(new Date())

  const birthdayDate = new Date(birthday).toISOString().slice(0, 10)

  const useGetAge = (birthdayDate) => {
    {
      let today = new Date();
      let birthDate = new Date(birthdayDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setAge(age)
    }
  }
}