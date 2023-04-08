import "../styles/sectionOne/sectionOne.scss";
import dealDash from "../assets/dealDash.png";
import dealDashCheckout from "../assets/dealDashCheckout.png";
import dealDashItem from "../assets/dealDashItem.png";
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

  const animationProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  };

  return (
    <section className="sectionOne">
      <motion.div className="blobContainer blob1" {...animationProps}>
        <img src={blob1} alt="" />
      </motion.div>
      <motion.div className="blobContainer blob2" {...animationProps}>
        <img src={blob2} alt="" />
      </motion.div>
      <motion.div
        className="intro"
        variants={fromRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm Jon</h1>
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
            My latest project -{" "}
            <a href="https://joyful-dodol-3ac527.netlify.app/" target="_blank">
              DealDash
            </a>
          </h2>
          <div className="imgDiv">
            <div>
              <img src={dealDash} alt="" />
            </div>
            <div>
              <img src={dealDashCheckout} alt="" />
            </div>
            <div>
              <img src={dealDashItem} alt="" />
            </div>
          </div>
          <p>
            View more of my <a href="#projects">Projects</a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
export default Section1;
