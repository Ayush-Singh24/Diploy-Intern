import { ChevronDown, SidebarClose } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavProps) {
  return (
    <>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-screen h-screen bg-black-7 z-[2000] fixed backdrop-blur-lg`}
        onClick={() => setIsMenuOpen(false)}
      />
      <nav
        className={`fixed z-[3000] h-screen flex flex-col gap-3 overflow-y-auto transition-all duration-500 -left-[400px] top-0 bg-gray-100 w-64 no-scrollbar ${
          isMenuOpen ? " left-[0.0001px]" : ""
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-b-black-5">
          <span className="text-2xl font-bold">Menu</span>
          <SidebarClose
            className="transition-colors cursor-pointer text-black-4 hover:text-primary-1 active:text-primary-2"
            onClick={() => setIsMenuOpen(false)}
          />
        </header>
        <ul className="flex flex-col gap-6 p-4 text-lg font-semibold">
          <li>Catalog</li>
          <li className="flex flex-col gap-6 group ">
            <label className="flex items-center justify-between cursor-pointer peer group-hover:text-primary-1 group">
              <input
                className="hidden"
                type="checkbox"
                id="how-it-works"
              ></input>
              <span className="transition-colors">How it Works?</span>
              <ChevronDown
                className="transition-all group-has-[:checked]:rotate-180"
                id="how-it-works"
              />
            </label>
            <ul className="mobile-nav-sub-menu">
              <li>How Printify works</li>
              <li>Print on Demand</li>
              <li>Printify Quality Promise</li>
              <li>What to Sell?</li>
            </ul>
          </li>
          <li>Pricing</li>
          <li>Blog</li>
          <li className="flex flex-col gap-6 group">
            <label className="flex items-center justify-between cursor-pointer peer group-hover:text-primary-1 group">
              <input
                className="hidden"
                type="checkbox"
                id="how-it-works"
              ></input>
              <span className="transition-colors">Services</span>
              <ChevronDown
                className="transition-all group-has-[:checked]:rotate-180"
                id="how-it-works"
              />
            </label>
            <ul className="mobile-nav-sub-menu">
              <li>Printify Studio</li>
              <li>Printify Express Delivery</li>
              <li>Transfer Products</li>
              <li>Order in Bulk</li>
              <li>Experts Program</li>
            </ul>
          </li>
          <li className="flex flex-col gap-6 group">
            <label className="flex items-center justify-between cursor-pointer peer group-hover:text-primary-1 group">
              <input
                className="hidden"
                type="checkbox"
                id="how-it-works"
              ></input>
              <span className="transition-colors">Use-cases</span>
              <ChevronDown
                className="transition-all group-has-[:checked]:rotate-180"
                id="how-it-works"
              />
            </label>
            <ul className="mobile-nav-sub-menu">
              <li>Merch for Fans</li>
              <li>Merch for eCommerece</li>
              <li>Merch for Enterprises</li>
              <li>Grow Your Store</li>
            </ul>
          </li>
          <li className="flex flex-col gap-6 group">
            <label className="flex items-center justify-between cursor-pointer peer group-hover:text-primary-1 group">
              <input
                className="hidden"
                type="checkbox"
                id="how-it-works"
              ></input>
              <span className="transition-colors">Need help?</span>
              <ChevronDown
                className="transition-all group-has-[:checked]:rotate-180"
                id="how-it-works"
              />
            </label>
            <ul className="mobile-nav-sub-menu">
              <li>Help Center</li>
              <li>Contacts</li>
              <li>My Requests</li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
