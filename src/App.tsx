import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Stores from "./components/Stores";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20 z-[10]">
        <Intro />
        <Benefits />
        <Features />
        <Stores />
        <Reviews />
      </main>
    </>
  );
}

export default App;
