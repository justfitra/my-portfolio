"use client";
import About from "@/components/About/page";
import Experience from "@/components/Experience/page";
import Navbar from "@/components/Navbar/page";
import Projects from "@/components/Projects/page";
import Sidebar from "@/components/Sidebar/page";
import useActiveSection from "@/hooks/useActiveSection";
import useHash from "@/hooks/useHash";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Transition, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "text" | "button";
interface SpringConfig {
  damping: number;
  stiffness: number;
}

type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

interface CursorVariants {
  [key: string]: {
    scale: number;
    backgroundColor: string;
    mixBlendMode: MixBlendMode;
    filter: string;
    opacity: number;
    width: number;
    height: number;
  };
}
const Home: React.FC = () => {
  const hash = useHash();

  const about = useRef<HTMLDivElement | null>(null);
  const experience = useRef<HTMLDivElement | null>(null);
  const projects = useRef<HTMLDivElement | null>(null);

  useActiveSection([
    { id: "about", ref: about },
    { id: "experience", ref: experience },
    { id: "projects", ref: projects },
  ]);
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");

  const cursorX = useMotionValue<number>(-100);
  const cursorY = useMotionValue<number>(-100);

  const springConfig: SpringConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent): void => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const variants: CursorVariants = {
    default: {
      scale: 1,
      backgroundColor: "#c4f112",
      mixBlendMode: "normal",
      filter: "blur(70px)",
      opacity: 1,
      width: 80,
      height: 80,
    },
  };

  const cursorTransition: Transition = {
    type: "spring",
    stiffness: 500,
    damping: 50,
  };

  return (
    <>
      <div className="flex flex-col items-center  justify-center  bg-gray-100 w-full">
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-10 mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={variants[cursorVariant]}
          transition={cursorTransition}
        />

        {/* Inner dot */}
        <motion.div
          className="fixed top-0 left-0 w-2 h-2  rounded-full pointer-events-none z-10"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          animate={{
            x: 12,
            y: 12,
          }}
        />

        <Navbar />
        <div className="w-full bg-primary z-30 h-auto px-8 md:px-16 pb-4 pt-28  flex flex-col items-start lg:hidden">
          <div className="block lg:hidden">
            <h6 className="mb-2">Hi, I am</h6>
            <h1 className="text-5xl font-bold my-2">Fitra Maulana</h1>
            <h2 className="text-2xl font-medium mt-2 text-tertiary">
              Fullstack Developer
            </h2>
            <p className="mt-2 text-gray-500">
              I am a junior web developer who is only self-taught
            </p>
          </div>
          <div className="flex gap-6 mt-8">
            <Link
              href="https://www.linkedin.com/in/fitra-maulana000"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </Link>
            <Link
              href={"https://github.com/justfitra"}
              target="_blank"
              className="text-gray-400 hover:text-white transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </Link>
            <Link
              href={"https://www.instagram.com/just.fitra/"}
              target="_blank"
              className="text-gray-400 hover:text-white transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </Link>
            <Link
              href={"https://x.com/justfitra1122"}
              target="_blank"
              className="text-gray-400 hover:text-white transition-all ease-in-out duration-200"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </Link>
          </div>
        </div>
        <Sidebar>
          <section
            ref={about}
            className={`${hash === "#about" ? "text-white" : "text-gray-400"}`}
            id="about"
          >
            <About />
          </section>

          <section
            ref={experience}
            className={`${
              hash === "#experience" ? "text-white" : "text-gray-400"
            }`}
            id="experience"
          >
            <Experience />
          </section>
          <section
            ref={projects}
            className={`${
              hash === "#projects" ? "text-white" : "text-gray-400"
            }`}
            id="projects"
          >
            <Projects />
          </section>
        </Sidebar>
      </div>
    </>
  );
};

export default Home;
