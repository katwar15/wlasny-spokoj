"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import podcastWS from "../../public/podcastWS.png";
import ArrowRight from "../../public/arrowRight.svg";
import { motion } from "framer-motion";

import "./posluchaj.css";

export default function Posluchaj() {
  return (
    <motion.section
      className="posluchajSection"
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
      <h2 className="posluchajH2">Posłuchaj</h2>
      <div className="posluchajDiv">
        <Image
          src={podcastWS}
          alt="200"
          height="300"
          quality="95"
          priority={true}
          className="podcastImg"
        ></Image>
        <div className="posluchajDivDetails">
          <h3 className="posluchajH3">
            <b>Doszkalam się</b> i <b>ewoluuję</b> w ramach finansów, buduję
            podwaliny pod wymarzone życie zawodowe i prywatne.{" "}
            <b>Doszkalam się</b> i <b>ewoluuję</b> w ramach finansów, buduję
            podwaliny pod wymarzone życie zawodowe i prywatne.
          </h3>
          <Link href="" className="posluchajButton">
            Posłuchaj
            <Image alt="arrow" src={ArrowRight} width="50"></Image>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
