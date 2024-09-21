export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 bg-white z-[1000] border-b border-b-white-4 shadow w-full">
      <div className="flex h-16 max-w-[1280px] m-auto w-full py-8 items-center justify-between">
        <div>
          <a>logo</a>
        </div>
        <nav>stuffs</nav>
        <div className="flex gap-4 font-normal">
          <a>
            <button className="px-6 py-1 transition-all border border-gray-300 rounded cursor-pointer text-black-1 min-w-20 active:border-gray-500 hover:text-primary-1 active:shadow-md">
              Login
            </button>
          </a>
          <a>
            <button className="px-6 py-1 transition-all border rounded cursor-pointer text-white-1 bg-primary-1 min-w-20 active:border-primary-2 hover:text-white active:text-white active:shadow-md hover:bg-primary-2 active:shadow-orange-1">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
