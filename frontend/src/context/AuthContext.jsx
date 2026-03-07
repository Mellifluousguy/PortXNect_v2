import { createContext, useState, useEffect } from "react"
import { getMe } from "../api/auth"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token")

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const res = await getMe()
        setUser(res.data)
      } catch (err) {
        localStorage.removeItem("token")
      }

      setLoading(false)
    }

    loadUser()
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const loadUser = async () => {
    const token = localStorage.getItem("token")

    if (!token) {
      setUser(null)
      return
    }

    try {
      const res = await getMe()
      setUser(res.data);
    } catch (err) {
      localStorage.removeItem("token")
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading, loadUser }}>
      {children}
    </AuthContext.Provider>
  )
}
