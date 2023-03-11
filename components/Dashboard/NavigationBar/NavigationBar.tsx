import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import Child_Events from "./Child_Events";
import Child_Messages from "./Child_Messages";
import Child_Notifications from "./Child_Notifications";
import Child_SearchBar from "./Child_SearchBar";
import Child_UserDropdown from "./Child_UserDropdown";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

export default function NavigationBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          navbarRef.current.classList.remove("bg-opacity-0");
          navbarRef.current.classList.add("bg-opacity-80");
        } else {
          navbarRef.current.classList.remove("bg-opacity-80");
          navbarRef.current.classList.add("bg-opacity-0");
        }
      });
    };
  });

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-10 flex justify-evenly items-center py-3 bg-black bg-opacity-0 transition-all ease-in-out duration-400"
    >
      <h1 className="text-3xl" style={poppins.style}>
        Dashboard
      </h1>
      <Child_SearchBar />
      <div className="w-1/3 flex justify-evenly gap-2">
        <Child_Notifications />
        <Child_Messages />
        <Child_Events />
        <Child_UserDropdown />
      </div>
    </div>
  );
}
