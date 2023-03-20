import { AnimatePresence, motion } from "framer-motion";
import { Pivot as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Sidebar() {
  const [isSidemenuOpen, setSidemenuOpen] = useState(false);

  return (
    <div>
      <Hamburger
        size={24}
        color={"#fff"}
        toggle={setSidemenuOpen}
        toggled={isSidemenuOpen}
      />

      <motion.div
        className="fixed top-0 left-0 h-screen w-screen px-6 py-4 bg-[#323232] z-30"
        animate={{
          clipPath: isSidemenuOpen
            ? ["circle(0.0% at 0 0)", "circle(141.4% at 0 0)"]
            : "circle(0.0% at 0 0)",
          transition: {
            duration: 0.4,
            type: "keyframes",
            ease: "easeOut",
          },
        }}
      >
        <AnimatePresence>
          {isSidemenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <Hamburger
                size={24}
                toggle={setSidemenuOpen}
                toggled={isSidemenuOpen}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <ul className="min-h-[80vh] flex flex-col justify-center items-center gap-2 text-2xl uppercase">
          <li className="px-6 text-blue-600 font-semibold">Profile</li>
          <li className="px-6 text-red-600 font-semibold">Sign out</li>
        </ul>
      </motion.div>
    </div>
  );
}
