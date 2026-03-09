import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const VerifyEmail = () => {
  const { token } = useParams()
  const navigate = useNavigate()

  const [status, setStatus] = useState("loading")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/verify-email/${token}`
        )

        setStatus("success")
        setMessage(res.data.message)

        // redirect after 3 seconds
        setTimeout(() => navigate("/"), 3000)

      } catch (err) {
        setStatus("error")
        setMessage(
          err.response?.data?.message || "Verification failed"
        )
      }
    }

    verify()
  }, [token])

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="bg-black/20 border border-white/15 p-10 rounded-xl text-center">

        {status === "loading" && (
          <p>Verifying your email...</p>
        )}

        {status === "success" && (
          <>
            <h2 className="text-green-400 mb-2">Success</h2>
            <p>{message}</p>
            <p className="text-sm mt-2">Redirecting to login...</p>
          </>
        )}

        {status === "error" && (
          <>
            <h2 className="text-red-400 mb-2">Error</h2>
            <p>{message}</p>
          </>
        )}

      </div>
    </div>
  )
}

export default VerifyEmail