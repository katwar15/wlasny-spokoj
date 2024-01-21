import planowanieImg from "@/public/planowanie.png";
import spokojImg from "@/public/spokoj.png";
import odgruzowanieImg from "@/public/odgruzowanie.png";

export const krokiData = [
  {
    number: 1,
    title: "Planowanie",
    description:
      "Własny $pokój to podkast o hajsie dla zmęczonych kapitalizmem, czyli finanse osobiste bez motywacyjnego bełkotu",
    imageUrl: planowanieImg,
  },
  {
    number: 2,
    title: "Odgruzowanie",
    description:
      "Własny $pokój to podkast o hajsie dla zmęczonych kapitalizmem, czyli finanse osobiste bez motywacyjnego bełkotu",
    imageUrl: spokojImg,
  },
  {
    number: 3,
    title: "... Spokój",
    description:
      "Własny $pokój to podkast o hajsie dla zmęczonych kapitalizmem, czyli finanse osobiste bez motywacyjnego bełkotu",
    imageUrl: odgruzowanieImg,
  },
] as const;
