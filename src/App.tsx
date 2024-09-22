import { PlayCircle } from "lucide-react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20">
        <section className="flex flex-col mx-auto max-w-[1216px] py-14 px-6 h-screen justify-between">
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
          <div>h</div>
        </section>
      </main>
    </>
  );
}

export default App;
