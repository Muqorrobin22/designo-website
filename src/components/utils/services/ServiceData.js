import WebDesign from "../../../assets/home/mobile/image-web-design.jpg";
import AppDesign from "../../../assets/home/mobile/image-app-design.jpg";
import GraphicDesign from "../../../assets/home/mobile/image-graphic-design.jpg";
import WebImage1 from "../../../assets/web-design/desktop/image-express.jpg";
import WebImage2 from "../../../assets/web-design/desktop/image-transfer.jpg";
import WebImage3 from "../../../assets/web-design/desktop/image-photon.jpg";
import WebImage4 from "../../../assets/web-design/desktop/image-builder.jpg";
import WebImage5 from "../../../assets/web-design/desktop/image-blogr.jpg";
import WebImage6 from "../../../assets/web-design/desktop/image-camp.jpg";
import AppImage1 from "../../../assets/app-design/desktop/image-airfilter.jpg";
import AppImage2 from "../../../assets/app-design/desktop/image-eyecam.jpg";
import AppImage3 from "../../../assets/app-design/desktop/image-faceit.jpg";
import AppImage4 from "../../../assets/app-design/desktop/image-todo.jpg";
import AppImage5 from "../../../assets/app-design/desktop/image-loopstudios.jpg";
import GraphImage1 from "../../../assets/graphic-design/desktop/image-change.jpg";
import GraphImage2 from "../../../assets/graphic-design/desktop/image-boxed-water.jpg";
import GraphImage3 from "../../../assets/graphic-design/desktop/image-science.jpg";

const ServiceData = [
  {
    title: "Web Design",
    img: WebDesign,
    to: "web-design",
    text: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    project: [
      {
        title: "EXPRESS",
        desc: "A multi-carrier shipping website for ecommerce businesses",
        images: WebImage1,
      },
      {
        title: "TRANSFER",
        desc: "Site for low-cost money transfers and sending money within seconds",
        images: WebImage2,
      },
      {
        title: "PHOTON",
        desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
        images: WebImage3,
      },
      {
        title: "BUILDER",
        desc: "Connects users with local contractors based on their location",
        images: WebImage4,
      },
      {
        title: "BLOGR",
        desc: "Blogr is a platform for creating an online blog or publication",
        images: WebImage5,
      },
      {
        title: "CAMP",
        desc: "Get expert training in coding, data, design, and digital marketing",
        images: WebImage6,
      },
    ],
  },
  {
    title: "App Design",
    img: AppDesign,
    to: "app-design",
    text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    project: [
      {
        title: "AIRFILTER",
        desc: "Solving the problem of poor indoor air quality by filtering the air",
        images: AppImage1,
      },
      {
        title: "EYECAM",
        desc: "Product that lets you edit your favorite photos and videos at any time",
        images: AppImage2,
      },
      {
        title: "FACEIT",
        desc: "Get to meet your favorite internet superstar with the faceit app",
        images: AppImage3,
      },
      {
        title: "TODO",
        desc: "A todo app that features cloud sync with light and dark mode",
        images: AppImage4,
      },
      {
        title: "LOOPSTUDIOS",
        desc: "A VR experience app made for Loopstudios",
        images: AppImage5,
      },
    ],
  },
  {
    title: "Graphic Design",
    img: GraphicDesign,
    to: "graphic-design",
    text: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    project: [
      {
        title: "TIM BROWN",
        desc: `A book cover designed for Tim Brown’s new release, ‘Change’`,
        images: GraphImage1,
      },
      {
        title: "BOXED WATER",
        desc: "A simple packaging concept made for Boxed Water",
        images: GraphImage2,
      },
      {
        title: "SCIENCE!",
        desc: "A poster made in collaboration with the Federal Art Project",
        images: GraphImage3,
      },
    ],
  },
];

export function servicesData() {
  return ServiceData;
}

export function ServiceDataForWeb() {
  const newData = ServiceData.map((a) => ({ ...a }));

  newData.splice(0, 1); //return {} , {}
  return newData;
}

export function ServiceDataForApp() {
  const newData = ServiceData.map((a) => ({ ...a }));

  newData.splice(1, 1); //return {} , {}
  return newData;
}

export function ServiceDataForGraphic() {
  const newData = ServiceData.map((a) => ({ ...a }));

  newData.splice(2, 1); //return {} , {}
  return newData;
}
