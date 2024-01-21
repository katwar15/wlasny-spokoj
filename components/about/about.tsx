"use client";

import "./about.css";
import { motion } from "framer-motion";

import React from "react";

export default function About() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="aboutSection"
      id="omnie"
    >
      <h2 className="about">
        <b>Własny $pokój</b> to podkast o hajsie dla zmęczonych kapitalizmem,
        czyli finanse osobiste bez motywacyjnego bełkotu.
      </h2>
    </motion.section>
  );
}
