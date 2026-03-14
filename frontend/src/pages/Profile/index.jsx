import React, { useState } from "react";
import { Mail, Github, Twitter, Instagram, Edit } from "lucide-react";

const socialLinks = [
  { id: 1, icon: Mail },
  { id: 2, icon: Twitter },
  { id: 3, icon: Instagram },
  { id: 4, icon: Github },
];

const SocialButton = ({ Icon }) => (
  <button className="p-3 rounded-full cursor-pointer border-[0.5px] border-white/40">
    <Icon size={25} strokeWidth={1.5} />
  </button>
);


const Index = () => {
  const [isUser, setisUser] = useState(true);
  return (
    <div className="flex flex-col h-full overflow-scroll gap-6 relative">
      {/* top banner */}
      <div className="w-full border-[0.5px] sticky top-0 border-white/20 flex justify-between rounded-2xl p-6 bg-white/5 backdrop-blur-sm">

        {/* Left Section */}
        <div className="flex min-w-1/2 items-center gap-6">

          {/* Avatar */}
          <div className="h-52 w-52 rounded-full p-4 border-[0.5px] border-white/20 backdrop-blur-sm">
            <img
              src="/assets/dummy.jpg"
              alt="profile picture"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          {/* User Info */}
          <div className="max-w-10/12 flex flex-col">
            <h2>Mellifluousguy</h2>
            <p className="text-white/50 mb-4">Mohit Gupta</p>
            <p>A single link to showcase everything.</p>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-end">
          {socialLinks.map(({ id, icon: Icon }) => (
            <SocialButton key={id} Icon={Icon} />
          ))}
          { isUser ? (

            <button className="p-3 cursor-pointer rounded-full border-[0.5px] border-white/40">
            <Edit size={25} strokeWidth={1.5} />
            </button>
           ) : ''
          }
        </div>

      </div>
      {/* Main section */}
      <div className="w-full border h-250px overflow-scroll">
          {/* Left Bio */}
          <div className="">

          </div>
      </div>

    </div>
  );
};

export default Index;