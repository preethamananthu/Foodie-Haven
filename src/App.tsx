import "./App.css";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";


function App() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('')] ">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
