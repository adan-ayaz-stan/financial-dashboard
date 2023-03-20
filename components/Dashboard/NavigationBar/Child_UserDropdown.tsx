import { Poppins } from "next/font/google";
import { useEffect, useRef } from "react";
import {
  AiOutlineArrowDown,
  AiOutlineContacts,
  AiOutlineInbox,
  AiOutlineLogout,
  AiOutlineProfile,
} from "react-icons/ai/index";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Child_UserDropdown() {
  const dropdownRef = useRef(null);
  const dropdownParentRef = useRef(null);

  useEffect(() => {
    return () => {
      // add a click event listener to the document object
      document.addEventListener("click", function (event) {
        // check if the clicked element is inside the dropdown
        if (
          !dropdownParentRef.current.contains(event.target) &&
          !dropdownRef.current.contains(event.target)
        ) {
          // close the dropdown
          dropdownRef.current.classList.add("hidden");
        }
      });
    };
  });

  function openDropdown(e) {
    e.stopPropagation();

    // Getting all dropdowns and adding the 'hidden' class to them a.k.a closing them
    const allDropdowns = document.getElementsByClassName("dropdown");
    for (let i = 0; i < allDropdowns.length; i++) {
      const dropdown = allDropdowns.item(i);
      dropdown?.classList.add("hidden");
    }

    dropdownRef.current.classList.remove("hidden");
  }

  return (
    <div
      onClick={openDropdown}
      className="relative z-10 hidden lg:flex items-center justify-center gap-3 p-3 py-1 ml-auto bg-gray-800 rounded-lg cursor-pointer"
      style={poppins.style}
      ref={dropdownParentRef}
    >
      {/* Image */}
      <AiOutlineContacts size={25} />

      {/* Details */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-[0.9em]">Adams Longwood</p>
        <p className="text-[0.8em] text-gray-300">Admin</p>
      </div>

      {/* Dropdown Arrow */}
      <AiOutlineArrowDown size={25} className="bg-gray-600 p-1 rounded" />

      {/* Dropdown */}
      <div
        ref={dropdownRef}
        className="dropdown hidden absolute top-[110%] left-0 w-full flex flex-col gap-3 p-3 px-5 text-sm text-gray-300 bg-gray-800 rounded-md"
      >
        <div className="flex gap-3 items-center">
          <AiOutlineProfile size={25} className="text-blue-500" />
          <p>Profile</p>
        </div>

        <div className="flex gap-3 items-center">
          <AiOutlineInbox size={25} className="text-green-500" />
          <p>Inbox</p>
        </div>

        <div className="flex gap-3 items-center">
          <AiOutlineLogout size={25} className="text-red-500" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
