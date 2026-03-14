import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import ForgotPasswordForm from "@/components/auth/ForgotPassword";
import SocialAuth from "@/components/auth/SocialAuth";

const LoginPage = () => {


  const [authMode, setAuthMode] = useState("login");
  return (
    <div className="flex sm:items-center  sm:justify-center w-screen h-screen">
      <div className="md:w-[75vw] w-full grid lg:grid-cols-7 gap-6 rounded-2xl md:min-h-auto p-2 md:p-6">

        {/* LEFT PANEL */}
        <div className="w-full hidden lg:block bg-black/20 h-full border-white/15 col-span-4 border p-6 rounded-2xl">
          <div className={`w-full bg-black/20 h-full border-white/15 ${authMode === "forgot" ? "gap-10" : ""} border p-10 flex flex-col items-start justify-between rounded-2xl`}>

            <img
              src="/logo-tagline.svg"
              alt="Portxnect Logo"
              className="h-12"
              loading="lazy"
            />

            <div className=" self-center bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)]">
              <img
                src={authMode === "login" ? `/SVG-Images/login.svg` : authMode === "signup" ? `/SVG-Images/signup.svg` : `/SVG-Images/forgot.svg`}
                alt="Login Image"
                className=" max-h-96 select-none"
                loading="lazy"
              />
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full bg-black/20 h-full border-white/15 col-span-3 border p-3 md:p-6 rounded-2xl">

          <div className="w-full text-gray-300 md:text-lg text-sm bg-black/20 bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)] border-white/15 border p-6 flex flex-col items-center rounded-2xl h-full">

            <h1 className="font-bold text-lg md:text-2xl">
              {authMode === "login" && "Welcome Back"}
              {authMode === "signup" && "Create Account"}
              {authMode === "forgot" && "Forgot Password"}
              {authMode === "reset" && "Reset Password"}
            </h1>
            {authMode === "login" && (
              <LoginForm setAuthMode={setAuthMode} />
            )}

            {authMode === "signup" && (
              <SignupForm setAuthMode={setAuthMode} />
            )}

            {authMode === "forgot" && (
              <ForgotPasswordForm setAuthMode={setAuthMode} />
            )}
            <SocialAuth />

            <span className="mt-8 text-base text-center">
              {authMode === "signup" ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() =>
                  setAuthMode(authMode === "signup" ? "login" : "signup")
                }
                className="hover:underline ml-2"
              >
                {authMode === "signup" ? "Sign In" : "Sign Up"}
              </button>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;