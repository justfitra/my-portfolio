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
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.location.hash = "#about";
      return;
    }
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView();
      window.location.hash = href;
    }
  };
  return (
    <>
      <nav className="bg-[#1D1B38] fixed top-0 z-20 w-full max-w-7xl px-8 py-8 flex lg:hidden">
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
                  {/* <div
                    className={`w-10 py-0 h-[1px] group-hover:border-b ${
                      hash === item.href ? "border-b bg-gray-200" : "bg-gray-400"
                    } group-hover:bg-gray-200 transition-all ease-in-out duration-200 mr-3`}
                  ></div> */}
                  <div
                    className={`text-sm tracking-widest font-semibold group-hover:text-gray-200 group-hover:border-b-2  transition-all ease-in-out duration-200 ${
                      hash === item.href ? "text-gray-200" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </div>
                  <span
                    className={`absolute left-0 -bottom-3 h-[2px] w-full bg-white transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left ${
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
