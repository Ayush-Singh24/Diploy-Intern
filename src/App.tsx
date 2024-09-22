import { PlayCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import { SpaceShipSvg } from "./components/SVGcomponents/SpaceShipSVG";
import { motion, Variants } from "framer-motion";

const tshirtAnimation: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 5, repeat: Infinity },
  },
};

const tshirtTextAnimation: Variants = {
  animate: {
    scale: [0, 0.9],
    opacity: [0, 1],
    transition: { duration: 0.5 },
  },
};

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20">
        <section className="flex flex-col mx-auto max-w-[1216px] py-14 px-6 h-screen gap-4">
          <div className="flex flex-col gap-6 max-w-80">
            <h1 className="text-3xl font-semibold pr-[27%]">
              Create and sell custom products
            </h1>
            <div className="flex flex-col font-medium text-black-6">
              <span className="flex items-center gap-2">
                <img src="/check-mark.svg" />
                <p>100% free to use</p>
              </span>
              <span className="flex items-center gap-2">
                <img src="/check-mark.svg" />
                <p>900+ High-Quality Products</p>
              </span>
              <span className="flex items-center gap-2">
                <img src="/check-mark.svg" />
                <p>Largest global print network</p>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-sm font-medium">
                <button className="px-6 py-3 primary-btn">
                  Start for free
                </button>
                <button className="flex items-center gap-1 px-6 py-3 secondary-btn">
                  <PlayCircle size={20} />
                  <p>How it works?</p>
                </button>
              </div>
              <span className="font-medium text-primary-2">
                Trusted by over 8M sellers around the world
              </span>
            </div>
          </div>
          <div className="relative flex justify-center rounded-full w-80 h-80 bg-black-6">
            <SpaceShipSvg className="z-50" />
            <motion.div
              className="absolute h-32 bottom-10"
              variants={tshirtAnimation}
              animate="animate"
            >
              <img src="/tshirt.png" className="h-32" />
              <motion.h1
                variants={tshirtTextAnimation}
                animate="animate"
                className="absolute w-16 font-semibold bottom-[40%] text-primary-1 left-[24%] text-center border-2 border-dashed border-primary-1 rounded"
              >
                Your Design
              </motion.h1>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
