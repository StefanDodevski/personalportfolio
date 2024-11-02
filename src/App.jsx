import "./App.scss";
import AboutMeComponent from "./components/AboutMe/AboutMeComponent";
import FeaturedProjectsComponenet from "./components/FeaturedProjects/FeaturedProjectsComponenet";
import HeroComponenet from "./components/Hero/HeroComponenet";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const projects = [
    {
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time...",
      year: "2023",
      role: "Front-end Developer",
      image: "path/to/adventure-time-image.png",
      liveDemo: "https://live-demo-link.com",
      github: "https://github.com/username/project",
    },
    {
      title: "Blog site for World News",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage...",
      year: "2023",
      role: "Front-end Developer",
      image: "path/to/world-news-image.png",
      liveDemo: "https://live-demo-link.com",
      github: "https://github.com/username/project",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroComponenet />
      <FeaturedProjectsComponenet projects={projects} />
      <AboutMeComponent />
    </>
  );
}

export default App;
