import { useEffect, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { loginUser, getMe } from "@/api/auth";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import API from "../../api/axios";


const LoginForm = ({ setAuthMode }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showResend, setShowResend] = useState(false)
  const { loading, loadUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [loading, user])

  const handleResend = async () => {
  try {
    const res = await API.post("/resend-verification", { email })

    alert("Verification link sent again.")
    console.log(res.data)

  } catch (err) {
    alert(err.response?.data?.message || "Error sending verification")
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({
        email,
        password
      })

      localStorage.setItem("token", res.data.token);
      // making many things like storing the token in local storage and setting user data
      await loadUser();
      console.log(res.data.message);
      // navigating to the dasboard after login
      navigate('/dashboard')

    } catch (error) {
      console.log(error);

      const message = error.response?.data?.message || "";
      if (message.includes("Please verify your email first")) {
        setShowResend(true);
      }
      alert(message || "Something went wrong");
    }
  }

  return (

    <form onSubmit={handleSubmit} className="w-full text-base mt-10 flex flex-col gap-4">

      <div className="w-full">
        <label className="block mb-2">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
        />
      </div>

      <div className="w-full flex flex-col">

        <label className="block mb-2">Password</label>

        <div className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)] flex gap-6 ">

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent"
          />

          <span
            onClick={() => setShowPassword(p => !p)}
            className="cursor-pointer"
          >
            {showPassword ? <Eye /> : <EyeClosed />}
          </span>

        </div>

      </div>

      <button
        type="button"
        onClick={() => setAuthMode("forgot")}
        className="self-end mt-2 hover:underline"
      >
        Forgot Password?
      </button>

      <button
        type="submit"
        className="bg-button-color py-2 rounded-full"
      >
        Sign In
      </button>

      {showResend && (
        <button
          type="button"
          onClick={handleResend}
          className="text-sm text-button-color hover:underline mt-2"
        >
          Resend Verification Email
        </button>
      )}


    </form>

  );
};

export default LoginForm;