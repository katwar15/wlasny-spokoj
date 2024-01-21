import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Intro from "@/components/intro/intro";
import Posluchaj from "@/components/posluchaj/posluchaj";
import SectionDivider from "@/components/sectionDivider/sectionDivider";

import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Posluchaj />
      <SectionDivider />
      <Contact />
      <SectionDivider />
    </main>
  );
}
