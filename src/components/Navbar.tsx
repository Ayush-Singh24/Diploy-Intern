import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header className="fixed top-0 left-0 bg-white-1 bg-white z-[1000] border-b border-b-white-4 shadow w-full">
        <div className="flex h-16 max-w-[1280px] m-auto w-full px-8 items-center justify-between">
          <div className="flex items-center">
            <Menu
              size={30}
              className="transition-colors cursor-pointer text-primary-1 md:hidden hover:text-black-2"
              onClick={() => setIsMenuOpen(true)}
            />
            <img src="/logo.svg" className="hidden h-10 sm:block" />
            <img
              src="/logo-small.svg"
              className="w-10 h-10 ml-auto sm:hidden"
            />
          </div>
          <nav className="hidden h-full lg:flex lg:items-center *:h-full">
            <ul className="flex items-center gap-5">
              <li className="hover:text-primary-1">Catalog</li>
              <li className="relative h-full group hover:[&>ul]:visible">
                <div className="flex items-center h-full transition-colors cursor-pointer group-hover:text-primary-1 group">
                  <span>How it works?</span>
                  <ChevronDown
                    size={20}
                    className="mt-1 transition-transform group-hover:rotate-180"
                  />
                </div>
                <ul className="nav-sub-menu">
                  <li>How Printify works</li>
                  <li>Print on Demand</li>
                  <li>Printify Quality Promise</li>
                  <li>What to Sell?</li>
                </ul>
              </li>
              <li className="hover:text-primary-1">Pricing</li>
              <li className="hover:text-primary-1">Blog</li>
              <li className="relative h-full group hover:[&>ul]:visible">
                <div className="flex items-center h-full transition-colors cursor-pointer group-hover:text-primary-1 group">
                  <span>Services</span>
                  <ChevronDown
                    size={20}
                    className="mt-1 transition-transform group-hover:rotate-180"
                  />
                </div>
                <ul className="nav-sub-menu">
                  <li>Printify Studio</li>
                  <li>Printify Express Delivery</li>
                  <li>Transfer Products</li>
                  <li>Order in Bulk</li>
                  <li>Experts Program</li>
                </ul>
              </li>
              <li className="relative h-full group hover:[&>ul]:visible">
                <div className="flex items-center h-full transition-colors cursor-pointer group-hover:text-primary-1 group">
                  <span>Use-cases</span>
                  <ChevronDown
                    size={20}
                    className="mt-1 transition-transform group-hover:rotate-180"
                  />
                </div>
                <ul className="nav-sub-menu">
                  <li>Merch for Fans</li>
                  <li>Merch for eCommerece</li>
                  <li>Merch for Enterprises</li>
                  <li>Grow Your Store</li>
                </ul>
              </li>
              <li className="relative h-full group hover:[&>ul]:visible">
                <div className="flex items-center h-full transition-colors cursor-pointer group-hover:text-primary-1 group">
                  <span>Need help?</span>
                  <ChevronDown
                    size={20}
                    className="mt-1 transition-transform group-hover:rotate-180"
                  />
                </div>
                <ul className="nav-sub-menu">
                  <li>Help Center</li>
                  <li>Contacts</li>
                  <li>My Requests</li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4 font-normal">
            <a>
              <button className="px-4 py-1 secondary-btn">Login</button>
            </a>
            <a>
              <button className="px-4 py-1 primary-btn">Sign up</button>
            </a>
          </div>
        </div>
      </header>
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}
