"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import ArrowRight from "../../public/arrowRight.svg";

import "./contact.css";

export default function Contact() {
  return (
    <motion.section
      className="kontaktSection"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      id="kontakt"
    >
      <h2 className="kontaktH2">Kontakt</h2>
      <h3 className="kontaktH3">
        Skontaktuj się ze mną bezpośrednio{" "}
        <a className="kontaktH3" href="mailto: ilia@ilia.pl">
          {" "}
          <b>ilia@ilia.pl</b>
        </a>{" "}
        lub przez ten formularz:
      </h3>
      <form>
        <input type="email" placeholder="Twój email" required></input>
        <textarea
          name="message"
          placeholder="Miejsce na wiadomość"
          required
        ></textarea>
        <button className="kontaktButton" type="submit">
          Wyślij <Image alt="arrow" src={ArrowRight} width="50"></Image>
        </button>
      </form>
    </motion.section>
  );
}
