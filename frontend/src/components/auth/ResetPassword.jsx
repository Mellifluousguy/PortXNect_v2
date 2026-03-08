import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const ResetPassword = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password/${token}`,


        { password }
      )
      setMessage("Password reset successful")
      setTimeout(() => navigate("/"), 2000)

    } catch (err) {
      console.error(err)
      setMessage("Invalid or expired token")
    }
  }

  return (
    <div className="p-10 text-base">
      <h1 className="text-2xl mb-4">Reset Password</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />

        <button type="submit" className="bg-green-500 text-white p-2">
          Reset Password
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  )
}

export default ResetPassword