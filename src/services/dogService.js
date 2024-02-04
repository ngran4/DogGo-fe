import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs`
const token = tokenService.getToken()

const createDog = async (dogData) => {
  // console.log(dogData, "<----- dogData")
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        body: JSON.stringify(dogData),
      },
    });
    console.log(token, "<----- token")
    const json = await res.json();
    console.log(res, "<----- res")
    console.log(json, "<----- json")
    if (json.err) {
      throw new Error(json.err);
    } else {
      return json
    }
  } catch (error) {
    throw error;
  }
};

const editDog = async (dogData) => {
  try {
    const res = await fetch(`${BASE_URL}/${dogId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dogData),
    });
    return res.json();
  } catch (error) {
    throw new Error(json.error);
  }
}

export {
  createDog,
  editDog
}

