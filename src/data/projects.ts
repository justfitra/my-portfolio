import { StaticImageData } from "next/image";
import image1 from "../../public/images/wedding-website.png";
import image2 from "../../public/images/olshop-website.png";
import image3 from "../../public/images/dome-website.png";

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
  {
    image: image3,
    title: "Dome Indonesia",
    subtitle: "Mosque Dome Manufacturer Website",
    description: `Dome Indonesia is a company specializing in the design, production, and installation of high-quality mosque domes, serving clients across Indonesia. For this project, I developed a company profile website that presents their full range of products and services in a clean, informative, and conversion-focused layout.
The site showcases multiple dome materials — enamel, GRC (Glassfiber Reinforced Cement), galvalum, and stainless steel with gold finishing — as well as several dome shapes inspired by iconic mosque architecture, including Nabawi, Madina, Pinang, and Bawang styles. It also features a gallery of ceiling motifs and calligraphy designs, along with an extensive portfolio section displaying dozens of completed mosque dome projects to build trust and showcase real-world craftsmanship.`,
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
      { id: 1, text: "Responsive landing page highlighting the company's value propositions (free site survey, free 3D design, free installation, free shipping)" },
      { id: 2, text: "Structured product catalog organized by dome type and shape, each with descriptive specifications" },
      { id: 3, text: "Image gallery sections for ceiling motifs and past projects" },
      { id: 4, text: "Direct WhatsApp integration on every product card, enabling instant customer inquiries with pre-filled messages per product" },
    ],
    details: `The goal was to give Dome Indonesia a professional online presence that reflects the quality of their craftsmanship while making it effortless for potential clients to browse products and reach out directly via WhatsApp — the primary sales channel for this business.`,
    git: "https://github.com/JustNgoding/kubah-app",
    website: "https://www.domeindonesia.id/",
  },
];

export default projects;
