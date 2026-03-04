import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const LoginForm = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Login");
    console.log(email,password);
  }

  return (

    <form onSubmit={handleSubmit} className="w-full mt-10 flex flex-col gap-4">

      <div className="w-full">
        <label className="block mb-2">Email</label>

        <input
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
        />
      </div>

      <div className="w-full flex flex-col">

        <label className="block mb-2">Password</label>

        <div className="w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)] flex gap-6 ">

          <input
            type={showPassword ? "text":"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-transparent"
          />

          <span
            onClick={()=>setShowPassword(p=>!p)}
            className="cursor-pointer"
          >
            {showPassword ? <Eye/> : <EyeClosed/>}
          </span>

        </div>

      </div>

      <button
        type="submit"
        className="bg-button-color py-2 rounded-full"
      >
        Sign In
      </button>


    </form>

  );
};

export default LoginForm;