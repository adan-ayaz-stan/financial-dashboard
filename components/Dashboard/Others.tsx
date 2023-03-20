import { AiOutlinePieChart } from "react-icons/ai";

export default function Others() {
  return (
    <div className="col-span-12 xl:col-span-3 lg:col-span-12 p-3 px-6 bg-[#323232] bg-opacity-70 rounded-xl">
      <h2 className="font-bold">Others</h2>
      <p className="text-gray-400 text-sm">Lorem Ipsum dolor sit amet</p>

      <div className="flex xl:flex-col flex-row justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-6 mt-6">
        {[1, 2, 3].map((ele, ind) => {
          return (
            <div
              key={"others" + ind}
              className="w-full md:w-5/12 lg:w-full grid grid-cols-3 auto-rows-auto items-center my-1 p-3 py-4 bg-[#323232] rounded-lg"
            >
              <div className="col-span-1 flex items-center justify-center">
                <AiOutlinePieChart size={55} />
              </div>

              <div className="col-span-2">
                <h2 className="text-xl font-bold">Investments</h2>
                <p className="text-sm text-gray-400">$20,241</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
