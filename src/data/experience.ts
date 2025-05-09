import { StaticImageData } from "next/image";
import image1 from "../../public/images/experience1.png";

export interface ListItem {
  id: number;
  text: string;
}
export interface Experience {
  image: StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  technology: string;
  list: ListItem[];
  details: string;
}

const experiences: Experience[] = [
  {
    image: image1,
    title: "Web Development Competition Participant Unikama Malang",
    subtitle: "UMKM Product Landing Page Competition – 2023",
    description: ` I took part in a web development competition held by Universitas
              Kanjuruhan Malang (Unikama), where participants were challenged to
              build a landing page for a local UMKM (small business) product
              provided by the organizers. I designed and developed a responsive,
              user-friendly page using HTML, CSS, JavaScript, and Bootstrap that
              highlighted the products features, benefits, testimonials,
              and included a simple order form.`,
    technology: "Technologies used:",
    list: [
      { id: 1, text: "HTML" },
      { id: 2, text: "CSS" },
      { id: 3, text: "JavaScript" },
      { id: 4, text: "Bootstrap" },
    ],
    details: `Although I did not win the competition, it was a valuable
              experience that enhanced my skills in building real-world UI
              solutions for small businesses under time constraints.`,
  },
  {
    image: image1,
    title: "Intern Web Developer",
    subtitle: "Vistech Software House – February 2023 to July 2023",
    description: `  During my 6-month internship at Vistech Software House, I gained
              hands-on experience in developing modern web applications. I was
              introduced to and actively involved in building RESTful APIs,
              using Laravel for backend development and ReactJS for frontend. I
              also learned and applied Tailwind CSS to build clean, responsive
              UI components.`,
    technology: "Key responsibilities and skills learned:",
    list: [
      { id: 1, text: "Built and integrated RESTful APIs using Laravel" },
      {
        id: 2,
        text: "Developed frontend components using ReactJS and Tailwind CSS.",
      },
      {
        id: 3,
        text: `Managed relational databases using MySQL and Laravel Eloquent
                ORM.`,
      },
      {
        id: 4,
        text: "Collaborated with the team using Git for version control.",
      },
      {
        id: 5,
        text: "Participated in Agile development workflow with daily stand-ups.",
      },
      {
        id: 6,
        text: `Performed debugging and implemented feature improvements on
                internal projects`,
      },
      {
        id: 7,
        text: `I contributed to internal tools such as an admin dashboard and
                an employee management system.`,
      },
    ],
    details: `I contributed to internal tools such as an admin dashboard and an
              employee management system.`,
  },
];

export default experiences;
