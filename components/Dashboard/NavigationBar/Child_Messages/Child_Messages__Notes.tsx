import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

export default function Child_Messages__Notes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between items-center py-4 px-3 border-b-solid border-b-[1.5px] border-b-gray-600">
        <AiOutlinePlus size={25} className="p-1 bg-gray-600 rounded" />

        <div className="text-center">
          <p className="">Notes</p>
          <p className="text-[12px] text-gray-300">Add new notes</p>
        </div>

        <BsSearch size={25} className="p-1 bg-gray-600 rounded" />
      </div>
    </motion.div>
  );
}
