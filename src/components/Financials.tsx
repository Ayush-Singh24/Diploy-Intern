export default function Financial() {
  return (
    <main className="flex justify-center overflow-x-hidden">
      <section className="max-w-[552px] lg:max-w-[1216px] w-full m-14 flex">
        <div className="px-6 py-14 bg-[#203741] rounded-3xl w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-4xl text-white-1">
            <h1 className="font-bold">Make Money, Risk-Free</h1>
            <h3 className="text-xl">
              You pay for fulfillment only when you make a sale
            </h3>
          </div>
          <div className="bg-[#17262b] text-white-1 p-6 rounded-2xl font-semibold flex flex-col gap-6">
            <div className="flex justify-between text-xl">
              <h2>You sell a shirt</h2>
              <span>$ 30</span>
            </div>
            <div className="flex justify-between text-xl">
              <h2>You pay for its production</h2>
              <span>$ 12</span>
            </div>
            <div className="border border-gray-600" />
            <div className="flex justify-between text-2xl text-primary-1">
              <h2>Your profit</h2>
              <span>$ 18</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a>
              <a>
                <button className="px-4 py-1 font-semibold border-none active:scale-95 primary-btn">
                  Start selling
                </button>
              </a>
            </a>
            <p className="text-gray-300">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>
        <div className="hidden lg:block bg-[url('/images/watering-money.jpeg')] w-1/2 bg-contain bg-center rounded-r-3xl -ml-5 -z-10" />
      </section>
    </main>
  );
}
