import profileImage from "../../assets/images/header/profileImage.jpg";

//Icons
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function HeroComponenet() {
  return (
    <div className="hero container">
      <div className="hero_leftside">
        <h1>
          Hi, i am
          <br /> Stefan Dodevski.
        </h1>
        <p>
          A Prague based front-end developer passionate about building
          accessible and user friendly websites.
        </p>
        <div className="hero_leftside_buttons">
          <button className="hero_leftside_buttons_contact">
            <span>Contact me</span> <MdOutlineArrowOutward />
          </button>
          <div className="hero_leftside_buttons_linkedin">
            <FaLinkedinIn />
          </div>
          <div className="hero_leftside_buttons_github">
            <FaGithub />
          </div>
        </div>
      </div>
      <div className="hero_rightside">
        <img src={profileImage} alt="profile" />
      </div>
    </div>
  );
}

export default HeroComponenet;
