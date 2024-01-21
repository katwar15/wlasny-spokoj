"use client";

import React from "react";
import { motion } from "framer-motion";

import "./sectionDivider.css";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="divider"
    ></motion.div>
  );
};

export default SectionDivider;
