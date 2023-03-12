import { Poppins } from "next/font/google";
import { AiOutlineSearch } from "react-icons/ai/index";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Child_SearchBar() {
  return (
    <div className="relative z-10 flex items-center gap-2 p-2 px-4 bg-gray-800 rounded-lg">
      <input
        placeholder="Search.."
        className="p-2 py-1 border-none outline-none text-white text-sm rounded bg-transparent"
        style={poppins.style}
      />
      <AiOutlineSearch size={25} />
    </div>
  );
}
