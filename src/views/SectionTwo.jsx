import "../styles/sectionTwo/sectionTwo.scss";

import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import bootstrap from "../assets/bootstrap.png";
import javaScript from "../assets/java-script.png";

function SectionTwo() {
  return (
    <section className="sectionTwo">
      <div className="info">
        <h2>A little more about me</h2>
        <p>
          As a front-end developer with a passion for creating things from
          scratch, I've discovered that the art of combining simple elements to
          craft complex and enjoyable experiences is not only present in
          culinary arts but also in web development.
        </p>
        <p>
          In my past career as a chef, I loved blending ingredients like
          carrots, onions, and spices to create delicious dishes. Similarly, in
          web development, I find joy in mixing colors, shapes, and
          interactivity to build immersive digital environments that delight and
          engage users.
        </p>
        <p>
          Outside of coding, I enjoy spending time in nature through fishing,
          hunting, and hiking, as well as keeping up with the latest tech trends
          and playing games.
        </p>
      </div>
      <div className="mySkills">
        <h4>My skills</h4>
        <div className="imgDiv">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javaScript} alt="" />
          <img src={react} alt="" />
          <img src={sass} alt="" />
          <img src={bootstrap} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
