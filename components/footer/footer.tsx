import Image from "next/image";
import Link from "next/link";
import React from "react";
import podcastWS from "../../public/podcastWS.png";
import ArrowRight from "../../public/arrowRight.svg";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <small className="footerP">&copy; 2024 Wszystkie prawa zastrzeżone</small>
      <p className="footerP">
        <span>
          Wykonała: {""}
          <Link className="footerLink" href="kwarmuz.pl">
            kwarmuz.pl
          </Link>
        </span>
      </p>
    </footer>
  );
}
