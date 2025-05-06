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
          console.log(entry);
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            console.log(id);

            if (id === "about" && pathname === "/") {
              window.location.hash = "";
            } else if (id) {
              window.location.hash = `#${id}`;
            }
          }
        });
      },
      {
        threshold: 0.8, // 60% section terlihat baru ganti hash
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
