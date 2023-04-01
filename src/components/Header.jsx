import "../styles/header/header.scss";
import React from "react";
import { motion } from "framer-motion";
function Header() {
  const fromLeft = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fromLeft}
      transition={{ duration: 1 }}
    >
      <nav>
        <ul>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </motion.div>
  );
}
export default Header;
