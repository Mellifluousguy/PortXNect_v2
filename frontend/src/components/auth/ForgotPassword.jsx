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
      <form onSubmit={handleSubmit} className="flex h-full  justify-center  w-full flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
        />

        <button type="submit" className="bg-button-color py-2 rounded-full">
          Send Reset Link
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </>
  )
}

export default ForgotPassword