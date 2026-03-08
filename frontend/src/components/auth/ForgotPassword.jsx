import { useState } from "react"
import axios from "axios"
import { forgotPassword } from "../../api/auth"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await forgotPassword(
        { email }
      )

      setMessage("Reset link generated (check console/server)")
      console.log(res.data)

    } catch (err) {
      console.error(err)
      setMessage("Something went wrong")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          Send Reset Link
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </>
  )
}

export default ForgotPassword