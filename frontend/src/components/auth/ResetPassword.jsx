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
    <div className="flex sm:items-center  sm:justify-center w-screen h-screen">
      <div className="md:w-[75vw] w-full flex justify-center items-center gap-6 rounded-2xl md:min-h-[80vh] p-2 md:p-6">

        <div className="lg:min-w-2/5 max-w-80  w-full bg-black/20 md:h-full border-white/15 col-span-4 border p-4 rounded-2xl">
          <div className="w-full bg-black/20 h-full border-white/15 border p-6 md:p-10 flex flex-col items-center justify-center rounded-2xl">
            <h1 className="text-2xl mb-10">Reset Password</h1>

            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
              />

              <button type="submit" className="bg-button-color py-2 rounded-full">
                Reset Password
              </button>
            </form>

            {message && <p className="mt-4">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword