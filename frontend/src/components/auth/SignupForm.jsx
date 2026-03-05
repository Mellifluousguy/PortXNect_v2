import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { registerUser } from "@/api/auth";

const SignupForm = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await registerUser({
                username,
                email,
                password
            })
            console.log(res.data);
        }
        catch(error){
            console.error(error);
        }
    }

    return (

        <form onSubmit={handleSubmit} className="w-full mt-10 flex flex-col gap-4">

            <div className="w-full">
                <label htmlFor="username" className="block mb-2">UserName</label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                    id="username"
                    className="w-full hover:bg-[rgba(64,64,64,0.9)] border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
                />
            </div>
            <div className="w-full">
                <label htmlFor="email" className="block mb-2">Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    id="email"
                    className="w-full hover:bg-[rgba(64,64,64,0.9)] border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]"
                />
            </div>

            <div className="w-full flex flex-col">
                <label htmlFor="password" className="block mb-2">Password</label>

                <div className="border py-2 px-4 bg-[rgba(64,64,64,0.4)] hover:bg-[rgba(64,64,64,0.9)] rounded-lg flex gap-6 border-white/15">

                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        className="w-full"
                    />

                    <span
                        onClick={() => setShowPassword(p => !p)}
                        className="cursor-pointer"
                    >
                        {showPassword ? <Eye /> : <EyeClosed />}
                    </span>

                </div>

                <button
                    type="button"
                    className="self-end mt-2 hover:underline"
                >
                    Forgot Password?
                </button>

            </div>

            <button
                type="submit"
                className="bg-button-color py-2 rounded-full  hover:bg-button-hover"
            >
                Sign In
            </button>


            
        </form>


    );
};

export default SignupForm;