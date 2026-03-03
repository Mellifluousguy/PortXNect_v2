import React, { useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

const loginpage = () => {

  const [showPassword, setshowPassword] = useState(false);

  const showPasswordHandler = (e) => {
    e.preventDefault();
    setshowPassword(!showPassword);
  }

  return (
    <div className='w-[85vw]   grid grid-cols-7 gap-6  rounded-2xl h-[80vh] p-6 '>
      <div className='w-full bg-black/20 h-full border-white/15 col-span-4 border p-6 rounded-2xl'>
        <div className='w-full bg-black/20 h-full border-white/15  border p-6 flex flex-col items-start justify-between rounded-2xl'>
          <img src="/logo-tagline.svg" alt="Portxnect Logo" className='h-9' loading='lazy' />
          <div className="h-4/6 self-center bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)]">

            <img
              src="/SVG-Images/svg4.svg"
              alt="Login Image"
              className="max-h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className='w-full bg-black/20 h-full border-white/15 col-span-3 border p-6 rounded-2xl'>
        <div className='w-full text-gray-300 bg-black/20 bg-[radial-gradient(circle_at_center,rgba(0,255,189,0.15)_0%,transparent_50%)] border-white/15 border p-6 flex flex-col items-center rounded-2xl h-full'>

          <h1 className='font-bold'>Access Control</h1>
          <form className='w-full mt-20 flex flex-col gap-4'>
          <div className='w-full'>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type='text' autoComplete='off' id='email' className='w-full border border-white/15 rounded-lg py-2 px-4 bg-[rgba(64,64,64,0.4)]' />
          </div>
          <div className='w-full'>
            <label htmlFor="password" className="block mb-2">Password</label>

            <div className='border py-2 px-4 bg-[rgba(64,64,64,0.4)] rounded-lg flex gap-6 border-white/15'>
            <input type={showPassword ? "text" : "password"} id='password' autoComplete='off' className='w-full' />
              <button onClick={showPasswordHandler}>{showPassword ? <Eye /> : <EyeClosed />} </button>
            </div>
          </div>

          </form>
        </div>
      </div>

    </div>

  )
}

export default loginpage