import { StaticImageData } from "next/image";
import image1 from "../../public/images/wedding-website.png";
import image2 from "../../public/images/olshop-website.png";

export interface ListItem {
  id: number;
  text: string;
}

export interface ListFeatures {
  id: number;
  text: string;
}

export interface Project {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  list: ListItem[];
  features: string;
  listFeatures: ListFeatures[];
  details: string;
  git: string;
  website: string;
}

const projects: Project[] = [
  {
    image: image1,
    title: "Wedding Website Project",
    subtitle: "Personal Project 2025",
    description: ` A fully responsive wedding website built to showcase wedding
              details, event timelines, RSVP forms, and photo galleries. The
              goal was to create a clean, elegant design with a smooth user
              experience for wedding guests.`,
    technology: "Teach Stack : ",
    list: [
      { id: 1, text: "HTML" },
      { id: 2, text: "CSS" },
      { id: 3, text: "JavaScript" },
      { id: 4, text: "Tailwind Css" },
    ],
    features: "Key Features :",
    listFeatures: [
      { id: 1, text: "Bride & Groom introduction section" },
      { id: 2, text: "Countdown to the wedding day" },
      { id: 3, text: "Event location with Google Maps integration" },
      { id: 4, text: "Online RSVP form" },
      { id: 5, text: "Photo gallery and wishes section" },
    ],
    details: `   I built this project to learn how to design elegant, real-world
              user interfaces and handle form submission on the web.`,
    git: "https://github.com/justfitra/wedding-app",
    website: "",
  },
  {
    image: image2,
    title: "Digital Product Shop",
    subtitle: "Personal Project 2025",
    description: `An online store for digital products such as design templates,
                icons, and e-books. Users can browse, search, and purchase
                downloadable items.`,
    technology: "Teach Stack :",
    list: [
      { id: 1, text: "Next.js" },
      {
        id: 2,
        text: "TailwindCss.",
      },
    ],
    features: "Key Features :",
    listFeatures: [
      { id: 1, text: "Product listing and filtering" },
      { id: 2, text: "Responsive design for all devices" },
      { id: 3, text: "Product detail page" },
      { id: 4, text: "Cart simulation and checkout UI" },
    ],
    details: `This project helped me understand the basics of e-commerce
                workflows, user navigation, and product management.`,
    git: "https://github.com/justfitra/digital-shop-app",
    website: "https://digital-shop-app.vercel.app/home",
  },
];

export default projects;
