import "./App.scss";
import FeaturedProjectsComponenet from "./components/FeaturedProjects/FeaturedProjectsComponenet";
import HeroComponenet from "./components/Hero/HeroComponenet";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroComponenet />
      <FeaturedProjectsComponenet />
    </>
  );
}

export default App;
