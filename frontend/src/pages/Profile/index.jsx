import React, { useState } from "react";
import { Mail, Github, Twitter, Instagram, Edit, MapPin, Link, User, Briefcase, Building, Calendar } from "lucide-react";
import { Card, Button } from "@/components";
import { useEffect } from "react";
import { useFun } from "../../context/FunContext";

const socialLinks = [
  { id: 1, icon: Mail },
  { id: 2, icon: Twitter },
  { id: 3, icon: Instagram },
  { id: 4, icon: Github },
];

const Index = () => {
  const [isUser, setIsUser] = useState(true);
  const { scrollRef } = useFun()
  console.log(scrollRef)



  return (
    <div className="flex flex-col gap-6">


      {/* Main Section */}
      <div className="flex gap-6">


        {/* Left Bio */}
        <Card className="w-[35%] flex flex-col gap-3">

          {/* Followers */}
          <Card className="grid grid-cols-3 gap-2">
            <Connect text={'following'} number={345} />
            <Connect text={'Followers'} number={345} />
            <Connect text={'Posts'} number={345} />
          </Card>

          {/* About Me */}
          <div className="flex flex-col gap-3">

            <div className="w-full border-white/20 bg-white/5 p-2 px-4 rounded-xl flex gap-6 justify-between items-center border-[0.5px]">
              <div className="flex gap-2">
                <User strokeWidth={1.5} size={25} />
                <h3>About Me</h3>
              </div>

              <Button className="p-2" variant="icon">
                <Edit size={18} strokeWidth={1.5} />
              </Button>
            </div>

            <Card variant="compact" className="px-6 py-4 text-sm flex flex-col gap-3">
              <h3 className="text-[#A78BFA]">Frontend Developer</h3>
              <p>Mohit, you’re a builder at heart — the kind of person who doesn’t wait for the perfect moment, you just start creating. You’re a frontend-focused maker with a sharp eye for clean UI, especially in React, Next.js, Tailwind, and TypeScript, and you’re pouring all of that into PortXNect, a platform you’re literally crafting from scratch.</p>
              <div className="flex flex-col gap-2">
                <IconWrapper Icon={MapPin} color="#EC4899" text='Mumbai, Maharashtra, India' />
                <IconWrapper Icon={Link} color="#488CEC" text='mellifluousguy.vercel.app' Link />

              </div>
            </Card>
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-3">

            <div className="w-full border-white/20 bg-white/5 p-2 px-4 rounded-xl flex gap-6 justify-between items-center border-[0.5px]">
              <div className="flex gap-2">
                <Briefcase strokeWidth={1.5} size={25} />
                <h3>Experience</h3>
              </div>

              <Button className="p-2" variant="icon">
                <Edit size={18} strokeWidth={1.5} />
              </Button>
            </div>

            <Card variant="compact" className="px-6 text-sm flex flex-col gap-5">
              <div className="flex flex-col text-sm gap-2">

              <h4 className="text-[#A78BFA]">Web Developer</h4>

              <IconWrapper Icon={Building} color={"#FACC15"} text={"Trebled"} />
              <IconWrapper Icon={Calendar} color={"#3B82F6"} text={"Nov 2025 - October 2025 -1 Month"} />
              <IconWrapper Icon={MapPin} color={"#EC4899"} text={"Mumbai, India"} />
              </div>
              <div className="flex flex-col text-sm gap-2">

              <h4 className="text-[#A78BFA]">Web Developer</h4>

              <IconWrapper Icon={Building} color={"#FACC15"} text={"Trebled"} />
              <IconWrapper Icon={Calendar} color={"#3B82F6"} text={"Nov 2025 - October 2025 -1 Month"} />
              <IconWrapper Icon={MapPin} color={"#EC4899"} text={"Mumbai, India"} />
              </div>
              <div className="flex flex-col text-sm gap-2">

              <h4 className="text-[#A78BFA]">Web Developer</h4>

              <IconWrapper Icon={Building} color={"#FACC15"} text={"Trebled"} />
              <IconWrapper Icon={Calendar} color={"#3B82F6"} text={"Nov 2025 - October 2025 -1 Month"} />
              <IconWrapper Icon={MapPin} color={"#EC4899"} text={"Mumbai, India"} />
              </div>

            </Card>
          </div>

        </Card>



        {/* Right Container */}
        <div className="w-[65%] flex flex-col gap-6">
          <div className="top-0 w-full sticky  bg-black z-10">

            <Card className="w-full">

              <Card className="w-full  flex items-center gap-6 bg-white/5">

                <div className="h-24 w-24 min-h-24 min-w-24 rounded-full p-2 border-[0.5px] border-white/20 backdrop-blur-sm">
                  <img
                    src="/assets/dummy.jpg"
                    alt="profile picture"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                <div className=" flex flex-col">
                  <h3>Mellifluousguy</h3>
                  <p className="text-white/50 text-sm mb-4">Mohit Gupta</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur </p>
                </div>



              </Card>
            </Card>
          </div>
          <Card>

          </Card>
        </div>
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

const Connect = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <h3>{number}</h3>
      <p className="text-[#A78BFA]">{text}</p>
    </div>
  )
}

export default Index;