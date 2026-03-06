import API from "./axios"

export const loginUser = (data) => {
  return API.post("/login", data)
}

export const registerUser = (data) => {
  return API.post("/register", data)
}

export const getMe = () => {
  return API.get("/me")
}