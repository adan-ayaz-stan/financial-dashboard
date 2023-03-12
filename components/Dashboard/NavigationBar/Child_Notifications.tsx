import { useEffect, useRef } from "react";
import { AiOutlineNotification } from "react-icons/ai/index";
import { BsPersonBoundingBox } from "react-icons/bs/index";

export default function Child_Notifications() {
  const notificationsContainerRef = useRef(null);
  const notificationsModalRef = useRef(null);

  useEffect(() => {
    return () => {
      document.addEventListener("click", (event) => {
        if (
          !notificationsContainerRef.current.contains(event.target) &&
          !notificationsModalRef.current.contains(event.target)
        ) {
          notificationsModalRef.current.classList.add("hidden");
        }
      });
    };
  });

  function toggleNotifications(e) {
    e.stopPropagation();
    notificationsModalRef.current.classList.remove("hidden");
  }

  return (
    <div
      ref={notificationsContainerRef}
      onClick={toggleNotifications}
      className="relative flex items-center justify-center p-2 bg-gray-800 rounded cursor-pointer"
    >
      <AiOutlineNotification size={25} />

      <div
        ref={notificationsModalRef}
        className="hidden absolute top-[110%] right-0 min-w-[15em] flex flex-col bg-gray-800 pt-3 px-1 cursor-default rounded-xl"
      >
        {/* Latest Notifications */}

        <div className="flex flex-row items-center gap-2 p-2">
          <div className="w-12 h-12 flex items-center justify-center border-solid border-2 rounded-lg bg-gray-800 hover:bg-gray-600">
            <BsPersonBoundingBox size={35} />
          </div>
          <div className="w-10/12 flex flex-col">
            <p>Rad sent you a message!</p>
            <p className="text-[12px] text-gray-400">
              26 July, 2022 - 12:06 PM
            </p>
          </div>
        </div>

        {/* See all notifications button */}
        <a className="text-sm text-blue-500 hover:text-white text-center p-2 border-t-[1.5px] border-solid border-gray-500 cursor-pointer">
          See all notifications
        </a>
      </div>
    </div>
  );
}
