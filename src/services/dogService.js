import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs`

const createDog = async (dogData) => {
  // console.log(dogData, "<----- dogData")
  const token = tokenService.getToken()
  // .then((value) => {return value});
  console.log(token, "<----- token in dogService")
  console.log(token._j, "<----- token")

  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    })
    // console.log(tokenService.getToken(), "<----- token")

    //  ------------- test ------------- //
    // ${tokenService.getToken()}
    // console.log(token, "<----- token")
    // console.log(tokenService.getToken(), "<----- token")
    // console.log(typeof tokenService.getToken(), "<----- type")
    //  ------------- test ------------- //

    const response = await res.json()
    console.log(res, '<----- res')
    console.log(response, '<----- response')
    if (response.err) {
      throw new Error(response.err)
    } else {
      return response
    }
  } catch (error) {
    throw error
  }
}

const editDog = async (dogData) => {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dogData)
    })
    return res.json()
  } catch (error) {
    throw new Error(json.error)
  }
}

export {
  createDog,
  editDog
}
