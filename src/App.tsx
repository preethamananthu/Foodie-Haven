import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Popular from "./components/Popular.tsx";

function App() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('')] ">
      <Header />
      <Hero />
      <Popular />
    </div>
  );
}

export default App;
