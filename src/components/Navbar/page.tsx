import useHash from "@/hooks/useHash";
import Link from "next/link";

const Navbar = () => {
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
    <>
      <nav className="bg-primary fixed top-0 z-20 w-full max-w-7xl px-8 py-8 flex lg:hidden">
        <div>
          <ul className="flex justify-between gap-11 ">
            {[
              { href: "#about", label: "ABOUT" },
              { href: "#experience", label: "EXPERIENCE" },
              { href: "#projects", label: "PROJECTS" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative pb-1 group items-center"
                  scroll={false}
                >
                  <div
                    className={`text-sm tracking-widest font-semibold group-hover:text-tertiary group-hover:border-b-2  transition-all ease-in-out duration-200 ${
                      hash === item.href ? "text-tertiary" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </div>
                  <span
                    className={`absolute left-0 -bottom-3 h-[2px] w-full bg-tertiary transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
                      hash === item.href ? "scale-x-100" : ""
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
