import API from "./axios"

console.log(`${import.meta.env.VITE_API_URL}/api/auth`)
export const loginUser = (data) => {
  return API.post("/login", data)
}

export const registerUser = (data) => {
  return API.post("/register", data)
}

export const getMe = () => {
  return API.get("/me")
}

export const forgotPassword = (data) => {
  return API.post("/forgot-password", data)
}