"use client";

import Image from "next/image";
import React, { use } from "react";
import "./intro.css";
import IliaWlasnySpokoj from "../../public/IliaWlasnySpokoj.png";
import { motion } from "framer-motion";
import Link from "next/link";
import ArrowRight from "../../public/arrowRight.svg";
import instagram from "../../public/instagram.svg";
import linkedin from "../../public/linkedin.svg";

const Intro = () => {
  return (
    <section>
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
        className="intro"
      >
        <Image
          src={IliaWlasnySpokoj}
          alt="zdjęcie osoby założycielskiej Własny Spokój"
          width="150"
          height="150"
          quality="95"
          priority={true}
          className="iliaImg"
        ></Image>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="hIntro"
        >
          o mnie
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="h2Intro"
        >
          <b>Własny $pokój</b> to podkast o hajsie dla zmęczonych kapitalizmem,
          czyli finanse osobiste bez motywacyjnego bełkotu.
        </motion.h2>
      </motion.div>
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
        className="buttons"
      >
        <Link href="#contact" className="buttonContact">
          Napisz do mnie <Image alt="arrow" src={ArrowRight} width="50"></Image>
        </Link>
        <Link href="#contact" className="buttonInstagram">
          <Image
            className="ikona"
            alt="ikona instagram"
            src={instagram}
            width="30"
          ></Image>
        </Link>
        <Link href="#contact" className="buttonLinkedin">
          <Image
            className="ikona"
            alt="ikona linkedin"
            src={linkedin}
            width="40"
          ></Image>
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
