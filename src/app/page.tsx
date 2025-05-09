"use client";
import Navbar from "@/components/Navbar/page";
import Sidebar from "@/components/Sidebar/page";
import useActiveSection from "@/hooks/useActiveSection";
import useHash from "@/hooks/useHash";
import About from "@/view/About";
import Experience from "@/view/Experience";
import Projects from "@/view/Projects";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const hash = useHash();

  const about = useRef<HTMLDivElement | null>(null);
  const experience = useRef<HTMLDivElement | null>(null);
  const projects = useRef<HTMLDivElement | null>(null);

  useActiveSection([
    { id: "about", ref: about },
    { id: "experience", ref: experience },
    { id: "projects", ref: projects },
  ]);

  return (
    <>
      <div className="flex flex-col items-center  justify-center  bg-gray-100 w-full">
        <Navbar />
        <div className="w-full bg-[#1D1B38] px-8 md:px-16 pb-4 pt-28  flex flex-col items-start lg:hidden">
          <div className="block lg:hidden">
            <h6 className="mb-2">Hi, I am</h6>
            <h1 className="text-5xl font-bold my-2">Fitra Maulana</h1>
            <h2 className="text-2xl font-medium mt-2">Fullstack Developer</h2>
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
}
