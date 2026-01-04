import { usePathname } from "next/navigation";
import { RefObject, useEffect } from "react";

type Section = {
  id: string;
  ref: RefObject<HTMLDivElement | null>;
};

const useActiveSection = (sections: Section[]) => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entires) => {
        entires.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            // ignore observer when a programmatic scroll is in progress
            if (window.__ignoreHash) return;
            if (id === "about" && pathname === "/") {
              window.location.hash = "";
            } else if (id) {
              window.location.hash = `#${id}`;
            }
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -40% 0px",
      }
    );

    sections.forEach((section) => {
      if (section.ref && section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  });
};

export default useActiveSection;
