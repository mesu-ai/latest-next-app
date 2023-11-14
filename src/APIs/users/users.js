import { api } from "../config/axiosInstance";


export const userRegister = async (data) => {
  try {

    const res= await api.post('/register', data);

    if (res.ok) {
      console.log("User created");
    } else {
      throw new Error("Failed to create user");
    }

    return res.json();

  } catch (error) {

    console.log("Error creating user: ", error);

  }

}