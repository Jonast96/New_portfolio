import "../styles/sectionThree/sectionThree.scss";
import ProjectCarousel from "../components/Carousel";
function Section3() {
  return (
    <section className="section3">
      <div className="projectsIntro">
        <h2>My Projects</h2>
        <p>
          Explore my recent projects, showcasing the skills and creativity i've
          honed throughout the past six months of my front-end developer journey
        </p>
      </div>

      <ProjectCarousel />
    </section>
  );
}

export default Section3;
