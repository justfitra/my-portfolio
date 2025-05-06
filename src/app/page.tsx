"use client";
import Sidebar from "@/components/Sidebar/page";
import useActiveSection from "@/hooks/useActiveSection";
import useHash from "@/hooks/useHash";
import About from "@/view/About";
import Experience from "@/view/Experience";
import Projects from "@/view/Projects";
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
