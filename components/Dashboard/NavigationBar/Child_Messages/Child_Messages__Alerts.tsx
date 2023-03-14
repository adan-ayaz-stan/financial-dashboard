import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { BsSearch, BsThreeDots } from "react-icons/bs";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

const dummyData = [1, 2, 3, 4, 5, 5, 6, 78, 8];

export default function Child_Messages__Alerts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-auto"
    >
      <div className="sticky flex justify-between items-center py-4 px-6 border-b-solid border-b-[1.5px] border-b-gray-600">
        <BsThreeDots size={25} className="p-1 bg-gray-600 rounded" />

        <div className="text-center">
          <p className="">Notifications</p>
          <p className="text-[12px] text-gray-300">Show all</p>
        </div>

        <BsSearch size={25} className="p-1 bg-gray-600 rounded" />
      </div>

      <ServerStatusNotifications />
      <SocialNotifications />
    </motion.div>
  );
}

function SocialNotifications() {
  return (
    <motion.div layout layoutScroll className="relative">
      <h2
        className="sticky top-0 left-0 px-4 py-1 font-bold bg-gray-700"
        style={poppins.style}
      >
        Social
      </h2>

      {dummyData.map((ele, ind) => {
        return (
          <div
            key={ind + 1012}
            className="flex items-center gap-2 px-6 py-3 border-b-[1.5px] border-solid border-gray-600 hover:bg-gray-700"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-green-600 rounded-full">
              <span className="uppercase">RU</span>
            </div>

            <div className="flex flex-col font-semibold text-[14px]">
              <p className="truncate max-w-[250px]">Perfection Simplified</p>
              <p className="text-[12px] text-gray-500 truncate max-w-[250px]">
                Donald Row commented on The Original&apos;s post.
              </p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

function ServerStatusNotifications() {
  return (
    <motion.div layout layoutScroll className="relative overflow-auto">
      <h2
        className="sticky top-0 left-0 px-4 py-1 font-bold bg-gray-700"
        style={poppins.style}
      >
        Server Status
      </h2>

      <div className="flex items-center gap-2 px-6 py-3 border-b-[1.5px] border-solid border-gray-600 hover:bg-gray-700">
        <div className="w-10 h-10 flex items-center justify-center bg-cyan-600 rounded-full">
          <span className="uppercase">AU</span>
        </div>

        <div className="flex flex-col font-semibold text-[14px]">
          <p className="truncate max-w-[250px]">David Bester Birthday</p>
          <p className="text-[12px] text-cyan-500">Today</p>
        </div>
      </div>
    </motion.div>
  );
}
