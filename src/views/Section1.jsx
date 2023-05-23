import "../styles/sectionOne/sectionOne.scss";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { motion } from "framer-motion";
import blob1 from "../assets/blob1.png";
import blob2 from "../assets/blob2.png";

function Section1() {
  const fromRight = {
    hidden: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0 },
  };
  const fromLeft = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="sectionOne">
      <motion.div
        className="intro"
        variants={fromRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span className="name">Jon</span>{" "}
        </h1>
        <p>
          As a creative front-end developer, I bring web designs to life with
          seamless user experiences. Skilled in HTML, CSS, JavaScript and React,
          I thrive on tackling challenges and transforming digital ideas to
          reality. Dive into my projects and let's make something amazing
          together.
        </p>
      </motion.div>
      <motion.div
        className="latestProjectContainer"
        variants={fromLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <div className="latestProject">
          <h2>
            Currently working on -{" "}
            <a href="https://dev-jon-holidaze.netlify.app/" target="_blank">
              Holidaze
            </a>
          </h2>
          <a
            target="blank"
            href="https://dev-jon-holidaze.netlify.app/"
            className="imgDiv"
          >
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </a>

          <p>
            View this in progress project on{" "}
            <a href="https://github.com/Jonast96/Holidaze" target="_blank">
              Github
            </a>
            , or view more of my <a href="#projects">Projects</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
export default Section1;
