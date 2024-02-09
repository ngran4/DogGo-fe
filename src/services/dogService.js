import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dogs`;

const getDog = async () => {
  try {
    const token = await tokenService.getToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");

    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: headers,
    })
    const json = await response.json();
    console.log(json, "<----- json in getDog");
    return json;
  } catch (error) {
    throw error;
  }
}

const getCurrentDog = async () => {
  try {
    const token = await tokenService.getToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");

    const response = await fetch(`${BASE_URL}/${dog._id}`, {
      method: "GET",
      headers: headers,
    })
    const json = await response.json();
    console.log(json, "<----- json");

  } catch (error) {
    throw error;
  }
}

const createDog = async (dogData) => {
  try {
    const token = await tokenService.getToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(dogData),
    });

    const json = await res.json();

    if (json.err) {
      throw new Error(json.err);
    } else {
      return json;
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
};

const addWalkCounts = async (walkData, dogId) => {
  try {
    const token = await tokenService.getToken();
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
    headers.append("Content-Type", "application/json");

    const res = await fetch(`${BASE_URL}/${dogId}/walk`, {
      method: "POST",
      headers: headers,  
      body: JSON.stringify(walkData),
    });
    const json = await res.json();    
    if (json.err) {
      throw new Error(json.err);
    } else {
      return json;
    }
  } catch (error) {
    throw error;
  }
}

export { 
  getDog, 
  getCurrentDog,
  createDog, 
  editDog, 
  addWalkCounts 
};
