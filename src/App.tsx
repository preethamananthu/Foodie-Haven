import "./App.css";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";


function App() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url('')] ">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
