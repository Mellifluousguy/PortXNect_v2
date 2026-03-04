// import React, { useState } from "react";
// import { Eye, EyeClosed } from "lucide-react";

// const LoginPage = () => {
//   const [showPassword, setshowPassword] = useState(false);
//   const [signUp, setsignUp] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");

//   const showPasswordHandler = (e) => {
//     e.preventDefault();
//     setshowPassword(!showPassword);
//   };

//   const signUpHandler = (e) => {
//     e.preventDefault();
//     setsignUp(!signUp);
//   };

//   const handleForm = async (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//     console.log(email, password, username);
//   };

//   return (
//     <div className="w-[85vw] grid grid-cols-7 gap-6 rounded-2xl h-[80vh] p-6">

//       {/* LEFT PANEL */}
//       <div className="w-full bg-black/20 h-full border-white/15 col-span-4 border p-6 rounded-2xl">
//         <div className="w-full bg-black/20 h-full border-white/15 border p-6 flex flex-col items-start justify-between rounded-2xl">

//           <img
//             src="/logo-tagline.svg"
//             alt="Portxnect Logo"
//             className="h-9"
//             loading="lazy"
//           />

//           <div className="h-4/6 self-center bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)]">
//             <img
//               src="/SVG-Images/svg4.svg"
//               alt="Login Image"
//               className="max-h-full select-none"
//               loading="lazy"
//             />
//           </div>

//         </div>
//       </div>

//       {/* RIGHT PANEL */}
//       <div className="w-full bg-black/20 h-full border-white/15 col-span-3 border p-6 rounded-2xl">

//         <div className="w-full text-gray-300 bg-black/20 bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)] border-white/15 border p-6 flex flex-col items-center rounded-2xl h-full">

//           <h1 className="font-bold">
//             {signUp ? "Create Account" : "Welcome Back"}
//           </h1>

//           {!signUp ? (
//             <form onSubmit={handleForm} className="w-full mt-20 flex flex-col gap-4">

//               <div className="w-full">
//                 <label htmlFor="email" className="block mb-2">Email</label>

//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
//                   autoComplete="off"
//                   id="email"
//                   className="w-full hover:bg-[rgba(64,64,64,0.9)] border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
//                 />
//               </div>

//               <div className="w-full flex flex-col">
//                 <label htmlFor="password" className="block mb-2">Password</label>

//                 <div className="border py-2 px-4 bg-[rgba(64,64,64,0.4)] hover:bg-[rgba(64,64,64,0.9)] rounded-lg flex gap-6 border-white/15">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)}
//                     autoComplete="off"
//                     className="w-full"
//                   />

//                   <span
//                     onClick={showPasswordHandler}
//                     className="cursor-pointer"
//                   >
//                     {showPassword ? <Eye /> : <EyeClosed />}
//                   </span>

//                 </div>

//                 <button
//                   type="button"
//                   className="self-end mt-2 hover:underline"
//                 >
//                   Forgot Password?
//                 </button>

//               </div>

//               <button
//                 type="submit"
//                 className="bg-button-color py-2 rounded-full text-lg hover:bg-button-hover"
//               >
//                 Sign In
//               </button>

//             </form>
//           ) : (
//             <form onSubmit={handleForm} className="w-full mt-20 flex flex-col gap-4">

//               <div className="w-full">
//                 <label htmlFor="username" className="block mb-2">UserName</label>

//                 <input
//                   type="text"
//                   value={username}
//                   onChange={(e)=>setUsername(e.target.value)}
//                   autoComplete="off"
//                   id="username"
//                   className="w-full hover:bg-[rgba(64,64,64,0.9)] border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
//                 />
//               </div>

//               <div className="w-full">
//                 <label htmlFor="email" className="block mb-2">Email</label>

//                 <input
//                   type="email"
//                   autoComplete="off"
//                   value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
//                   id="email"
//                   className="w-full hover:bg-[rgba(64,64,64,0.9)] border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
//                 />
//               </div>

//               <div className="w-full flex flex-col">
//                 <label htmlFor="password" className="block mb-2">Password</label>

//                 <div className="border py-2 px-4 bg-[rgba(64,64,64,0.4)] hover:bg-[rgba(64,64,64,0.9)] rounded-lg flex gap-6 border-white/15">

//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     autoComplete="off"
//                     value={password}
//                     onChange={(e)=>setPassword(e.target.value)}
//                     className="w-full"
//                   />

//                   <span
//                     onClick={showPasswordHandler}
//                     className="cursor-pointer"
//                   >
//                     {showPassword ? <Eye /> : <EyeClosed />}
//                   </span>

//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-button-color py-2 rounded-full text-lg hover:bg-button-hover"
//               >
//                 Sign Up
//               </button>

//             </form>
//           )}

//           {/* SOCIAL LOGIN */}
//           <div className="flex gap-4 w-full my-2 items-center">
//             <div className="h-px w-full bg-gray-300"></div>
//             <span className="w-full text-center">or sign in with</span>
//             <div className="h-px w-full bg-gray-300"></div>
//           </div>

//           <div className="flex flex-col gap-4 w-full">
//             <button className="w-full py-2 rounded-full flex items-center justify-center gap-2 text-lg border border-white/15 bg-[rgba(50,53,49,0.4)] hover:bg-[rgba(50,53,49,0.6)]">
//               Sign In with Google
//             </button>

//             <button className="w-full py-2 rounded-full flex items-center justify-center gap-2 text-lg border border-white/15 bg-[rgba(50,53,49,0.4)] hover:bg-[rgba(50,53,49,0.6)]">
//               Sign In with GitHub
//             </button>
//           </div>

//           {signUp ? (
//             <span className="my-8">
//               Already have an account?{" "}
//               <button
//                 type="button"
//                 onClick={signUpHandler}
//                 className="hover:underline"
//               >
//                 Sign In
//               </button>
//             </span>
//           ) : (
//             <span className="my-8">
//               Don't have an account?{" "}
//               <button
//                 type="button"
//                 onClick={signUpHandler}
//                 className="hover:underline"
//               >
//                 Sign Up
//               </button>
//             </span>
//           )}

//         </div>
//       </div>

//     </div>
//   );
// };

// export default LoginPage;



import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialAuth from "@/components/auth/SocialAuth";

const LoginPage = () => {

  const [signUp, setSignUp] = useState(false);

  return (
    <div className="md:w-[85vw] w-full grid lg:grid-cols-7 gap-6 rounded-2xl md:h-[80vh] p-2 md:p-6">

      {/* LEFT PANEL */}
      <div className="w-full hidden lg:block bg-black/20 h-full border-white/15 col-span-4 border p-6 rounded-2xl">
        <div className="w-full bg-black/20 h-full border-white/15 border p-6 flex flex-col items-start justify-between rounded-2xl">

          <img
            src="/logo-tagline.svg"
            alt="Portxnect Logo"
            className="h-9"
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