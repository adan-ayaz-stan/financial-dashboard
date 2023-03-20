import { BsThreeDotsVertical } from "react-icons/bs";

export default function Balance() {
  return (
    <div className="flex flex-col gap-2 px-6 py-5 col-span-12 xl:col-span-6 lg:col-span-12 bg-[#323232] bg-opacity-70 rounded-xl">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold capitalize">
          Your balance summary
        </h1>
        <div>
          <BsThreeDotsVertical
            size={23}
            className="p-1 bg-[#222222] rounded-md cursor-pointer"
          />
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[15em] h-full w-full my-2 flex items-center justify-center border-solid border-2 rounded">
        <span className="text-[12px]">Your chart here</span>
      </div>
    </div>
  );
}
