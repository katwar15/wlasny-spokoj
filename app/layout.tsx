import "./globals.css";
import { Montserrat } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Własny $pokój",
  description: "Doszkalam się i ewoluuję w ramach finansów",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
