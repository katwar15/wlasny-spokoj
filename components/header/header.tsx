"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import navLogo from "../../public/navLogo.svg";
import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="listNav">
          <motion.li className="liNav" key={"#podcast"}>
            <Link className="linkA" href="#podcast">
              podcast
            </Link>
          </motion.li>
          <motion.li className="liNav">
            <a className="linkA" href="/jak-dziala">
              jak to działa
            </a>
          </motion.li>
          <motion.li className="liNav">
            <Link className="linkA" href="/">
              <Image
                width={120}
                height={120}
                priority={true}
                alt="logo"
                src={navLogo}
              ></Image>
            </Link>
          </motion.li>
          <motion.li className="liNav">
            <Link className="linkA" href="">
              sypnij hajsem
            </Link>
          </motion.li>
          <motion.li className="liNav" key={"#kontakt"}>
            <Link className="linkA" href="#kontakt">
              kontakt
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
