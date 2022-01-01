import { ReactComponent as SvgCanada } from "../../../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as SvgAus } from "../../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as Uk } from "../../../assets/shared/desktop/illustration-united-kingdom.svg";
import CanadaImgDesk from "../../../assets/locations/desktop/image-map-canada.png";
import CanadaImgTablet from "../../../assets/locations/tablet/image-map-canada.png";
import AustraliaImgDesk from "../../../assets/locations/desktop/image-map-australia.png";
import AustraliaImgTablet from "../../../assets/locations/tablet/image-map-australia.png";
import UkImgDesk from "../../../assets/locations/desktop/image-map-united-kingdom.png";
import UkImgTablet from "../../../assets/locations/tablet/image-map-uk.png";

const Aboutdata = [
  {
    title: "CANADA",
    office: `Designo Central Office 3886 Wellington StreetToronto, Ontario M9C 3J5`,
    contact1: "Contact P : +1 253-863-8967",
    contact2: "M : contact@designo.co",
    svg: <SvgCanada />,
    imagesDesk: CanadaImgDesk,
    imagesTablet: CanadaImgTablet,
  },
  {
    title: "AUSTRALIA",
    office: `Designo AU Office 19 Balonne StreetNew South Wales 2443`,
    contact1: "P : (02) 6720 9092",
    contact2: "M : contact@designo.au",
    svg: <SvgAus />,
    imagesDesk: AustraliaImgDesk,
    imagesTablet: AustraliaImgTablet,
  },
  {
    title: "United Kingdom",
    office: `Designo UK Office 13  Colorado WayRhyd-y-fro SA8 9GA`,
    contact1: "P : 078 3115 1400",
    contact2: "M : contact@designo.uk",
    svg: <Uk />,
    imagesDesk: UkImgDesk,
    imagesTablet: UkImgTablet,
  },
];

export function getAboutData() {
  return Aboutdata;
}
