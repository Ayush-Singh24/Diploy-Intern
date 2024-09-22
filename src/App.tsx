import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20 z-[10]">
        <Intro />
        <Benefits />
        <Features />
      </main>
    </>
  );
}

export default App;
