import { jwt_decode } from 'jwt-decode'
import AsyncStorage from '@react-native-async-storage/async-storage';

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token)
  } catch (error) {
    console.log(error)
  }
}

const getToken = async () => {
  try {
    let value = await AsyncStorage.getItem('token')
    console.log(value, '<----- token in getToken')
    if (!value) return null
    const payload = jwt_decode(value)

    console.log(payload, '<----- payload in getToken')
    if (payload.exp < Date.now() / 1000) {
      await AsyncStorage.removeItem('token')
      console.log("token exp");
      return null
    }

    return value
  } catch (error) {
    console.log(error)
  }
}

const getUserFromToken = async () => {
  try {
    const token = await getToken()
    return token ? jwt_decode(token).user : null
  } catch (error) {
    console.log(error)
  }
}

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (error) {
    console.log(error)
  }
}

export { setToken, getToken, getUserFromToken, removeToken }

// function setToken(token) {
//   localStorage.setItem('token', token)
// }

// function getToken() {
//   let token = localStorage.getItem('token')
//   if (token) {
//     const payload = jwt_decode(token)
//     if (payload.exp < Date.now() / 1000) {
//       localStorage.removeItem('token')
//       token = null
//     }
//   } else {
//     localStorage.removeItem('token')
//   }
//   return token
// }

// function getUserFromToken() {
//   const token = getToken()
//   return token ? jwt_decode(token).user : null
// }

// function removeToken() {
//   localStorage.removeItem('token')
// }