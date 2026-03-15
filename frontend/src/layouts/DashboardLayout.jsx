import Sidebar from "@/components/common/SideBar.jsx";
import { Outlet } from "react-router-dom";
import { Card } from "@/components";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const location = window.location.pathname;
console.log(location);

  return (
    <div className="flex p-6 max-h-lvh h-lvh">

      <Card className="flex p-6 bg-black/80 w-full h-full">

        <div className="relative h-full min-w-28">
          <div
            className={`${location === "/"
                ? "static flex items-center justify-center p-0"
                : "absolute"
              } z-10 bg-black/60 backdrop-blur-sm h-full border-[0.5px] border-white/20 rounded-2xl`}
          >
            <Sidebar />
          </div>
        </div>

          <Card className={`w-full h-full overflow-y-auto`}>
          <Outlet />
        </Card>

      </Card>

    </div>
  );
};

export default DashboardLayout;