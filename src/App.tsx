import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-full mx-auto mt-20 z-[10]">
        <Intro />
      </main>
    </>
  );
}

export default App;
