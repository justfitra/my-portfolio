"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useHash from "@/hooks/useHash";

import Link from "next/link";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SidebarContent = () => {
  const hash = useHash();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "/") {
      window.__ignoreHash = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.location.hash = "#about";
      setTimeout(() => {
        window.__ignoreHash = false;
      }, 800);
      return;
    }
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      window.__ignoreHash = true;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = href;
      setTimeout(() => {
        window.__ignoreHash = false;
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-start bg-primary">
      <div>
        <div>
          <h6 className="mb-2 text-tertiary">Hi, I am</h6>
          <h1 className="text-5xl font-bold my-2">Fitra Maulana</h1>
          <h2 className="text-2xl font-medium mt-2">Fullstack Developer</h2>
          <p className="mt-2 text-gray-500">
            I am a junior web developer who is only self-taught
          </p>
        </div>
        <div className="mt-10 text-lg">
          <ul>
            {[
              { href: "#about", label: "ABOUT" },
              { href: "#experience", label: "EXPERIENCE" },
              { href: "#projects", label: "PROJECTS" },
            ].map((item) => (
              <li key={item.href} className="my-4">
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="flex group items-center"
                  scroll={false}
                >
                  <div
                    className={`w-10 py-0 h-[1px] group-hover:w-24 ${
                      hash === item.href ? "w-24 bg-tertiary" : "bg-gray-400"
                    } group-hover:bg-tertiary transition-all ease-in-out duration-200 mr-3`}
                  ></div>
                  <span
                    className={`text-sm tracking-widest font-semibold group-hover:text-tertiary transition-all ease-in-out duration-200 ${
                      hash === item.href ? "text-tertiary" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
    </div>
  );
};

export default SidebarContent;
