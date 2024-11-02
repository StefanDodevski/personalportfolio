function AboutMeComponent() {
  return (
    <section className="about-me">
      <div className="about-me__title-container">
        <h2 className="about-me__title">About Me</h2>
      </div>
      <div className="about-me__content">
        <h3 className="about-me__headline">
          I am a front-end developer based in Sydney.
          <br />
          Has Mechanical Engineering background.
        </h3>
        <p className="about-me__description">
          I am a front-end developer based in Sydney looking for exciting
          opportunities. Has Mechanical Engineering background. Likes to focus
          on accessibility when developing. Passionate and curious about solving
          problems. Currently, I'm exploring Reactjs, Webflow and a bit of
          Designing. While I am not programming, I enjoy playing football,
          photography and playing Valorant. Learning more to improve skill.
        </p>
        <a href="#more" className="about-me__link">
          More About Me
        </a>
      </div>
    </section>
  );
}

export default AboutMeComponent;
