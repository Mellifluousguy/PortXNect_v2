import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialAuth from "@/components/auth/SocialAuth";

const LoginPage = () => {

  const [signUp, setSignUp] = useState(false);

  return (
    <div className="md:w-[85vw] w-full grid lg:grid-cols-7 gap-6 rounded-2xl md:min-h-[80vh] p-2 md:p-6">

      {/* LEFT PANEL */}
      <div className="w-full hidden lg:block bg-black/20 h-full border-white/15 col-span-4 border p-6 rounded-2xl">
        <div className="w-full bg-black/20 h-full border-white/15 border p-10 flex flex-col items-start justify-between rounded-2xl">

          <img
            src="/logo-tagline.svg"
            alt="Portxnect Logo"
            className="h-12"
            loading="lazy"
          />

          <div className="h-4/6 self-center bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)]">
            <img
              src="/SVG-Images/svg4.svg"
              alt="Login Image"
              className="max-h-full select-none"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full bg-black/20 h-full border-white/15 col-span-3 border p-3 md:p-6 rounded-2xl">

        <div className="w-full text-gray-300 md:text-lg text-sm bg-black/20 bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)] border-white/15 border p-6 flex flex-col items-center rounded-2xl h-full">

          <h1 className="font-bold text-lg md:text-2xl">
            {signUp ? "Create Account" : "Welcome Back"}
          </h1>

          {signUp ? (
            <SignupForm  />
          ) : (
            <LoginForm />
          )}

          <SocialAuth />
          <span className="mt-8 text-center">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={()=>setSignUp(p=>!p)}
                    className="hover:underline"
                >
                    Sign In
                </button>
            </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;