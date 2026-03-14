import React, { useState } from "react";
import { Mail, Github, Twitter, Instagram, Edit, MapPin, Link } from "lucide-react";
import { Card, Button } from "@/components";

const socialLinks = [
  { id: 1, icon: Mail },
  { id: 2, icon: Twitter },
  { id: 3, icon: Instagram },
  { id: 4, icon: Github },
];

const Index = () => {
  const [isUser, setIsUser] = useState(true);


  return (
    <div className="flex flex-col h-full  relative">

      {/* Top Banner */}
      <div className="pb-6 top-0 sticky bg-black z-10">

        <Card className="w-full  flex justify-between flex-wrap gap-6 bg-white/5">

          <div className="flex min-w-1/2 flex-wrap items-center gap-6">

            <div className="h-52 w-52 min-h-52 min-w-52 rounded-full p-4 border-[0.5px] border-white/20 backdrop-blur-sm">
              <img
                src="/assets/dummy.jpg"
                alt="profile picture"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="max-w-10/12 flex flex-col">
              <h2>Mellifluousguy</h2>
              <p className="text-white/50 mb-4">Mohit Gupta</p>
              <p>A single link to showcase everything.</p>
            </div>

          </div>

          <div className="flex gap-4 items-end">
            {socialLinks.map(({ id, icon: Icon }) => (
              <Button key={id} variant="normal">
                <Icon size={25} strokeWidth={1.5} />
              </Button>
            ))}

            {isUser && (
              <Button variant="normal">
                <Edit size={25} strokeWidth={1.5} />
              </Button>
            )}
          </div>

        </Card>
      </div>
      {/* Main Section */}
      <div className="w-full flex gap-6">


        {/* Left Bio */}
        <Card className="w-[35%] flex flex-col gap-3 h-full ">


          <div className="flex flex-col gap-3">

            <div className="w-full border-white/20 bg-white/5 p-2 px-6 rounded-xl flex gap-6 justify-between items-center border-[0.5px]">
              <h3>About Me</h3>

              <Button className="p-2" variant="icon">
                <Edit size={18} strokeWidth={1.5} />
              </Button>
            </div>

            <Card variant="compact" className="p-6 text-sm flex flex-col gap-3">
              <h3 className="text-[#A78BFA]">Frontend Developer</h3>
              <p>Mohit, you’re a builder at heart — the kind of person who doesn’t wait for the perfect moment, you just start creating. You’re a frontend-focused maker with a sharp eye for clean UI, especially in React, Next.js, Tailwind, and TypeScript, and you’re pouring all of that into PortXNect, a platform you’re literally crafting from scratch.</p>
              <div className="flex flex-col gap-2">
                <IconWrapper Icon={MapPin} color="#EC4899" text='Mumbai, Maharashtra, India' />
                <IconWrapper Icon={Link} color="#488CEC" text='mellifluousguy.vercel.app' Link />

              </div>
            </Card>
            <Card variant="compact" className="p-6 text-sm flex flex-col gap-3">
              <h3 className="text-[#A78BFA]">Frontend Developer</h3>
              <p>Mohit, you’re a builder at heart — the kind of person who doesn’t wait for the perfect moment, you just start creating. You’re a frontend-focused maker with a sharp eye for clean UI, especially in React, Next.js, Tailwind, and TypeScript, and you’re pouring all of that into PortXNect, a platform you’re literally crafting from scratch.</p>
              <div className="flex flex-col gap-2">
                <IconWrapper Icon={MapPin} color="#EC4899" text='Mumbai, Maharashtra, India' />
                <IconWrapper Icon={Link} color="#488CEC" text='mellifluousguy.vercel.app' Link />

              </div>
            </Card>
          </div>
        </Card>



      </div>

    </div>
  );
};

const IconWrapper = ({ Icon, color, text, Link }) => {

  return (
    <>
      {
        Link ?
          <a href={`https://${text}`} target="_blank" className="flex gap-3">

            <Icon size={20} strokeWidth={1.75} color={color} />
            <span>{text}</span>
          </a> :
          <div className="flex gap-3">
            <Icon size={20} strokeWidth={1.75} color={color} />
            <span>{text}</span>
          </div>
      }
    </>
  )
}

export default Index;