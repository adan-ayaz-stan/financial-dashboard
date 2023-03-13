import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai/index";
import Child_Messages__Alerts from "./Child_Messages/Child_Messages__Alerts";
import Child_Messages__Chat from "./Child_Messages/Child_Messages__Chat";
import Child_Messages__Notes from "./Child_Messages/Child_Messages__Notes";

export default function Child_Messages() {
  const [openMessageSidebar, setOpenMessageSidebar] = useState(false);

  const [focusedFeature, setFocusedFeature] = useState("notes");

  function openMessageSidebox() {
    setOpenMessageSidebar(true);
  }

  function closeMessageSidebox() {
    setOpenMessageSidebar(false);
  }

  function setFocusedFeatureFunc(feature: string) {
    setFocusedFeature(feature);
  }

  return (
    <div className="relative flex items-center justify-center p-2 bg-gray-800 rounded cursor-pointer">
      <AiOutlineMail onClick={openMessageSidebox} size={25} />

      <AnimatePresence>
        {openMessageSidebar && (
          <motion.div
            onClick={closeMessageSidebox}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.4,
                type: "keyframes",
                ease: "easeIn",
              },
            }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-50 transition-all duration-400"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{
                x: "0%",
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                },
              }}
              exit={{ x: "100%" }}
              className="absolute top-0 right-0 min-w-[400px] h-screen bg-gray-700"
            >
              {/* Tab Switchers */}
              <ul className="w-full flex justify-evenly pt-8">
                {/* Notes */}
                <li
                  onClick={() => {
                    setFocusedFeatureFunc("notes");
                  }}
                  style={
                    focusedFeature == "notes"
                      ? { borderBottom: "1.5px solid white" }
                      : {}
                  }
                  className="border-b-[1.5px] border-transparent hover:border-white transition-all duration-400"
                >
                  Notes
                </li>
                {/* Alerts */}
                <li
                  onClick={() => {
                    setFocusedFeatureFunc("alerts");
                  }}
                  style={
                    focusedFeature == "alerts"
                      ? { borderBottom: "1.5px solid white" }
                      : {}
                  }
                  className="border-b-[1.5px] border-transparent hover:border-white transition-all duration-400"
                >
                  Alerts
                </li>
                {/* Chat */}
                <li
                  onClick={() => {
                    setFocusedFeatureFunc("chat");
                  }}
                  style={
                    focusedFeature == "chat"
                      ? { borderBottom: "1.5px solid white" }
                      : {}
                  }
                  className="border-b-[1.5px] border-transparent hover:border-white transition-all duration-400"
                >
                  Chat
                </li>
              </ul>
              {/* Display Box */}
              <div className="min-h-[90%] rounded-xl bg-gray-900">
                <AnimatePresence>
                  {focusedFeature == "notes" && <Child_Messages__Notes />}
                  {focusedFeature == "alerts" && <Child_Messages__Alerts />}
                  {focusedFeature == "chat" && <Child_Messages__Chat />}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
