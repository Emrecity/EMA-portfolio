import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./page/Hero";
import LoadingScreen from "./component/LoadingScreen";
import About from "./page/About";
import Portfolio from "./page/Portfolio";
import Contact from "./page/Contact";

function App() {
  const [darktheme, setDarktheme] = useState<boolean | string>(false);
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`${darktheme ? "dark" : ""} overflow-x-hidden`}>
        <div className="container main-container">
          <Navbar setDarktheme={setDarktheme} darktheme={darktheme} />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
