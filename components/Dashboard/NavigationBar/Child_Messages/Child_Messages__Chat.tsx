import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch, BsThreeDots } from "react-icons/bs";

export default function Child_Messages__Chat() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center py-4 px-3 border-b-solid border-b-[1.5px] border-b-gray-600">
        <AiOutlinePlus size={25} className="p-1 bg-gray-600 rounded" />

        <div className="text-center">
          <p className="">Chat</p>
          <p className="text-[12px] text-gray-300">Latest</p>
        </div>

        <BsThreeDots size={25} className="p-1 bg-gray-600 rounded" />
      </div>
    </motion.div>
  );
}
