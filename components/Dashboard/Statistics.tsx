import { BsGraphUpArrow } from "react-icons/bs";

export default function Statistics() {
  return (
    <div className="col-span-12 xl:col-span-3 lg:col-span-12 flex xl:flex-col lg:flex-row lg:justify-between justify-center flex-wrap lg:flex-nowrap gap-6">
      {/* Single Component */}
      {[1, 2, 3].map((ele, ind) => {
        return (
          <div
            key={"statistics" + ind}
            className="md:w-5/12 w-full lg:w-full flex justify-between items-center gap-2 p-4 px-6 bg-gradient-to-r from-[#323232] to-cyan-700 bg-opacity-70 rounded-xl"
          >
            <div>
              <h2 className="text-2xl font-bold">$43,239</h2>
              <p>Expense</p>
              <span className="text-[14px] text-gray-400">
                0.5% more than last month
              </span>
            </div>

            <div className="flex items-center justify-center text-cyan-500">
              <BsGraphUpArrow size={50} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
