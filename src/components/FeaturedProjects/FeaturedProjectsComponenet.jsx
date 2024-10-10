function FeaturedProjectsComponenet() {
  const projects = [
    {
      title: "Promotional landing page for our favorite show",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      image:
        "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      urlGithub: "https://github.com/StefanDodevski/Project-Title",
      urlWebsite: "https://github.com/StefanDodevski/Project-Title",
      year: 2022,
      role: "Front-End Developer",
    },
  ];

  return (
    <div className="featured">
      <div className="container">
        <h1>Featured Projects</h1>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>

        {projects.map((project) => (
          <div className="project" key={project.title}>
            <div className="leftside">
              <img src="{project.image}" alt="{project.title}" />
            </div>
            <div className="rightside">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjectsComponenet;
