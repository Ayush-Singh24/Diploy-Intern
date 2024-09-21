import { ChevronDown, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 bg-white z-[1000] border-b border-b-white-4 shadow w-full">
      <div className="flex h-16 max-w-[1280px] m-auto w-full px-8 items-center justify-between">
        <div className="flex items-center gap-1">
          <Menu color="rgb(251, 146, 50)" size={30} className="md:hidden" />
          <img src="/logo.svg" className="hidden h-10 sm:block" />
          <img src="/logo-small.svg" className="w-10 h-10 ml-auto sm:hidden" />
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-5 *:transition-colors *:cursor-pointer">
            <li className="hover:text-primary-1">Catalog</li>
            <li className="flex items-center hover:text-primary-1">
              <span>How it works?</span>
              <ChevronDown size={20} className="mt-1" />
            </li>
            <li className="hover:text-primary-1">Pricing</li>
            <li className="hover:text-primary-1">Blog</li>
            <li className="flex items-center gap-1 hover:text-primary-1">
              <span>Services</span>
              <ChevronDown size={20} className="mt-1" />
            </li>
            <li className="flex items-center gap-1 hover:text-primary-1">
              <span>Use-cases</span>
              <ChevronDown size={20} className="mt-1" />
            </li>
            <li className="flex items-center gap-1 hover:text-primary-1">
              <span>Need-help?</span>
              <ChevronDown size={20} className="mt-1" />
            </li>
          </ul>
        </nav>
        <div></div>
        <div className="flex gap-4 font-normal">
          <a>
            <button className="px-4 py-1 transition-all border border-gray-300 rounded cursor-pointer text-black-1 min-w-20 active:border-gray-500 hover:text-primary-1 active:shadow-md">
              Login
            </button>
          </a>
          <a>
            <button className="px-4 py-1 transition-all border rounded cursor-pointer text-white-1 bg-primary-1 min-w-20 active:border-primary-2 hover:text-white active:text-white active:shadow-md hover:bg-primary-2 active:shadow-orange-1">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
