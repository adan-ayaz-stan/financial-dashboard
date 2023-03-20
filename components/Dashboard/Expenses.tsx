export default function Expenses() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col gap-2 px-6 py-4 bg-[#323232] bg-opacity-70 rounded-lg">
      <h2 className="text-xl font-semibold">Expenses Overview</h2>

      <div className="min-h-[200px] h-full flex items-center justify-center border-2 rounded">
        <span className="text-[12px]">Your expenses chart here</span>
      </div>
    </div>
  );
}
