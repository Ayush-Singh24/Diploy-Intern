import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Financial from "./components/Financials";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Stores from "./components/Stores";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20 z-[10]">
        {/* Intro Section */}
        <Intro />
        {/*Benefits Section */}
        <Benefits />
        {/*Features Section */}
        <Features />
        {/*Stores and stores map Section */}
        <Stores />
        {/*User reviews Section */}
        <Reviews />
        {/*Financials section*/}
        <Financial />
      </main>
    </>
  );
}

export default App;
