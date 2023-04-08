import "../styles/sectionThree/sectionThree.scss";
import ProjectCarousel from "../components/Carousel";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Section3() {
  const projectsIntroRef = useRef(null);
  const projectCarouselRef = useRef(null);
  const projectsIntroInView = useInView(projectsIntroRef);
  const projectCarouselInView = useInView(projectCarouselRef);
  const [projectsIntroAnimated, setProjectsIntroAnimated] = useState(false);
  const [projectCarouselAnimated, setProjectCarouselAnimated] = useState(false);

  if (projectsIntroInView && !projectsIntroAnimated) {
    setProjectsIntroAnimated(true);
  }

  if (projectCarouselInView && !projectCarouselAnimated) {
    setProjectCarouselAnimated(true);
  }

  return (
    <section className="section3">
      <motion.div
        ref={projectsIntroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          projectsIntroAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 1 }}
        className="projectsIntro"
      >
        <h2>My Projects</h2>
        <p>
          Explore my recent projects, showcasing the skills and creativity I've
          honed throughout the past six months of my front-end developer journey
        </p>
      </motion.div>

      <motion.div
        id="projects"
        ref={projectCarouselRef}
        initial={{ opacity: 0, y: 50 }}
        animate={
          projectCarouselAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
        }
        transition={{ duration: 1 }}
      >
        <ProjectCarousel />
      </motion.div>
    </section>
  );
}

export default Section3;
