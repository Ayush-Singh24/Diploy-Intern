import StoreMap from "./StoreMap";

export default function Stores() {
  return (
    <>
      <StoreMap />
      <div className="relative h-0 pt-24 mx-auto my-32 w-full max-w-[1104px] lg:pt-36">
        <div className="absolute inset-0 px-6">
          <div className="w-full h-full flex justify-between items-center bg-no-repeat bg-[url('/talk-to-sales.svg')] bg-contain bg-clip-content rounded-2xl bg-primary-3 bg-right">
            <h4 className="text-primary-2 pl-[10.7%] text-md sm:text-xl lg:text-2xl max-w-[60%] lg:max-w-[50%] font-semibold">
              Are you a large business looking for a custom solutions?
            </h4>
            <a className="pr-[7.7%] lg:pr-[10.7%]">
              <button className="px-2 py-2 text-sm font-semibold transition-all rounded text-black-4 bg-white-1 border-black-7 lg:px-5 hover:text-primary-1 active:scale-95 md:text-md lg:text-xl">
                Talk to sales
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
