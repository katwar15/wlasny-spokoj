"use client";
import "./jakToDziala.css";
import React from "react";
import { motion } from "framer-motion";
import { krokiData } from "../../lib/data";
import Image from "next/image";
import SectionDivider from "@/components/sectionDivider/sectionDivider";
import Opinie from "@/components/opinie/opinie";

type KrokiProps = (typeof krokiData)[number];

export default function JakDziala() {
  return (
    <motion.section
      className="dzialaSection"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="dzialaDivy">
        <h2 className="dzialaH2">Jak to działa?</h2>
        <div className="dzialaDiv">
          <h3 className="dzialaH3">
            <b>Własny $pokój</b> to podkast o hajsie dla zmęczonych
            kapitalizmem, czyli finanse osobiste bez motywacyjnego bełkotu.
          </h3>
        </div>
      </div>
      <SectionDivider />
      <div className="dzialaDivy">
        {krokiData.map((kroki, index) => (
          <React.Fragment key={index}>
            <Kroki {...kroki} />
          </React.Fragment>
        ))}
      </div>
      <Opinie />
    </motion.section>
  );
}

function Kroki({ number, title, description, imageUrl }: KrokiProps) {
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
      className="krokiSection"
    >
      <h2 className="krokiH2">{number}</h2>
      <h2 className="krokiH2">{title}</h2>
      <div className="krokiDiv">
        <Image
          src={imageUrl}
          alt=""
          width="300"
          height="300"
          quality="95"
          className="krokiImg"
        ></Image>
        <h3 className="krokiH3">{description}</h3>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
