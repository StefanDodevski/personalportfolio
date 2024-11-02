/* eslint-disable react/prop-types */
import image1 from "../../assets/images/studies/image1.png";
const FeaturedProjectsComponenet = ({ projects }) => {
  return (
    <section className="featured">
      <h2 className="featured__title">Featured Projects</h2>
      <p className="featured__subtitle">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>

      <div className="featured__projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project__image">
              <img src={image1} alt={project.title} />
              <span className="project__tag">Conceptual Work</span>
            </div>
            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <div className="project__details">
                <p>
                  <strong>Year:</strong> {project.year}
                </p>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
              </div>
              <div className="project__links">
                <a
                  href={project.liveDemo}
                  className="project__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="project__link project__link--github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjectsComponenet;
