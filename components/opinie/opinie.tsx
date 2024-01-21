"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import opinia from "../../public/opinia.png";
import "./opinie.css";

export default function Opinie() {
  return (
    <motion.section
      className="opinieSection"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      id="podcast"
    >
      <h2 className="opinieH2">Polecajki:</h2>
      <Marquee>
        <Image
          src={opinia}
          alt="zdjęcie osoby założycielskiej Własny Spokój"
          width="340"
          height="180"
          quality="95"
          priority={true}
          className="iliaImg"
        ></Image>
      </Marquee>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          stiffness: 125,
          delay: 0.1,
        }}
        className="dividerOpinie"
      ></motion.div>
    </motion.section>
  );
}
